document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const success = document.getElementById("success");

    if (!yesBtn || !noBtn || !success) {
        console.error("Required elements were not found.");
        return;
    }

    // Disable YES
    yesBtn.disabled = true;
    yesBtn.style.pointerEvents = "none";

    // NO works
    noBtn.addEventListener("click", function () {
        success.style.display = "flex";
    });

});
