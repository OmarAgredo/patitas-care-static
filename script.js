const button = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

button?.addEventListener("click", () => {
  message.textContent = "Bienvenido a Patitas Care.";
});
