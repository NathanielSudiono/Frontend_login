Validasi Input: Form dicegah untuk dikirim jika username/password kosong.
Keamanan XSS: Pesan error ditampilkan dengan .textContent agar aman.
Penggunaan Fetch API: Login dikirim dengan fetch() ke /api/login untuk komunikasi backend tanpa reload halaman.
Error Handling: Jika login gagal, pesan error muncul tanpa merender ulang halaman.
