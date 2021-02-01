const switchToggle = document.getElementById("switch"),
    switchToggleImage = document.getElementById("switchToggleImage"),
    container = document.getElementById("container");

let switchState = true;

switchToggle.addEventListener("click", (e) => {
    container.classList.toggle("dark");

    if (switchState) {
        switchToggleImage.src = "img/moon.png";
        switchState = !switchState;
    } else {
        switchToggleImage.src = "img/sun.png";
        switchState = !switchState;
    }
});
