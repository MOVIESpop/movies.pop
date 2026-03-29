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
  } else if (currentTab === "series") {
    html += `<div class="grid">`;
    series.forEach((s,i) => {
      html += `
        <div class="card">
          <img src="${s.image}">
          <h3>${s.name}</h3>
          <button onclick="showEpisodes(${i})">📺 פרקים</button>
        </div>
      `;
    });
    html += `</div>`;
  }

  document.getElementById("main").innerHTML = html;
}

function showEpisodes(seriesIndex) {
  const s = series[seriesIndex];
  let html = `<button onclick="showTab('series')">← חזור</button><div class="grid">`;
  s.episodes.forEach(ep => {
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

function play(id) {
  document.getElementById("playerModal").classList.remove("hidden");
  document.getElementById("player").src =
    `https://drive.google.com/file/d/${id}/preview`;
}

function closePlayer() {
  document.getElementById("playerModal").classList.add("hidden");
}

showTab("movies");
