# 🏆 ML — Minang Language
### Firetech Hackathon Project

## 📖 Project Description
**ML (Minang Language)** adalah proyek kamus bahasa Minang dengan berbagai ragam dialek daerah di **Sumatera Barat**.
Konsepnya bersifat **open contributor**, bertujuan untuk menunjang *sustainability* budaya di tanah **West Sumatera** tercinta.

## 🎯 Tujuan
Proyek ini bertujuan untuk:
- Melestarikan kosakata bahasa Minang agar tidak punah.
- Membangun komunitas yang peduli terhadap bahasa dan budaya lokal.
- Menjadi sumber referensi pendidikan dan gudang data bagi inovator lokal.
- Mendukung pengembangan teknologi seperti *translator*, *text-to-speech (TTS)*, dan aplikasi pembelajaran bahasa Minang.
- Memberikan dampak ekonomi tidak langsung melalui pengembangan dan kolaborasi komunitas.

## 🌱 Fokus & Nilai
Fokus keberlanjutan kami bersifat **jangka panjang**.
Bagi kami, *smart solution* bukan hanya tentang **teknologinya**, tetapi juga tentang **solusi yang nyata**, **masyarakatnya**, dan **lingkungannya**.

Produk kami mungkin tampak sederhana secara teknologi,
namun kami yakin memiliki **dampak besar** terhadap permasalahan yang kami angkat.
Karena bagi kami, **orientasi terhadap solusi jauh lebih penting daripada sekadar kemewahan teknologi.**


## Author
Natta Std

## ⚙️ Supabase Setup

Supabase digunakan untuk autentikasi (email/password) dan dapat dipakai untuk database/CRUD.

1) Dependency
- Paket sudah ditambahkan di dependencies: @supabase/supabase-js

2) Konfigurasi environment
- Buat file .env atau .env.local di root project dengan isi:
```
VITE_SUPABASE_URL="https://YOUR-PROJECT-ref.supabase.co"
VITE_SUPABASE_ANON_KEY="YOUR_PUBLIC_ANON_KEY"
```
- Setelah menambahkan/mengubah .env, jalankan ulang dev server.

3) Client
- Client disediakan di src/lib/supabaseClient.js dan otomatis membaca env di atas.
- Contoh pemakaian:
```
import { getSupabaseClient } from "./src/lib/supabaseClient";

const supabase = getSupabaseClient();

// Contoh query
const { data, error } = await supabase.from("your_table").select("*");
```

4) Alur Auth di Aplikasi
- Register: menggunakan supabase.auth.signUp dengan user_metadata: name dan region.
- Login: menggunakan supabase.auth.signInWithPassword (email/password).
- Logout: menggunakan supabase.auth.signOut.
- Update Profil: mengubah name via supabase.auth.updateUser; perubahan region dikunci (tidak diizinkan).

5) Troubleshooting
- Jika muncul error “Missing environment variable(s) …” dari supabaseClient:
  - Pastikan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY terisi benar.
  - Simpan file .env dan restart dev server.
