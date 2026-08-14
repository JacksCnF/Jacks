document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "#ffeeee";
            item.style.transition = "background-color 0.3s ease";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "white";
        });
    });
});
