
  window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');
    audio.volume = 0.5; // opcional: define o volume

    // Tenta tocar o áudio automaticamente
    audio.play().catch(() => {
      // Se o navegador bloquear o autoplay, exibe botão para ativar
      const btn = document.createElement('button');
      btn.innerText = 'Clique para ativar a música 🎵';
      btn.style.position = 'fixed';
      btn.style.top = '20px';
      btn.style.left = '50%';
      btn.style.transform = 'translateX(-50%)';
      btn.style.zIndex = '9999';
      btn.style.padding = '10px 20px';
      btn.style.fontSize = '1em';
      btn.style.backgroundColor = '#ff4d6d';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
      
      btn.onclick = () => {
        audio.play();
        btn.remove(); // remove o botão após tocar
      };

      document.body.appendChild(btn);
    });
  });

