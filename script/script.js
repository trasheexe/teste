
const button = document.getElementById('toggle-theme');
const video = document.getElementById('bg-video');

// URLs dos vídeos
const videos = {
  light: "videos/ceu-claro.mp4",
  dark: "Star background.mp4"
};

// Função para aplicar o tema
function applyTheme(theme) {
  document.body.className = theme;
  video.src = videos[theme];
  localStorage.setItem('theme', theme);
}

// Alternar tema
button.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(newTheme);
});

// Carregar o tema salvo ou padrão
window.addEventListener('load', () => {
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);
});
