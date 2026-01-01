// Typed Text Effect
const roles = ["Java Developer", "Spring Boot Enthusiast", "DSA Solver"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typedElement = document.getElementById("typed-text");

function type() {
  if(i >= roles.length) i = 0;
  const fullText = roles[i];

  if(!isDeleting){
    currentText = fullText.slice(0, j+1);
    j++;
    typedElement.textContent = currentText;
    if(currentText === fullText) { isDeleting = true; setTimeout(type, 1500); return; }
  } else {
    currentText = fullText.slice(0, j-1);
    j--;
    typedElement.textContent = currentText;
    if(currentText === "") { isDeleting = false; i++; }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}
type();

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});



// tsParticles Background
tsParticles.load("tsparticles", {
  background: { color: { value: "#121212" } },
  fpsLimit: 60,
  particles: {
    number: { value: 80 },
    color: { value: ["#00bcd4", "#ff4081", "#ff9800"] },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: { min: 3, max: 7 } },
    move: { enable: true, speed: 2, direction: "none", random: true, outModes: { default: "bounce" } },
    links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.4, width: 1 }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "bubble" }, onClick: { enable: true, mode: "push" } },
    modes: { bubble: { distance: 150, size: 10, color: "#ff4081", duration: 2 }, push: { quantity: 4 } }
  },
  detectRetina: true
});
