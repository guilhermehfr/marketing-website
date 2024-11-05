document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('more-menu');
    const svgIcon = document.getElementById('more-svg');
    let isMenuOpen = false; 

    svgIcon.addEventListener('click', function() {
      
        if (isMenuOpen) {
            menu.style.visibility = "hidden";
            svgIcon.src = 'assets/images/more.svg'; 
        } else {
            menu.style.visibility = "visible";
            svgIcon.src = 'assets/images/close-more.svg'; 
        }


        isMenuOpen = !isMenuOpen;
    });
});