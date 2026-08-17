(function () {
  function getUtmSource() {
    var params = new URLSearchParams(window.location.search);
    return params.get('utm_source') || document.referrer || '';
  }

  function initForm(form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      var data = Object.fromEntries(new FormData(form).entries());
      data.utm_source = getUtmSource();

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          return res.json();
        })
        .then(function () {
          form.innerHTML = '<p style="font-family:Georgia,serif;font-size:1.05rem;">Thank you — your request has been received. We will contact you within one business day.</p>';
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          var errorEl = form.querySelector('.form-error');
          if (!errorEl) {
            errorEl = document.createElement('p');
            errorEl.className = 'form-error';
            errorEl.style.color = '#a33';
            errorEl.style.fontFamily = 'Arial,sans-serif';
            errorEl.style.fontSize = '0.85rem';
            form.appendChild(errorEl);
          }
          errorEl.textContent = 'Something went wrong. Please call (866) 958-8773 or try again.';
        });
    });
  }

  document.querySelectorAll('form[action="/thank-you/"]').forEach(initForm);
})();
