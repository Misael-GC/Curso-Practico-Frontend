    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuHamIcon = document.querySelector('.menu');
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const productDetailCloseIcon = document.querySelector('.product-detail-close')
    const mobileMenu = document.querySelector('.mobile-menu');
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
    const productDetailContainer = document.querySelector('#productDetail');
    const cardsContainer = document.querySelector('.cards-container');
    const iconCarritoBack = document.querySelector(".icon1");

    menuEmail.addEventListener('click', toggleDesktopMenu);
    menuHamIcon.addEventListener('click', toggleMobileMenu);
    menuCarritoIcon.addEventListener('click', toggleCarritoAside);
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
    iconCarritoBack.addEventListener('click', closeCarritoAside);

    function toggleDesktopMenu(){
        const isASideClosed = shoppingCartContainer.classList.contains('inactive');

        if(!isASideClosed){ //si está abierto
            shoppingCartContainer.classList.add('inactive');//cierralo
        }

        desktopMenu.classList.toggle('inactive');
        };

    function toggleMobileMenu(){
        const isASideClosed = shoppingCartContainer.classList.contains('inactive');

        if(!isASideClosed){ //si está abierto
            shoppingCartContainer.classList.add('inactive');//cierralo
        }

        closeProductDetailAside() 
        mobileMenu.classList.toggle('inactive');
    }

    function toggleCarritoAside(){
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //contains en las notas es un true o false, check it

        if(!isMobileMenuClosed){ //si está abierto
            mobileMenu.classList.add('inactive'); //cierralo
        }

        const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); //contains en las notas es un true o false, check it

        if(!isProductDetailClosed){ //si está abierto
            productDetailContainer.classList.add('inactive'); //cierralo
        }

        //aqui va lo del menu desktop
        const isDesktopMenu = desktopMenu.classList.contains('inactive');

        if(!isDesktopMenu){
            desktopMenu.classList.add('inactive');
        }//aqui termina si en algun momento hay que delete it

        shoppingCartContainer.classList.toggle('inactive');
    }

    function openProductDetailAside(){
        shoppingCartContainer.classList.add('inactive'); //siempre que habras un producto pon inactive
        productDetailContainer.classList.remove('inactive');//quit inactive
    }

    function closeProductDetailAside(){
        productDetailContainer.classList.add('inactive');
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
        productImg.addEventListener('click', openProductDetailAside);
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

function closeCarritoAside () {
    shoppingCartContainer.classList.add('inactive');
    }