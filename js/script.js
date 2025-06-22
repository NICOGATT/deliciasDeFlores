let botonOscuro = document.getElementById("modoOscuro");
let isBlack = false;

botonOscuro.addEventListener("click", function() {
    if(isBlack === true) {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
});

function toggleLightMode() {
    document.body.style.background = "#e6b9fb"; 
    document.body.style.color = "black";
    isBlack = false;
};

function toggleDarkMode() {
    document.body.style.background = "#9b59b6";
    document.body.style.color = "#ccc";
    isBlack = true;
}