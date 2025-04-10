function handleRSVP(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const message = document.getElementById("rsvp-message");
  message.textContent = `Thank you, ${name}! Your RSVP has been confirmed.`;
  message.style.display = "block";

  document.getElementById("rsvp-form").reset();
}

// Countdown Timer
const eventDate = new Date("2025-04-20T19:00:00").getTime();
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    clearInterval(countdown);
    timerElement.textContent = "🎉 The Event Has Started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  timerElement.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);
