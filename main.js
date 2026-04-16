function filterMarket(market) {
  const label = document.querySelector('#availability h2');
  const markets = { oakville: 'Oakville', burlington: 'Burlington', milton: 'Milton', mississauga: 'Mississauga', hamilton: 'Hamilton' };
  if (label) label.textContent = 'Open categories — ' + (markets[market] || '') + ' mailing';
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  form.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
