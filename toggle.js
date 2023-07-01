
        const toggleBtn = document.querySelector(".navBar_toggleBtn");
        const menu = document.querySelector(".navBar_menu");
        const btn = document.querySelector(".btn");
        toggleBtn.addEventListener('click',()=>{
            toggleBtn.classList.toggle('active');
            menu.classList.toggle('active');
            btn.classList.toggle('active');
        })