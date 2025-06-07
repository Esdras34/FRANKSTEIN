


const text = "EU AMO MUITO VOCÊ! ❤️";
const typedText = document.getElementById("typed-text");
const startButton = document.getElementById("start-button");
const music = document.getElementById("bg-music");
const heartsContainer = document.getElementById("hearts-container");

startButton.addEventListener("click", () => {
  music.play();
  startTyping();
  startButton.style.display = "none";
  generateHearts();
});

function startTyping() {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      if (text.charAt(i) === "\n") {
        typedText.innerHTML += "<br>";
      } else {
        typedText.innerHTML += text.charAt(i);
      }
      i++;
    } else {
      clearInterval(interval);

      // Faz o texto sumir com animação
      setTimeout(() => {
        typedText.classList.add("fade-out");

        // Depois de sumir, mostra a imagem com fade-in
        setTimeout(() => {
          typedText.style.display = "none";
          showImage();
        }, 1000); // Tempo da animação de saída
      }, 3000); // Espera 3 segundos após digitação
    }
  }, 100);
}

function generateHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.innerHTML = "❤️";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

function showImage() {
  const video = document.createElement("video");
  video.src = "videoa.mp4"; // Substitua com o nome do seu vídeo
  video.controls = true; // Mostra os controles de play/pause
  video.autoplay = true; // Começa automaticamente
  video.classList.add("fade-in-video");
  document.body.appendChild(video);
}

