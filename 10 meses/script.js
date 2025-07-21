// Mostrar la nube después de 4 segundos (cuando la persona ya llegó)
setTimeout(() => {
  document.getElementById('nube').style.display = 'block';
},6500);

setTimeout(() => {
  document.getElementById('nube').style.display = 'block';

  // Detener animación de piernas
  document.querySelector('.pierna-izq').style.animation = 'none';
  document.querySelector('.pierna-der').style.animation = 'none';
}, 6500);

// Evento para mostrar mensaje final al hacer clic en la caja
document.querySelector('.caja').addEventListener('click', () => {
  // Ocultar todo lo anterior
  document.querySelector('.escena').style.display = 'none';

  // Mostrar el mensaje final
  document.getElementById('mensajeFinal').style.display = 'block';
   //ejecutar musica de fondo
  document.getElementById("musica").play();

  // Generar corazones flotantes
  const intervaloCorazones = setInterval(() => {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.textContent = "❤️";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 20 + "px";
  corazon.style.animationDuration = (Math.random() * 3 + 5) + "s";
  document.body.appendChild(corazon);
  setTimeout(() => corazon.remove(), 10000);
}, 300);

});
