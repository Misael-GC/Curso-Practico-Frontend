    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuHamIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const aside = document.querySelector('.product-detail');

    menuEmail.addEventListener('click', toggleDesktopMenu);
    menuHamIcon.addEventListener('click', toggleMobileMenu);
    menuCarritoIcon.addEventListener('click', toggleCarritoAside);

    function toggleDesktopMenu(){
        const isASideClosed = aside.classList.contains('inactive');

        if(!isASideClosed){ //si está abierto
            aside.classList.add('inactive');//cierralo
        }

        desktopMenu.classList.toggle('inactive');
        };

    function toggleMobileMenu(){
        const isASideClosed = aside.classList.contains('inactive');

        if(!isASideClosed){ //si está abierto
            aside.classList.add('inactive');//cierralo
        }

        mobileMenu.classList.toggle('inactive');
    }

    function toggleCarritoAside(){
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //contains en las notas es un true o false, check it

        if(!isMobileMenuClosed){ //si está abierto
            mobileMenu.classList.add('inactive'); //cierralo
        }

        //aqui va lo del menu desktop
        const isDesktopMenu = desktopMenu.classList.contains('inactive');

        if(!isDesktopMenu){
            desktopMenu.classList.add('inactive');
        }//aqui termina si en algun momento hay que delete it

        aside.classList.toggle('inactive');
    }