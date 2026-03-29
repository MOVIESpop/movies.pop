// =====================
// 🎟️ מערכת מודאל פרימיום אולטרה
// =====================

// 🎬 הפעלה של מודל פרימיום
function showPremiumModal() {
  const isPremium = localStorage.getItem("premiumUser");
  if (!isPremium) {
    document.getElementById("premium-modal").classList.remove("hidden");
  }
}

// ❌ סגירת מודאל פרימיום
function closePremium() {
  document.getElementById("premium-modal").classList.add("hidden");
}

// 🎉 טיפול בהרשמה פרימיום
function registerPremium(event) {
  event.preventDefault();

  const u = document.getElementById("username").value.trim();
  const e = document.getElementById("email").value.trim();
  const p = document.getElementById("password").value.trim();

  if (!u || !e || !p) {
    alert("❗ יש למלא שם משתמש, אימייל וסיסמה כדי להצטרף לפרימיום");
    return;
  }

  // שמירה ב‑localStorage
  localStorage.setItem("premiumUser", u);
  localStorage.setItem("premiumEmail", e);
  localStorage.setItem("premiumPass", p);

  alert("🎉 ברוך הבא לפרימיום, " + u + "!");
  closePremium();
}

// 📅 אופציה ל‑30 יום
function setPremiumExpiry() {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  localStorage.setItem("premiumExpiry", expiryDate.toString());
}

// 💎 בדיקת סטטוס פרימיום
function isPremiumActive() {
  const user = localStorage.getItem("premiumUser");
  const expiry = localStorage.getItem("premiumExpiry");

  if (!user || !expiry) return false;
  const exp = new Date(expiry);

  return exp > new Date();
}

// 🔌 חיבור אירוע טופס
const premiumForm = document.getElementById("premium-signup-form");
if (premiumForm) {
  premiumForm.addEventListener("submit", (e) => {
    registerPremium(e);
    setPremiumExpiry(); // שמור תוקף 30 יום
  });
}

// 🚀 הצגת המודל בתחילת טעינת הדף
document.addEventListener("DOMContentLoaded", () => {
  showPremiumModal();
});
