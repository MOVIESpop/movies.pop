// אלמנטים
const premiumModal = document.getElementById("premiumModal");
const premiumForm = document.getElementById("premium-signup-form");

// 🔓 פתיחת מודאל
function openPremium() {
  premiumModal.classList.remove("hidden");
}

// ❌ סגירת מודאל (רק בכפתור או הרשמה)
function closePremium() {
  premiumModal.classList.add("hidden");
}

// 🚀 הרשמה פרימיום
function registerPremium(event) {
  event.preventDefault();

  const u = document.getElementById("username").value.trim();
  const e = document.getElementById("email").value.trim();
  const p = document.getElementById("password").value.trim();

  if (!u || !e || !p) {
    alert("❗ יש למלא שם משתמש, אימייל וסיסמה");
    return;
  }

  // שמירה
  localStorage.setItem("premiumUser", u);
  localStorage.setItem("premiumEmail", e);
  localStorage.setItem("premiumPass", p);

  setPremiumExpiry();

  alert("🎉 ברוך הבא לפרימיום, " + u + "!");
  closePremium();
}

// 📅 30 יום (מוכן לעתיד)
function setPremiumExpiry() {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  localStorage.setItem("premiumExpiry", expiryDate.toString());
}

// 💎 בדיקה אם פרימיום פעיל
function isPremiumActive() {
  const user = localStorage.getItem("premiumUser");
  const expiry = localStorage.getItem("premiumExpiry");

  if (!user || !expiry) return false;

  return new Date(expiry) > new Date();
}

// 🔌 חיבור לטופס
if (premiumForm) {
  premiumForm.addEventListener("submit", registerPremium);
}

// 🚨 פתיחה אוטומטית אם לא פרימיום
window.addEventListener("load", () => {
  if (!isPremiumActive()) {
    openPremium();
  }
});
