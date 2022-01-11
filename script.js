window.onload = function () {
    const joinButton = document.querySelector("#button-join");
    joinButton.addEventListener("click", clickJoinButtonEvent);
};

function clickJoinButtonEvent() {
    const emailInput = document.querySelector("#input-email");
    const passwordInput = document.querySelector("#input-password");
    if (
        !(
            emailInput.value === "tryber@teste.com" &&
            passwordInput.value === "123456"
        )
    ) {
        alert("Email ou senha inválidos.");
        return;
    }
    alert("Olá, Tryber!");
}
