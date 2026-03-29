let currentTab = "movies";

function showTab(tab) {
  currentTab = tab;
  render();
  document.getElementById("tabMovies").classList.toggle("active", tab==="movies");
  document.getElementById("tabSeries").classList.toggle("active", tab==="series");
}

function render() {
  let html = "";

  if (currentTab === "movies") {
    html += `<div class="grid">`;
    movies.forEach(m => {
      html += `
        <div class="card">
          <img src="${m.image}">
          <h3>${m.title}</h3>
          <button onclick="play('${m.id}')">▶ צפייה</button>
        </div>
      `;
    });
    html += `</div>`;
  }

  else if (currentTab === "series") {
    html += `<div class="grid">`;
    series.forEach((s,i) => {
      html += `
        <div class="card">
          <img src="${s.image}">
          <h3>${s.name}</h3>
          <button onclick="showSeasons(${i})">📺 עונות</button>
        </div>
      `;
    });
    html += `</div>`;
  }

  document.getElementById("main").innerHTML = html;
}

function showSeasons(seriesIndex) {
  const s = series[seriesIndex];
  let html = `
    <button onclick="showTab('series')">← חזור</button>
    <div class="grid">
  `;

  s.seasons.forEach((season, i) => {
    html += `
      <div class="card">
        <h3>${season.name}</h3>
        <button onclick="showEpisodes(${seriesIndex}, ${i})">📂 פרקים</button>
      </div>
    `;
  });

  html += `</div>`;
  document.getElementById("main").innerHTML = html;
}

function showEpisodes(seriesIndex, seasonIndex) {
  const season = series[seriesIndex].seasons[seasonIndex];
  let html = `
    <button onclick="showSeasons(${seriesIndex})">← חזור</button>
    <div class="grid">
  `;

  season.episodes.forEach(ep => {
    html += `
      <div class="card">
        <h3>${ep.title}</h3>
        <button onclick="play('${ep.id}')">▶ צפייה</button>
      </div>
    `;
  });

  html += `</div>`;
  document.getElementById("main").innerHTML = html;
}

/* 🔥 כאן הקסם */
function play(id) {
  const user = localStorage.getItem("user");

  if (!user) {
    openSubscribeCard();
    return;
  }

  document.getElementById("playerModal").classList.remove("hidden");
  document.getElementById("player").src =
    `https://drive.google.com/file/d/${id}/preview`;
}

function closeModal() {
  document.getElementById("playerModal").classList.add("hidden");
}

/* 💎 כרטיס הרשמה */
function openSubscribeCard() {
  document.getElementById("subscribeModal").classList.remove("hidden");
}

function closeSubscribe() {
  document.getElementById("subscribeModal").classList.add("hidden");
}

/* 👤 הרשמה */
function register() {
  const name = document.getElementById("username").value;
  if (!name) {
    alert("הכנס שם משתמש");
    return;
  }
  localStorage.setItem("user", name);
  closeSubscribe();
  alert("ברוך הבא " + name + " 🎉");
}
function closePrivacy() {
  document.getElementById("privacyModal").classList.add("hidden");
}
showTab("movies");
