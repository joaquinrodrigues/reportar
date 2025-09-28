const navToggle = document.querySelector('.main-nav__toggle');
const navMenu = document.getElementById('nav-menu');

function closeMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navMenu.setAttribute('aria-hidden', String(expanded));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    closeMenu();
}

const newsletterForm = document.querySelector('.newsletter__form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput?.value.trim();

        if (!email) {
            emailInput?.focus();
            return;
        }

        alert(`¡Gracias por suscribirte, ${email}! Pronto recibirás nuestras noticias.`);
        newsletterForm.reset();
    });
}
