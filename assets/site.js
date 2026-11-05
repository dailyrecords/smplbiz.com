
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const panel = document.getElementById('mobile-nav-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      panel.hidden = true; toggle.setAttribute('aria-expanded','false');
    }));
  }
  document.querySelectorAll('.survey-options button').forEach(button => {
    button.addEventListener('click', () => {
      // The production questionnaire requires its original application backend.
      button.blur();
    });
  });
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
