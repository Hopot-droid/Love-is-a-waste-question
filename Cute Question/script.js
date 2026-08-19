const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const success =
    document.getElementById("success");


// ============================
// YES BUTTON
// ============================

yesBtn.addEventListener("click", function () {

    success.style.display = "flex";

});


// ============================
// MOVE NO BUTTON
// ============================

function moveNoButton() {

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        20;


    const maxY =
        window.innerHeight -
        buttonHeight -
        20;


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

}


// ============================
// DESKTOP
// ============================

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// ============================
// MOBILE
// ============================

noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


// ============================
// IF CLICKED
// ============================

noBtn.addEventListener(
    "click",
    function () {

        moveNoButton();

    }
);