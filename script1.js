const menu = document.querySelector(".sidebar-toggle");
const sidebarLeft = document.querySelector(".sidebar-left");
const close = document.querySelector(".close");
window.addEventListener("DOMContentLoaded",()=>{
    menu.addEventListener("click", () => {
        if (sidebarLeft.classList.contains('visible')) {
            sidebarLeft.classList.remove('visible');
            sidebarLeft.classList.add('hidden');
          } else {
            sidebarLeft.classList.remove('hidden');
            sidebarLeft.classList.add('visible');
          }
    });
    
    close.addEventListener("click", () => {
        sidebarLeft.classList.add('hidden');
        sidebarLeft.classList.remove('visible');
    
    });
})

