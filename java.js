// === EFEITO DE ESTRELAS FLUTUANTES === //
const numStars = 100;
const stars = [];

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Gera estrelas
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.2
  });
}

let mouseX = 0, mouseY = 0;

// Movimento do mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animação das estrelas
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  
  for (let star of stars) {
    const dx = (mouseX - star.x) * 0.001;
    const dy = (mouseY - star.y) * 0.001;
    
    star.x += dx;
    star.y += dy + star.speed;

    if (star.y > canvas.height) star.y = 0;
    if (star.x > canvas.width) star.x = 0;
    if (star.x < 0) star.x = canvas.width;
    
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animateStars);
}

animateStars();

// Responsividade
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
