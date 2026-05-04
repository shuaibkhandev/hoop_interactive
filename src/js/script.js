const toggleBtn = document.getElementById('pricing-toggle');
const toggleCircle = document.getElementById('toggle-circle');
const proPrice = document.getElementById('pro-price');
const bizPrice = document.getElementById('biz-price');

const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');

let isYearly = false;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        isYearly = !isYearly;

        if (isYearly) {
            toggleBtn.classList.remove('bg-gray-200');
            toggleBtn.classList.add('bg-indigo-600');
            toggleCircle.classList.remove('translate-x-1');
            toggleCircle.classList.add('translate-x-6');

            monthlyLabel.classList.remove('text-gray-900');
            monthlyLabel.classList.add('text-gray-500');
            yearlyLabel.classList.remove('text-gray-500');
            yearlyLabel.classList.add('text-gray-900');

            proPrice.textContent = '$23';
            bizPrice.textContent = '$79';
        } else {
            toggleBtn.classList.add('bg-gray-200');
            toggleBtn.classList.remove('bg-indigo-600');
            toggleCircle.classList.add('translate-x-1');
            toggleCircle.classList.remove('translate-x-6');

            monthlyLabel.classList.add('text-gray-900');
            monthlyLabel.classList.remove('text-gray-500');
            yearlyLabel.classList.add('text-gray-500');
            yearlyLabel.classList.remove('text-gray-900');

            proPrice.textContent = '$29';
            bizPrice.textContent = '$99';
        }
    });
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function openMenu() {
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenuOverlay.classList.remove('hidden');
    setTimeout(() => {
        mobileMenuOverlay.classList.remove('opacity-0');
        mobileMenuOverlay.classList.add('opacity-100');
    }, 10);

    mobileMenu.classList.remove('-translate-x-full');
    mobileMenu.classList.add('translate-x-0');
}

function closeMenu() {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuOverlay.classList.remove('opacity-100');
    mobileMenuOverlay.classList.add('opacity-0');
    setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
    }, 300);

    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
}

if (mobileMenuBtn && mobileMenu && mobileMenuCloseBtn && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', openMenu);
    mobileMenuCloseBtn.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach((el) => {
    observer.observe(el);
});
