// --------------------- בדיקת פרימיום ---------------------
function isPremium() {
  const user = localStorage.getItem("premiumUser");
  const expire = new Date(localStorage.getItem("premiumExpire"));
  const now = new Date();
  return user && expire > now;
}

// --------------------- נגן ומודאל ---------------------
const movieGrid = document.getElementById("movieGrid");
const playerModal = document.getElementById("playerModal");
const player = document.getElementById("player");

function loadMovies() {
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    card.addEventListener('click', () => openModal(movie.id));
    movieGrid.appendChild(card);
  });
}

function openModal(id) {
  if (!isPremium()) {
    alert("הסרט זמין רק למנויי פרימיום! הירשם לפרימיום 30 יום חינם.");
    return;
  }
  player.src = `https://drive.google.com/file/d/${id}/preview`;
  playerModal.classList.remove('hidden');
}

function closeModal() {
  player.src = '';
  playerModal.classList.add('hidden');
}

window.addEventListener('load', loadMovies);

// --------------------- פופים על כפתור פרימיום ---------------------
function spawnParticles() {
  const container = document.querySelector(".particles");
  for(let i=0;i<15;i++){
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random()*100 + "%";
    p.style.animationDuration = (0.8+Math.random()*0.5) + "s";
    container.appendChild(p);
    setTimeout(()=>p.remove(),1200);
  }
}

document.querySelector(".premiumGift").addEventListener("mouseenter", spawnParticles);
