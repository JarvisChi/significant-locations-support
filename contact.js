// Click-to-compose contact. This deters basic scrapers; it is not encryption.
(() => {
  const encoded = [115,105,103,110,105,102,105,99,97,110,116,108,111,99,97,116,105,111,110,115,64,103,109,97,105,108,46,99,111,109];
  document.querySelectorAll('[data-contact-support]').forEach(button => {
    button.disabled = false;
    button.addEventListener('click', () => {
      const address = String.fromCharCode(...encoded);
      const subject = document.title.replace(/\s*[—-]\s*(Support|Privacy Policy|Terms of Use).*$/, '') + ' Support';
      window.location.href = 'mailto:' + address + '?subject=' + encodeURIComponent(subject);
    });
  });
})();
