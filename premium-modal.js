// אלמנטים
const premiumModal = document.getElementById("premiumModal");
const closeBtn = document.getElementById("closePremiumBtn");
const premiumForm = document.getElementById("premiumForm");

// פתח מודאל
function openPremium() {
  premiumModal.classList.remove("hidden");
}

// סגור מודאל
function closePremium() {
  premiumModal.classList.add("hidden");
}

// הרשמה פרימיום
premiumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const u = document.getElementById("premiumUsername").value.trim();
  const e = document.getElementById("premiumEmail").value.trim();
  const p = document.getElementById("premiumPassword").value.trim();

  if (!u || !e || !p) {
    alert("❗ יש למלא שם משתמש, אימייל וסיסמה כדי להצטרף לפרימיום");
    return;
  }

  // שמירה ב-localStorage
  localStorage.setItem("premiumUser", u);
  localStorage.setItem("premiumEmail", e);
  localStorage.setItem("premiumPass", p);

  alert("🎉 ברוך הבא לפרימיום, " + u + "!");
  closePremium();
});

// 📅 30 יום
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

// הצגת המודל בתחילת טעינת הדף
window.addEventListener("load", () => {
  if (!isPremiumActive()) {
    openPremium(); // מציג את המודל אם המשתמש לא פרימיום
  }
});

// אירוע סגירה של המודל אם תלחץ מחוץ אליו
premiumModal.addEventListener("click", (e) => {
  if (e.target === premiumModal) closePremium();
});

// כפתור סגירה
closeBtn.addEventListener("click", closePremium);
