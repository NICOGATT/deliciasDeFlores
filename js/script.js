let botonOscuro = document.getElementById("modoOscuro");
let isBlack = false;
let slogan = document.getElementById("slogan");

botonOscuro.addEventListener("click", function() {
    if(isBlack === true) {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
});

function toggleLightMode() {
    document.body.style.background = "#e6b9fb"; 
    document.body.style.color = "#564592";
    slogan.style.borderBottom = "2px dotted #564592";
    isBlack = false;
};

function toggleDarkMode() {
    document.body.style.background = "#9b59b6";
    document.body.style.color = "#ccc";
    slogan.style.borderBottom = "2px dotted #ccc"
    isBlack = true;
}