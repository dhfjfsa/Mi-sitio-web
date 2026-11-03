// Fecha actual en la barra superior
const fecha = document.getElementById("fecha");
fecha.textContent = "Kalona, " + new Date().toLocaleDateString("es-MX", {
  weekday: "long", day: "numeric", month: "long", year: "numeric"
});

// Menú desplegable en forma de lista
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const enlaces = document.querySelectorAll(".nav a");

function cerrarMenu() {
  nav.classList.remove("abierto");
  menuBtn.setAttribute("aria-expanded", "false");
}
menuBtn.addEventListener("click", () => {
  const abierto = nav.classList.toggle("abierto");
  menuBtn.setAttribute("aria-expanded", abierto);
});
enlaces.forEach(a => a.addEventListener("click", cerrarMenu));
document.addEventListener("click", e => {
  if (!nav.contains(e.target) && e.target !== menuBtn) cerrarMenu();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarMenu();
});

// Cintillo de última hora que rota los avisos
const avisos = [
  "Las autoridades piden a la población no salir de sus refugios.",
  "La CGO abre corredores de evacuación en el centro histórico.",
  "Cerradas las estaciones de tren y las rutas hacia City Hall.",
  "Se piden donaciones de sangre en los hospitales de la ciudad."
];
const ticker = document.getElementById("ticker");
let i = 0;
setInterval(() => {
  ticker.classList.add("oculto");
  setTimeout(() => {
    i = (i + 1) % avisos.length;
    ticker.textContent = avisos[i];
    ticker.classList.remove("oculto");
  }, 400);
}, 5000);

// Marcar en la lista la sección que se está viendo
const secciones = [...enlaces].map(a => document.querySelector(a.getAttribute("href")));
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      enlaces.forEach(a => a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { threshold: 0.4 });
secciones.forEach(s => s && obs.observe(s));

// Formulario: confirma, limpia el correo y borra el aviso a los 4 segundos
const form = document.getElementById("formAlertas");
const campo = document.getElementById("correo");
const msg = document.getElementById("msg");
let temporizador;

form.addEventListener("submit", e => {
  e.preventDefault();
  const correo = campo.value.trim();
  if (!correo) return;

  form.reset();
  campo.value = "";
  campo.blur();

  msg.textContent = "Listo, te registramos con " + correo + ".";
  clearTimeout(temporizador);
  temporizador = setTimeout(() => { msg.textContent = ""; }, 4000);
});