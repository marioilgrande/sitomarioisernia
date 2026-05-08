// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    if (iconMenu && iconClose) {
      iconMenu.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    }
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      if (iconMenu && iconClose) {
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// Footer year
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form (contatti.html)
const form = document.getElementById('contact-form');
if (form) {
  const showError = (id, msg) => {
    const group = document.getElementById('group-' + id);
    if (group) {
      group.classList.add('error');
      const err = group.querySelector('.form-error');
      if (err) err.textContent = msg;
    }
  };
  const clearErrors = () => {
    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const messaggio = form.messaggio.value.trim();
    let valid = true;

    if (nome.length < 2) { showError('nome', 'Il nome deve avere almeno 2 caratteri'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('email', "Inserisci un'email valida"); valid = false; }
    if (messaggio.length < 10) { showError('messaggio', 'Il messaggio deve avere almeno 10 caratteri'); valid = false; }

    if (!valid) return;

    // Open default mail client (since this is a static site without backend)
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg class="spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Apertura email...';

    const subject = encodeURIComponent('Richiesta dal sito - ' + nome);
    const body = encodeURIComponent(
      'Nome: ' + nome + '\n' +
      'Email: ' + email + '\n' +
      'Telefono: ' + (form.telefono.value || '-') + '\n\n' +
      'Messaggio:\n' + messaggio
    );

    setTimeout(() => {
      window.location.href = 'mailto:info@marioisernia.com?subject=' + subject + '&body=' + body;

      // Show toast
      const toast = document.getElementById('toast');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 5000);
      }

      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9z"/></svg> Invia il Messaggio';
    }, 600);
  });
}
