const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navCart = document.querySelector('.navbar-shopping-cart');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopping = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu(){
    
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive')
    }
    if(!shopping.classList.contains('inactive')){
        shopping.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
    
}

function toggleMobileMenu(){
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
    }
    if(!shopping.classList.contains('inactive')){
        shopping.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleProductDetail(){
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
    }
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive')
    }
    shopping.classList.toggle('inactive')
}

const productList = [];

productList.push({name:'Bike', price: 120, img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})
productList.push({name:'K1300S', price: 1200000, img:"https://t2.uc.ltmcdn.com/es/posts/9/0/7/como_comprar_una_moto_por_internet_28709_orig.jpg"})
productList.push({name:'Thunder 1500', price: 110000, img:"https://auteco.vteximg.com.br/arquivos/ids/192170-599-599/motocicleta_electrica_starker_thunder_negro_azul_2020_foto1.jpg?v=637250545125930000"})


function renderProduct(productList){
    for( product of productList){
        console.log(product)
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
    
        const productInf = document.createElement('div');
        productInf.classList.add('product-info');
    
        const productInfDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
    
        productName.innerText = product.name;
        productPrice.innerText = '$' + parseFloat(product.price);
    
        const productFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', "./icons/bt_add_to_cart.svg" );
    
        cardContainer.appendChild(productCard);
        productCard.appendChild(img)
        productCard.appendChild(productInf);
        productInf.appendChild(productInfDiv);
        productInfDiv.appendChild(productPrice);
        productInfDiv.appendChild(productName);
        productInf.appendChild(productFigure);
        productFigure.appendChild(figureImg);
    }
}

renderProduct(productList);