// Set the countdown date
const newYear = new Date("January 1, 2025 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

// Update the countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = newYear - now;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownElement.textContent = "00:00:00:00";
    messageElement.textContent = "🎉 Happy New Year! 🎉";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}:${hours}:${minutes}:${seconds}`;
  }
}, 1000);

// Preview Button
document.getElementById("previewBtn").addEventListener("click", () => {
  messageElement.textContent = "🎉 Happy New Year! 🎉";
  setTimeout(() => {
    messageElement.textContent = "";
  }, 3000);
});
