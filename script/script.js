const button = document.getElementById('toggle-theme');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // (opcional) salvar preferência no localStorage
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// (opcional) aplicar o tema salvo
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});
