const user = JSON.parse(localStorage.getItem("user"));
let favorites = JSON.parse(localStorage.getItem("fav")) || [];
let recent = JSON.parse(localStorage.getItem("recent")) || [];

function init() {
  if (user) {
    document.getElementById("userArea").innerText =
      "👋 ברוכים הבאים " + user.name;
  }
  render();
}

function render() {
  let html = "";

  content.forEach(item => {
    html += `
      <div class="card">
        <img src="${item.image}" style="width:100%; border-radius:10px; margin-bottom:5px;">
        <h3>${item.title}</h3>
        <button onclick="play('${item.id}','${item.title}')">▶ צפייה</button>
        <button onclick="toggleFav('${item.title}')"><span class="heart">❤️</span></button>
      </div>
    `;
  });

  html += `
      <div style="width:100%">
      <h2>❤️ אהובים</h2>
      ${favorites.map(f=>`<p>${f}</p>`).join("")}
      <h2>👁️ צפיתי לאחרונה</h2>
      ${recent.map(r=>`<p>${r}</p>`).join("")}
      </div>
  `;

  document.getElementById("main").innerHTML = html;
}

function play(id,name){
  if(!user){
    document.getElementById("register").classList.remove("hidden");
    return;
  }

  showLoading("🎬 טוען סרט...");
  setTimeout(()=>{
    document.getElementById("playerModal").classList.remove("hidden");
    document.getElementById("player").src =
      `https://drive.google.com/file/d/${id}/preview`;
    success();
    addRecent(name);
  },2000);
}

function toggleFav(title){
  if(!favorites.includes(title)){
    favorites.push(title);
  } else {
    favorites = favorites.filter(x=>x!==title);
  }
  localStorage.setItem("fav",JSON.stringify(favorites));
  render();
}

function addRecent(name){
  recent.unshift(name);
  recent = recent.slice(0,10);
  localStorage.setItem("recent",JSON.stringify(recent));
}

function showLoading(text){
  const ads = [
    "🔥 MOVIES.pop — העתיד של צפייה!",
    "🎬 איכות מטורפת מחכה לך",
    "💎 חוויית סרטים ברמה אחרת"
  ];
  document.getElementById("loadingText").innerText =
    text + "\n" + ads[Math.floor(Math.random()*ads.length)];
  document.getElementById("loadingScreen").classList.remove("hidden");
}

function success(){
  document.getElementById("loadingText").innerText = "✔ מוכן לצפייה";
  setTimeout(()=>{
    document.getElementById("loadingScreen").classList.add("hidden");
  },1000);
}

function register(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("user",JSON.stringify({name,email}));
  location.reload();
}

function closePlayer(){
  document.getElementById("playerModal").classList.add("hidden");
}

init();
