/**
 * Supabase client factory for the app.
 *
 * How to configure:
 * 1) Create a `.env` (or `.env.local`) file at the project root with:
 *
 *    VITE_SUPABASE_URL="https://YOUR-PROJECT-ref.supabase.co"
 *    VITE_SUPABASE_ANON_KEY="YOUR_PUBLIC_ANON_KEY"
 *
 * 2) Restart the dev server after creating/updating your .env file.
 */

import { createClient } from "@supabase/supabase-js";

const ENV_URL_KEY = "VITE_SUPABASE_URL";
const ENV_ANON_KEY = "VITE_SUPABASE_ANON_KEY";

const DEFAULT_OPTIONS = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
};

/**
 * Safely read environment variables from Vite or Node environments.
 * Vite in the browser replaces import.meta.env at build time.
 */
function readEnvVar(name) {
  // Prefer Vite style env
  const viteEnv =
    typeof import.meta !== "undefined" && import.meta && import.meta.env
      ? import.meta.env
      : undefined;

  if (viteEnv && typeof viteEnv[name] !== "undefined") {
    return viteEnv[name];
  }

  // Fallback to process.env if available (SSR or other tooling)
  const nodeEnv =
    typeof process !== "undefined" && process && process.env
      ? process.env
      : undefined;

  if (nodeEnv && typeof nodeEnv[name] !== "undefined") {
    return nodeEnv[name];
  }

  return undefined;
}

function buildMissingEnvMessage(missingKeys) {
  const keys = Array.isArray(missingKeys) ? missingKeys : [missingKeys];
  const list = keys.join(", ");
  return [
    `[Supabase] Missing environment variable(s): ${list}`,
    "",
    "Please define the following keys in your .env (or .env.local) at the project root:",
    `  ${ENV_URL_KEY}="https://YOUR-PROJECT-ref.supabase.co"`,
    `  ${ENV_ANON_KEY}="YOUR_PUBLIC_ANON_KEY"`,
    "",
    "After updating the .env file, restart your dev server.",
  ].join("\n");
}

function assertSupabaseEnv(url, anonKey) {
  const missing = [];
  if (!url) missing.push(ENV_URL_KEY);
  if (!anonKey) missing.push(ENV_ANON_KEY);
  if (missing.length > 0) {
    throw new Error(buildMissingEnvMessage(missing));
  }
}

/**
 * Create a new Supabase client using env vars by default.
 *
 * @param {Object} [opts]
 * @param {string} [opts.url]         Override for Supabase URL.
 * @param {string} [opts.anonKey]     Override for Supabase anon key.
 * @param {import('@supabase/supabase-js').SupabaseClientOptions<any>} [opts.options]
 * @returns {import('@supabase/supabase-js').SupabaseClient<any, "public", any>}
 */
export function createSupabaseClient(opts = {}) {
  const envUrl = readEnvVar(ENV_URL_KEY);
  const envAnon = readEnvVar(ENV_ANON_KEY);

  const url = opts.url ?? envUrl;
  const anonKey = opts.anonKey ?? envAnon;

  assertSupabaseEnv(url, anonKey);

  const options = {
    ...DEFAULT_OPTIONS,
    ...(opts.options || {}),
  };

  return createClient(url, anonKey, options);
}

/**
 * Lazy, memoized singleton getter.
 * Throws a helpful error the first time if env is not configured.
 */
let singleton = null;
/**
 * @returns {import('@supabase/supabase-js').SupabaseClient<any, "public", any>}
 */
export function getSupabaseClient() {
  if (!singleton) {
    singleton = createSupabaseClient();
  }
  return singleton;
}
