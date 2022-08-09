    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuHamIcon = document.querySelector('.menu')
    const mobileMenu = document.querySelector('.mobile-menu')

    menuEmail.addEventListener('click', toggleDesktopMenu);
    menuHamIcon.addEventListener('click', toggleMobileMenu);

    function toggleDesktopMenu(){
        const toggleDesktop = desktopMenu.classList.toggle('inactive');
        return toggleDesktop;
    };

    function toggleMobileMenu(){
        const toggleModile = mobileMenu.classList.toggle('inactive');
        return toggleMobileMenu;
    }
