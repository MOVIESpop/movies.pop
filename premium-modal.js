// 🎫 סגירת מודאל פרימיום
function closePremium() {
  document.getElementById("premium-modal").classList.add("hidden");
}

// 🚀 הרשמה פרימיום
function registerPremium(event) {
  event.preventDefault(); // למנוע ריענון דף
  const u = document.getElementById("username").value;
  const e = document.getElementById("email").value;
  const p = document.getElementById("password").value;

  if (!u || !e || !p) {
    alert("הכנס שם משתמש, אימייל וסיסמה תקינים");
    return;
  }

  localStorage.setItem("premiumUser", u); // שמירה ב-localStorage
  document.getElementById("premium-modal").classList.add("hidden");
  alert("ברוך הבא לפרימיום 🎉 " + u);
}

// הצגת המודל אם המשתמש לא רשום
function showPremiumModal() {
  const isPremium = localStorage.getItem("premiumUser");
  if (!isPremium) {
    document.getElementById("premium-modal").classList.remove("hidden");
  }
}

// קריאה להציג את המודל בתחילת טעינת הדף
showPremiumModal();

// הגדרת טופס ההרשמה
document.getElementById("premium-signup-form").addEventListener("submit", registerPremium);
