// 🔐 בדיקת פרימיום
function isPremium() {
  let user = localStorage.getItem("premiumUser");
  let expire = new Date(localStorage.getItem("premiumExpire"));
  let now = new Date();
  return user && expire > now;
}

// 📦 אלמנטים
const movieGrid = document.getElementById("movieGrid");
const playerModal = document.getElementById("playerModal");
const player = document.getElementById("player");

// ⚡ movies צריך להיות מוגדר ב-data.js
// דוגמה:
// const movies = [
//   {id:"FILE_ID1", title:"סרט ראשון", image:"assets/movie1.jpg"},
//   {id:"FILE_ID2", title:"סרט שני", image:"assets/movie2.jpg"}
// ];

// 🌟 צור כרטיסי סרטים
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

// 🔒 פתח modal נגן
function openModal(id) {
  if (!isPremium()) {
    showPremiumPopup();
    return;
  }
  player.src = `https://drive.google.com/file/d/${id}/preview`;
  playerModal.classList.remove('hidden');
}

// ❌ סגור modal נגן
function closeModal() {
  player.src = '';
  playerModal.classList.add('hidden');
}

// 🎁 פופאפ פרימיום
function showPremiumPopup() {
  const existing = document.getElementById('premiumPopup');
  if (existing) return; // אל תיצור יותר מפופאפ אחד

  const div = document.createElement("div");
  div.id = "premiumPopup";
  div.innerHTML = `
    <div style="
      position:fixed;
      top:0; left:0;
      width:100%; height:100%;
      background:rgba(0,0,0,0.85);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:9999;
    ">
      <div style="
        background:linear-gradient(135deg,#6a00ff,#ff4fd8);
        padding:30px;
        border-radius:20px;
        text-align:center;
        color:white;
        max-width:300px;
        font-family:Arial;
      ">
        <h2>🔒 פרימיום בלבד</h2>
        <p>פתח גישה לכל הסרטים והסדרות</p>
        <a href="pro.html" style="
          display:inline-block;
          margin-top:15px;
          background:white;
          color:black;
          padding:10px 20px;
          border-radius:10px;
          text-decoration:none;
          font-weight:bold;
        ">🎁 נסה 30 יום חינם</a>
        <br><br>
        <button onclick="this.closest('div').remove()" style="
          background:none;
          border:none;
          color:white;
          cursor:pointer;
          font-size:14px;
        ">סגור</button>
      </div>
    </div>
  `;
  document.body.appendChild(div);
}

// 🚀 אתחול
window.addEventListener('load', loadMovies);
