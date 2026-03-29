const movieGrid = document.getElementById("movieGrid");
const playerModal = document.getElementById("playerModal");
const player = document.getElementById("player");

// צור כרטיסי סרטים
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

// פתח modal נגן
function openModal(id) {
  player.src = `https://drive.google.com/file/d/${id}/preview`;
  playerModal.classList.remove('hidden');
}

// סגור modal נגן
function closeModal() {
  player.src = '';
  playerModal.classList.add('hidden');
}

// אתחול
window.addEventListener('load', loadMovies);
