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

// Contact form (contatti.html) — invio via FormSubmit
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
  const showToast = (id) => {
    const t = document.getElementById(id);
    if (t) {
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 5000);
    }
  };

  const submitBtn = form.querySelector('.btn-submit');
  const originalBtnHTML = submitBtn.innerHTML;
  const sendingHTML = '<svg class="spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Invio in corso...';

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

    submitBtn.disabled = true;
    submitBtn.innerHTML = sendingHTML;

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@marioisernia.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          telefono: form.telefono.value.trim() || '-',
          messaggio: messaggio,
          _subject: 'Nuovo contatto da ' + nome + ' – marioisernia.com',
          _template: 'table',
          _replyto: email
        })
      });

      const result = await response.json();
      if (!result.success) throw new Error('Submission failed');

      showToast('toast');
      form.reset();
    } catch (err) {
      console.error('Form submission error:', err);
      showToast('toast-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
    }
  });
}
