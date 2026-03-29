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

// אירוע סגירה
closeBtn.addEventListener("click", closePremium);
premiumModal.addEventListener("click", (e) => {
  if (e.target === premiumModal) closePremium();
});

// הרשמה פרימיום
premiumForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("premiumUsername").value;
  const email = document.getElementById("premiumEmail").value;
  const password = document.getElementById("premiumPassword").value;

  if (!username || !email || !password) return alert("נא למלא את כל השדות");

  localStorage.setItem("premiumUser", JSON.stringify({ username, email }));
  closePremium();
  alert(`🎉 ברוך הבא לפרימיום, ${username}!`);
});

// בדיקה אם המשתמש כבר פרימיום
window.addEventListener("load", () => {
  const user = localStorage.getItem("premiumUser");
  if (!user) openPremium();
});
