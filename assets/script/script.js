let isToggled = false;

function toggleSvg() {
   const imgElement = document.getElementById("more-svg");
    if (isToggled) {
        imgElement.src = "assets/images/close-more.svg"; // Volta à imagem original
    } else {
        imgElement.src = "assets/images/more.svg"; // Muda para a nova imagem
    }
    isToggled = !isToggled // Alterna o estado
}