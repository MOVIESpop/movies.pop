// אלמנטים
const premiumModal = document.getElementById("premiumModal");
const closeBtn = document.getElementById("closePremiumBtn");
const premiumForm = document.getElementById("premiumForm");

// פתח מודאל
function openPremium() {
  premiumModal.classList.add("show");
}

// סגור מודאל
function closePremium() {
  premiumModal.classList.remove("show");
}

// סגירה רק בלחיצה על כפתור סגור או לאחר הצטרפות
closeBtn.addEventListener("click", closePremium);

// הרשמה פרימיום
premiumForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("premiumUsername").value;
  const email = document.getElementById("premiumEmail").value;
  const password = document.getElementById("premiumPassword").value;

  if (!username || !email || !password) {
    return alert("נא למלא את כל השדות");
  }

  // שומר את הנתונים ב-localStorage
  localStorage.setItem("premiumUser", JSON.stringify({ username, email }));

  // סוגר את המודל לאחר הצטרפות
  closePremium();
  
  // מראה הודעת ברוך הבא
  alert(`🎉 ברוך הבא לפרימיום, ${username}!`);
});

// בדיקה אם המשתמש כבר פרימיום
window.addEventListener("load", () => {
  const user = localStorage.getItem("premiumUser");
  if (!user) openPremium();
});
