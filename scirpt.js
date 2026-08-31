document.addEventListener("DOMContentLoaded", function () {

    // Mengambil semua elemen yang memiliki class fade-in-section
    const fadeSections = document.querySelectorAll(".fade-in-section");

    // Pengaturan Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1
    };

    // Membuat observer
    const observer = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            // Jika section mulai terlihat
            if (entry.isIntersecting) {

                // Tambahkan class untuk menjalankan animasi
                entry.target.classList.add("is-visible");

                // Animasi hanya dijalankan satu kali
                observer.unobserve(entry.target);
            }

        });

    }, observerOptions);

    // Menjalankan observer pada setiap section
    fadeSections.forEach(function (section) {
        observer.observe(section);
    });

});