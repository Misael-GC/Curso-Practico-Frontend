    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuHamIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const aside = document.querySelector('.product-detail');
    const cardsContainer = document.querySelector('.cards-container');

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
//codigo para que el usuario pueda subir un producto
    // const productList = [];
    // productList.push({
    //     name: 'Bike',
    //     price: 120,
    //     image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    // });
    // productList.push({
    //     name: 'Pantalla',
    //     price: 220,
    //     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   });
    //   productList.push({
    //     name: 'Compu',
    //     price: 620,
    //     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   });
    
    //código de html que ayuda como guia para contruirlo desde JS
          /* <div class="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940>" alt="">
          <div class="product-info">
              <div> 
                  <p>$120,00</p>
                  <p>Bike</p>
              </div>
              <figure>
                  <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
          </div>
          </div> */

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // product = {name, price, image } -> product.image

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);