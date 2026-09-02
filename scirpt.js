document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // SCROLL REVEAL ANIMATION
    // ==========================================

    const fadeSections = document.querySelectorAll('.fade-in-section');

    if (fadeSections.length > 0) {

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('is-visible');

                    // Animasi hanya dijalankan sekali
                    observer.unobserve(entry.target);

                }

            });

        }, observerOptions);

        fadeSections.forEach(section => {
            observer.observe(section);
        });

    }


    // ==========================================
    // ANIMASI PROGRESS BAR SKILL
    // ==========================================

    const skillsSection = document.querySelector('#skills');

    if (skillsSection) {

        const skillBars = skillsSection.querySelectorAll('.absolute.bottom-0');

        if (skillBars.length > 0) {

            const skillObserver = new IntersectionObserver((entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        skillsSection.classList.add('is-visible');

                        observer.unobserve(entry.target);

                    }

                });

            }, {
                threshold: 0.2
            });

            skillBars.forEach(bar => {
                skillObserver.observe(bar);
            });

        }

    }


    // ==========================================
    // SMOOTH SCROLL NAVBAR
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener('click', function (event) {

            const targetId = this.getAttribute('href');

            if (!targetId || targetId === '#') {
                return;
            }

            const target = document.getElementById(
                targetId.substring(1)
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        });

    });

});


// ==========================================
// FORM PESAN
// ==========================================

function sendMessage(event) {

    event.preventDefault();

    const nameElement = document.getElementById('name');

    if (!nameElement) {
        return;
    }

    const name = nameElement.value;

    alert(
        'Terima kasih, ' +
        name +
        '! Pesan kamu sudah disiapkan.'
    );

}