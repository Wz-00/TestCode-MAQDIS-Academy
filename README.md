# TestCode MAQDIS Academy

**Repo:** `Wz-00/TestCode-MAQDIS-Academy`

Dokumentasi singkat untuk tugas-tugas Node.js di repo ini:

- `Tugas 2/type.js` → output: **MAQDIS Academy is awesome**
- `Tugas 3/conditional.js` → werewolf (validasi nama & peran, loop peran sampai valid)
- `Tugas 4/looping.js` → looping naik & turun sesuai soal
- `app.js` → server Express dengan beberapa endpoint (GET/POST sesuai spesifikasi)
- Script NPM sudah ditetapkan di `package.json` (cek file).

---

## Prasyarat
- Node.js (v14+ direkomendasikan)
- npm (disertakan dengan Node.js)

---

## Instalasi (sekali saja)
1. Clone repo:
```bash
git clone https://github.com/Wz-00/TestCode-MAQDIS-Academy.git
cd TestCode-MAQDIS-Academy
```
2. Install dependency (untuk server Express di `app.js`):
```bash
npm install express
npm install
```

---

## Struktur file penting
- `Tugas 2/type.js` — script untuk concat string.
- `Tugas 3/conditional.js` — werewolf CLI (interaktif + argumen) dan loop validasi role sampai benar.
- `Tugas 4/looping.js` — menampilkan `LOOPING PERTAMA` dan `LOOPING KEDUA`.
- `app.js` — server Express dengan endpoint.
- `package.json` — skrip NPM (cek dan sesuaikan jika nama folder ada spasi).

---

## Jalankan tugas (npm run)
Menjalankan setiap tugas:
```bash
npm run tugas2    # menjalankan tugas 2
npm run tugas3    # menjalankan tugas 3
npm run tugas4    # menjalankan tugas 4
npm start         # menjalankan server (app.js)
```

Kalau npm script tidak tersedia atau path berbeda, jalankan langsung:
```bash
node "Tugas 2/type.js"
node "Tugas 3/conditional.js"
node "Tugas 4/looping.js"
node app.js
```

---

## Detail tiap tugas

### Tugas 2 — `Tugas 2/type.js`
**Deskripsi:** Menggabungkan variabel string menjadi satu kalimat.
**Input:** tidak ada I/O interaktif (hardcoded variables)
**Output (console):**
```
MAQDIS Academy is awesome
```
**Jalankan:**
```bash
npm run tugas2
# atau
node "Tugas 2/type.js"
```

---

### Tugas 3 — `Tugas 3/conditional.js` (Werewolf)
**Deskripsi:** Program meminta `nama` dan `peran`. Validasi:
- Jika `nama` kosong → cetak `Nama harus diisi!` dan berhenti.
- Jika `nama` ada, `peran` kosong → cetak `Halo <Nama>, Pilih peranmu untuk memulai game!`
- Jika `peran` tidak valid → minta input ulang sampai user memasukkan `Penyihir`, `Guard`, atau `Werewolf`.
- Output sesuai contoh (welcome + pesan peran).

**Mode:**
- Interaktif (jalan `node ...` tanpa argumen → program akan prompt `Masukkan nama:` lalu `Masukkan peran ...`).
- Argumen: `node conditional.js "John" "Penyihir"` — jika argumen peran salah/empty, program akan minta input ulang lewat prompt.

**Contoh:**
```bash
# interaktif
npm run tugas3
# atau
node "Tugas 3/conditional.js"
```

---

### Tugas 4 — `Tugas 4/looping.js`
**Deskripsi:** Menampilkan:
```
LOOPING PERTAMA
2 - I love coding
4 - ...
...
20 - I love coding

LOOPING KEDUA
20 - I will become a mobile developer
18 - ...
...
2 - I will become a mobile developer
```
**Jalankan:**
```bash
npm run tugas4
# atau
node "Tugas 4/looping.js"
```

---

### Server & Endpoints — `app.js`
**Start server:**
```bash
npm start
# atau
node app.js
```
Default server berjalan di `http://localhost:3000` (atau `PORT` dari environment variable).

**Endpoint dan contoh request/respon:**

1. **GET /hello**
   - **Deskripsi:** Endpoint sambutan.
   - **Response (JSON):**
   ```json
   { "status": "success", "message": "welcome to Maqdis Academy" }
   ```
   - **curl:**
   ```bash
   curl -i http://localhost:3000/hello
   ```

2. **POST /post**
   - **Deskripsi:** Contoh POST balik data sukses.
   - **Response (JSON):**
   ```json
   { "data": 100, "status": "berhasil" }
   ```
   - **curl:**
   ```bash
   curl -i -X POST http://localhost:3000/post -H "Content-Type: application/json" -d '{}'
   ```

3. **POST /hapus**
   - **Deskripsi:** Simulasi hapus (POST).
   - **Response (JSON):**
   ```json
   { "data": 0, "status": "berhasil hapus" }
   ```
   - **curl:**
   ```bash
   curl -i -X POST http://localhost:3000/hapus -H "Content-Type: application/json" -d '{}'
   ```

4. **GET /setoran**
   - **Deskripsi:** Mengembalikan data setoran contoh.
   - **Response (JSON):**
   ```json
   {
     "message": "berhasil",
     "id_setoran": 58,
     "id_user": 3441,
     "id_juz": 30
   }
   ```
   - **curl:**
   ```bash
   curl -i http://localhost:3000/setoran
   ```

---

## Troubleshooting (Masalah umum & solusi cepat)
- **404 / file not found saat `npm run tugas2`** → pastikan `package.json` menunjuk ke path yang benar. Jika ada spasi di folder, bungkus path dengan tanda kutip ganda di `package.json` script (lihat contoh di atas).
- **Server tidak jalan (port already in use)** → matikan proses yang pakai port 3000, atau jalankan `PORT=4000 npm start`.
- **`npm install` tidak menginstal express** → pastikan `dependencies` mencantumkan `express` di `package.json`; jika tidak ada, jalankan `npm install express`.

---