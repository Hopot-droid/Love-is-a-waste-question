document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const success = document.getElementById("success");

    if (!yesBtn || !noBtn || !success) {
        console.error("Required elements were not found.");
        return;
    }

    // ============================
    // YES BUTTON
    // ============================

    yesBtn.addEventListener("click", function () {
        const title = success.querySelector("h2");
        const message = success.querySelector("p");

        if (title) {
            title.textContent = "";
            title.style.display = "none";
        }

        if (message) {
            message.textContent = "you got a text next week study";
        }

        success.style.display = "flex";
    });

    // ============================
    // MOVE NO BUTTON
    // ============================

    function moveNoButton() {
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = Math.max(20, window.innerWidth - buttonWidth - 20);
        const maxY = Math.max(20, window.innerHeight - buttonHeight - 20);

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    // ============================
    // SAVAGE RAGE BAIT
    // ============================

    let rageCount = 0;

    const rageMessages = [
        "You really thought? 💀",
        "Bro, give it up 😭",
        "That button isn't for you 💀",
        "You're still trying? 😂",
        "Just press YES already 💀"
    ];

    function rageBait() {
        noBtn.textContent =
            rageMessages[rageCount % rageMessages.length];

        rageCount++;

        setTimeout(function () {
            noBtn.textContent = "NO";
            moveNoButton();
        }, 700);
    }

    // ============================
    // DESKTOP
    // ============================

    noBtn.addEventListener("mouseenter", function () {
        rageBait();
    });

    // ============================
    // MOBILE
    // ============================

    noBtn.addEventListener("touchstart", function (event) {
        event.preventDefault();
        rageBait();
    });

    // ============================
    // IF CLICKED
    // ============================

    noBtn.addEventListener("click", function (event) {
        event.preventDefault();
        rageBait();
    });

});
