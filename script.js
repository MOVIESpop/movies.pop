// ===================== PREMIUM CHECK =====================
function isPremium() {
  const user = localStorage.getItem("premiumUser");
  const expire = new Date(localStorage.getItem("premiumExpire"));
  return user && new Date() < expire;
}

// ===================== MODAL & PLAYER =====================
const movieGrid = document.getElementById("movieGrid");
const playerModal = document.getElementById("playerModal");
const player = document.getElementById("player");

function loadMovies() {
  if (!movies || movies.length === 0) return;

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    card.addEventListener("click", () => openModal(movie.id, movie.title));
    movieGrid.appendChild(card);
  });
}

function openModal(id, title) {
  if (!isPremium()) {
    const goPremium = confirm(`${title} זמין רק למנויי פרימיום! הירשם עכשיו ל-30 יום חינם.`);
    if (goPremium) window.location.href = "pro.html";
    return;
  }

  player.src = `https://drive.google.com/file/d/${id}/preview`;
  playerModal.classList.remove("hidden");
}

function closeModal() {
  player.src = "";
  playerModal.classList.add("hidden");
}

window.addEventListener("load", loadMovies);

// ===================== PARTICLES =====================
function spawnParticles(containerSelector=".particles") {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (0.8 + Math.random() * 0.7) + "s";
    container.appendChild(p);
    setTimeout(() => p.remove(), 1300);
  }
}

document.querySelectorAll(".premiumGift, button").forEach(btn => {
  btn.addEventListener("mouseenter", () => spawnParticles());
});

// ===================== PREMIUM FORM =====================
function setupPremiumForm() {
  const form = document.getElementById("form");
  const done = document.getElementById("done");
  if (!form || !done) return;

  form.querySelector("button").addEventListener("click", () => {
    const u = form.querySelector("#user").value;
    const e = form.querySelector("#email").value;
    const p = form.querySelector("#pass").value;
    const ok = form.querySelector("#ok").checked;

    if (!u || !e || !p) return alert("תמלא את כל השדות");
    if (!ok) return alert("נא לאשר את התנאים");

    const expire = new Date();
    expire.setDate(expire.getDate() + 30);
    localStorage.setItem("premiumUser", u);
    localStorage.setItem("premiumExpire", expire);

    form.style.display = "none";
    done.style.display = "block";
    spawnParticles("#done .particles");
  });
}

// ===================== INIT EVERYTHING =====================
window.addEventListener("load", setupPremiumForm);
