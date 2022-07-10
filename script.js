const imageDisplay = document.querySelector(".image-display")
const lightbox = document.querySelector(".lightbox")
const closeicon = document.querySelector(".closeicon")
const cartImage = document.querySelector('.cartimage');
const cart = document.querySelector(".cart-container");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantityNumber = document.querySelector((".quantityNumber"))
const addToCart = document.querySelector(".addToCart")
const cartNotif = document.querySelector(".cart-notif")
const emptyCart = document.querySelector(".emptycart-container")
let x = 0;

// ************* ADD TO CART ***************
minus.addEventListener("click", function(){
    if (x>0) {
        --x;
        quantityNumber.innerHTML = x;
        return x
        
    } else {
        x=0
        return x
    }
    
})

plus.addEventListener("click", function () {
    ++x;
    quantityNumber.innerHTML = x
    return x
});

addToCart.addEventListener("click", function(){
    if (quantityNumber.innerHTML > 0 ) {
        cartNotif.innerHTML = quantityNumber.innerHTML
        cartNotif.classList.add("display");
    } else {
       cartNotif.classList.remove("display");
     }
})


cartImage.addEventListener('click', function(){
    if (cartNotif.innerHTML > 0) {
        if (cart.classList.contains("display")) {
          cart.classList.remove("display");
        } else {
          cart.classList.add("display");
        }
    } else {
        if (emptyCart.classList.contains("display")) {
          emptyCart.classList.remove("display");
        } else {
          emptyCart.classList.add("display");
        }
    }
});

// ****************** LIGHTBOX DISPLAY AND FUNCTIONALITY ************
imageDisplay.addEventListener("click", function(){
    lightbox.classList.add("display")
})
closeicon.addEventListener("click", function(){
    lightbox.classList.remove("display")
})

closeicon.onmouseover = function(){onMouseOver()}
closeicon.onmouseout = function(){onMouseOut()}

function onMouseOver(){
    closeicon.setAttribute("src", "./images/icon-close-orange.svg")
}
function onMouseOut() {
  closeicon.setAttribute("src", "./images/icon-close.svg");
}