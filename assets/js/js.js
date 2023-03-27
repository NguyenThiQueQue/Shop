// var menuHeader=document.querySelector('.header__menu');


// var menuHeaderHight=menuHeader.clientHeight;

// function accountIcon(){
//     var accIcon=document.querySelector('.accout');
//     accIcon.style.display='block';
//     accIcon.style.marginLeft='-330px';
//     accIcon.style.position='absolute';
//     //accIcon.style.marginTop='-44px';
//     accIcon.style.zIndex='1';
// }

// function accountLink(){
//     var account=document.querySelector('.header__acount-link');
//     // account.style.backgroundColor='#8fbbd5';
//     account.style.display='block';
//     account.style.marginLeft='-340px';
//     account.style.position='absolute';
//     account.style.height='100vh';
//     account.style.maxWidth='none';
// }

// function login(){
//     var menuLogin=document.querySelector('.header__login');
//    // menuLogin.style.display='table';
//     menuLogin.innerHTML='Đăng nhập';
//     menuLogin.style.fontSize='2rem';
//     menuLogin.style.lineHeight='3.4rem';
//     menuLogin.style.padding='44px';
//    // menuLogin.style.marginTop='12px';
//     menuLogin.style.top='306px';
//     menuLogin.style.position='relative';
// }

// function register(){
//     var menuRegister=document.querySelector('.header__register');
//     menuRegister.style.display='block';
//     menuRegister.style.fontSize='2rem';
//     menuRegister.style.lineHeight='3.4rem';
//     menuRegister.style.padding='12px';
//     menuRegister.style.top='320px';
//     menuRegister.style.position='relative';
// }

// menuHeader.addEventListener('click',function(){
//     var isClosed=menuHeaderHight;
//     if(isClosed){

//         //account icon
//         accountIcon();

//         //header__acount-link
//         accountLink();

//         //header__login
//         login();

//         //header__register
//         //register();

//         document.querySelector('.header__account').style.display='none';

//         document.querySelector('.marquee-slogan').style.display='none';

//     }
// })

/* =========================== SLIDER =========================== */
var sliderItems=document.querySelectorAll('.img-slider');
var preBtn=document.querySelector('.pre__btn');
var nextBtn=document.querySelector('.next__btn');
var sliderBar=document.querySelector('.slider-bar');
var sliderLength=sliderItems.length;
var sliderItemWidth=sliderBar.offsetWidth;

let positionX=0;
let index=0;

preBtn.addEventListener('click',function(){
    handleChangleSlider(-1);
})

nextBtn.addEventListener('click',function(){
    handleChangleSlider(1);
})

function handleChangleSlider(direction){
    if(direction === 1){ 
        if(index >= sliderLength -1){
            index=sliderLength -1;
            return;
        }
        positionX=positionX-sliderItemWidth;
        sliderBar.style=`transform:translateX(${positionX}px)`;
        index++;
    }
    else if(direction === -1){
        if(index <= 0){
            index=0;
            return;
        }
        positionX=positionX+sliderItemWidth;
        sliderBar.style=`transform:translateX(${positionX}px)`;
        index--;
    }
}
/* ====================================================== */

/* =========================SLIDER PRODUCT TOP============================= */
var topSearchProductItems=document.querySelectorAll('.top-search__product-item');
var topSearchProductItem=document.querySelector('.column');
var topSearchProduct=document.querySelector('.top-search__product');
var topSearchProductLength=topSearchProductItems.length;
var topSearchProductItemWidth=topSearchProductItem.offsetWidth;
var nextProductTop=document.querySelector('.next__btn__product--top');
var preProductTop=document.querySelector('.pre__btn__product--top');
var positionXProductTop=0;
var indexPoductTop=0;

var topSearchProductWidth=topSearchProduct.offsetWidth;
// console.log(topSearchProductWidth)

preProductTop.addEventListener('click',function(){
    handleTopProductSlider(-1);
})

nextProductTop.addEventListener('click',function(){
    handleTopProductSlider(1);
})


function handleTopProductSlider(direction){
    if(direction === -1){
        // console.log('pre');
        if(indexPoductTop <= 0){
            indexPoductTop=0;
            return;
        }
        positionXProductTop=positionXProductTop + topSearchProductItemWidth;
        topSearchProduct.style=`transform:translateX(${positionXProductTop}px)`
        indexPoductTop--;
    }
    else if(direction === 1){
        // console.log('next');
        if(indexPoductTop >= topSearchProductLength - 6){
            indexPoductTop=topSearchProductLength - 6;
            return;
        }
        
        positionXProductTop=positionXProductTop - topSearchProductItemWidth;
        topSearchProduct.style=`transform:translateX(${positionXProductTop}px)`;
        indexPoductTop++;
    }
}

var buyBtns=document.querySelectorAll('.buy-btn');
for(let i in topSearchProductItems){
    topSearchProductItems[i].onmouseover=function(){
        buyBtns[i].style.display='block'; 
    }
}

for(let i in topSearchProductItems){
    topSearchProductItems[i].onmouseout=function(){
        buyBtns[i].style.display='none';   
    }
}

/* ====================================================== */


/* =========================PRODUCT ITEM LIST============================= */
var productHomeItems=document.querySelectorAll('.product-home-item');
var buyBtnProductItems=document.querySelectorAll('.buy-btn__product-item');

for( var pos=0;pos<productHomeItems.length;pos++){
    buyBtnProductItems[pos].style.display='block';
}
/* ====================================================== */

/* ========================= MODAL ============================= */
var headerRegister=document.querySelector('.header__register');
var headerLogin = document.querySelector('.header__login');
var modalRegister=document.querySelector('.modal__register');
var modalLogin=document.querySelector('.modal__login');
var modalContainers=document.querySelectorAll('.modal__container');

function modalOpen(handle){
    if(handle===1){
        modalRegister.style.display='flex';
    }
    else if(handle===2){
        modalLogin.style.display='flex';
    }
}

function modalClose(handle){
    if(handle===1){
        modalRegister.style.display='none';
    }
    else if(handle===2){
        modalLogin.style.display='none';
    }
}

headerRegister.addEventListener('click', function(){
    modalOpen(1);
});

headerLogin.addEventListener('click', function(){
    modalOpen(2);
})

var modalCloseRegister=document.querySelector('.modal__close--register');
modalCloseRegister.addEventListener('click', function(){
    modalClose(1);
})

var modalCloseLogin=document.querySelector('.modal__close--login');
modalCloseLogin.addEventListener('click', function(){
    modalClose(2);
})

modalLogin.addEventListener('click', function(){
    modalClose(2);
})

for(var i=0; i<modalContainers.length;i++){
    modalContainers[i].addEventListener('click', function(event){
        event.stopPropagation();
    });
}

modalRegister.addEventListener('click', function(){
    modalClose(1);
})

var btnModalLogin = document.querySelector('.modal__login--btn');
var btnModalRegister=document.querySelector('.modal__register--btn');
btnModalRegister.addEventListener('click', function(){
    modalClose(1);
});

btnModalLogin.addEventListener('click', function(){
    modalClose(2);
    alert('Đăng nhập thành công');
});

/* ========================== MODAL MENU MOBILE ============================ */
var headerMenuIcon=document.querySelector('.header__menu-icon');
var modalMenuMobile=document.querySelector('.modal__menu--mobile');
var modalMobileLogin=document.querySelector('.modal__mobile--login');
var modalMobileRegister=document.querySelector('.modal__mobile--register');

function modalMenuMobileOpen(){
    modalMenuMobile.style.display='block';
}

function modalMenuMobileClose(){
    modalMenuMobile.style.display='none';
}


headerMenuIcon.addEventListener('click', function(){
    modalMenuMobileOpen();
})

modalMobileLogin.addEventListener('click', function(){
    modalOpen(2);
    modalMenuMobileClose();
})

modalMobileRegister.addEventListener('click', function(){
    modalOpen(1);
    modalMenuMobileClose();
})

