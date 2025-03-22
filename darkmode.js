<body>
    <!-- Konten lainnya -->
    <button id="theme-toggle">🌙 Mode Gelap</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const toggleButton = document.getElementById("theme-toggle");
            const body = document.body;

            if (!toggleButton) {
                console.error("Element #theme-toggle tidak ditemukan!");
                return;
            }

            if (localStorage.getItem("darkMode") === "enabled") {
                body.classList.add("dark-mode");
                toggleButton.textContent = "☀️ Mode Terang";
            }

            toggleButton.addEventListener("click", function () {
                if (body.classList.contains("dark-mode")) {
                    body.classList.remove("dark-mode");
                    localStorage.setItem("darkMode", "disabled");
                    toggleButton.textContent = "🌙 Mode Gelap";
                } else {
                    body.classList.add("dark-mode");
                    localStorage.setItem("darkMode", "enabled");
                    toggleButton.textContent = "☀️ Mode Terang";
                }
            });
        });
    </script>
</body>
