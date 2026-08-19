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

        const maxX = Math.max(
            20,
            window.innerWidth - buttonWidth - 20
        );

        const maxY = Math.max(
            20,
            window.innerHeight - buttonHeight - 20
        );

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }


    // ============================
    // RAGE BAIT
    // ============================

    let rageCount = 0;
    let noHidden = false;
    let touchTriggered = false;

    const rageMessages = [
        "You really thought? 💀",
        "Bro, give it up 😭",
        "That button isn't for you 💀",
        "You're still trying? 😂",
        "Just press YES already 💀"
    ];

    function rageBait() {

        if (noHidden) {
            return;
        }

        rageCount++;

        // ============================
        // 5TH ATTEMPT
        // ============================

        if (rageCount >= 5) {

            noHidden = true;

            const yesRect = yesBtn.getBoundingClientRect();
            const noRect = noBtn.getBoundingClientRect();

            noBtn.textContent = "NO";

            noBtn.style.position = "fixed";
            noBtn.style.left = noRect.left + "px";
            noBtn.style.top = noRect.top + "px";

            noBtn.style.zIndex = "0";
            yesBtn.style.zIndex = "10";

            noBtn.style.transition =
                "left 0.8s ease, top 0.8s ease, " +
                "transform 0.8s ease, opacity 0.8s ease";

            requestAnimationFrame(function () {

                noBtn.style.left = yesRect.left + "px";
                noBtn.style.top = yesRect.top + "px";
                noBtn.style.transform = "scale(0.25)";
                noBtn.style.opacity = "0";

            });

            setTimeout(function () {
                noBtn.style.pointerEvents = "none";
            }, 800);

            return;
        }


        // ============================
        // NORMAL RAGE BAIT
        // ============================

        noBtn.textContent =
            rageMessages[rageCount - 1];

        setTimeout(function () {

            if (!noHidden) {
                noBtn.textContent = "NO";
                moveNoButton();
            }

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

        touchTriggered = true;
        rageBait();

        setTimeout(function () {
            touchTriggered = false;
        }, 500);

    });


    // ============================
    // CLICK
    // ============================

    noBtn.addEventListener("click", function (event) {

        event.preventDefault();

        // Prevent Android touch + click from counting twice
        if (touchTriggered) {
            return;
        }

        rageBait();
    });

});
