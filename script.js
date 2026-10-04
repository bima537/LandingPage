// ===== NAVBAR SCROLL =====
const header = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const svg = mobileMenuBtn.querySelector('svg');
    if (mobileMenu.classList.contains('hidden')) {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>';
    } else {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>';
    }
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const svg = mobileMenuBtn.querySelector('svg');
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>';
    });
});

// ===== STAR RATING =====
const starBtns = document.querySelectorAll('.star-btn');
const ratingInput = document.getElementById('rating');
const ratingText = document.getElementById('ratingText');
const ratingLabels = ['', 'Kurang', 'Cukup', 'Puas', 'Bagus', 'Luar Biasa'];

starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = parseInt(btn.dataset.value);
        ratingInput.value = value;
        ratingText.textContent = ratingLabels[value];

        starBtns.forEach((b, index) => {
            if (index < value) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    });
});

// ===== FEEDBACK FORM =====
const feedbackForm = document.getElementById('feedbackForm');
const toast = document.getElementById('toast');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const kontak = document.getElementById('kontak').value;
    const rating = document.getElementById('rating').value;
    const pesan = document.getElementById('pesan').value;

    if (rating === '0') {
        ratingText.textContent = 'Pilih rating';
        return;
    }

    const waMessage = `Halo Kripik Ubi Chochi!%0A%0A` +
        `Kritik & Saran:%0A%0A` +
        `*Nama:* ${nama}%0A` +
        `*Kontak:* ${kontak}%0A` +
        `*Rating:* ${rating}/5%0A` +
        `*Pesan:* ${pesan}`;

    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank');

    toast.classList.add('show');

    feedbackForm.reset();
    ratingInput.value = '0';
    ratingText.textContent = 'Pilih';
    starBtns.forEach(b => b.classList.remove('active'));

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
