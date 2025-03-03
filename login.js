document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil input username dan password
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validasi input kosong
        if (!username || !password) {
            errorMessage.textContent = "Username dan password tidak boleh kosong!";
            return;
        }

        try {
            // Kirim request ke backend menggunakan Fetch API
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Login berhasil!");
                window.location.href = "dashboard.html"; // Redirect jika sukses
            } else {
                errorMessage.textContent = result.message; // Menampilkan pesan error (aman dari XSS)
            }
        } catch (error) {
            errorMessage.textContent = "Terjadi kesalahan, coba lagi.";
        }
    });
});
