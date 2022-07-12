const imageDisplay = document.querySelector(".image-display");
const image = document.querySelector(".image");
const lightbox = document.querySelector(".lightbox");
const closeicon = document.querySelector(".closeicon");
const cartImage = document.querySelector(".cartimage");
const cart = document.querySelector(".cart-container");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantityNumber = document.querySelector(".quantityNumber");
const addToCart = document.querySelector(".addToCart");
const cartNotif = document.querySelector(".cart-notif");
const emptyCart = document.querySelector(".emptycart-container");
const slides = document.getElementsByClassName("slide");
const slidesimage = document.getElementsByClassName("slide-image");
const previews = document.getElementsByClassName("preview");
const iconnext = document.querySelector(".icon-next");
const iconprev = document.querySelector(".icon-prev");
const menu = document.querySelector(".menu");
const mobilenav = document.querySelector(".mobilenav");
const mobilemenuclose = document.querySelector(".mobilemenuclose");
const iconnext4mobile = document.querySelector(".icon-next4mobile");
const iconprev4mobile = document.querySelector(".icon-prev4mobile");
const imagemobile = document.querySelector(".imagemobile");

let x = 0

// ************* ADD TO CART ***************
minus.addEventListener("click", function () {
  if (x > 0) {
    --x;
    quantityNumber.innerHTML = x;
    return x;
  } else {
    x = 0;
    return x;
  }
});

plus.addEventListener("click", function () {
  ++x;
  quantityNumber.innerHTML = x;
  return x;
});

addToCart.addEventListener("click", function () {
  if (quantityNumber.innerHTML > 0) {
    cartNotif.innerHTML = quantityNumber.innerHTML;
    cartNotif.classList.add("display");
  } else {
    cartNotif.classList.remove("display");
  }
});

cartImage.addEventListener("click", function () {
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

// ****************** LIGHTBOX DISPLAY AND IT'S FUNCTIONALITY ************
function preview() {
  lightbox.classList.add("display");
}

closeicon.addEventListener("click", function () {
  lightbox.classList.remove("display");
});

closeicon.onmouseover = function () {
  onMouseOver();
};
closeicon.onmouseout = function () {
  onMouseOut();
};

function onMouseOver() {
  closeicon.setAttribute("src", "./images/icon-close-orange.svg");
}
function onMouseOut() {
  closeicon.setAttribute("src", "./images/icon-close.svg");
}

function toSlide(n) {
  let source = slidesimage[n].getAttribute("src");
  image.setAttribute("src", source);
}

iconnext.addEventListener("click", function () {
  if (image.getAttribute("src") === "./images/image-product-1.jpg") {
    image.setAttribute("src", "./images/image-product-2.jpg");
  } else if (image.getAttribute("src") === "./images/image-product-2.jpg") {
    image.setAttribute("src", "./images/image-product-3.jpg");
  } else if (image.getAttribute("src") === "./images/image-product-3.jpg") {
    image.setAttribute("src", "./images/image-product-4.jpg");
  } else if (image.getAttribute("src") === "./images/image-product-4.jpg") {
    image.setAttribute("src", "./images/image-product-1.jpg");
  }
});

iconnext4mobile.addEventListener("click", function () {
  if (imagemobile.getAttribute("src") === "./images/image-product-1.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-2.jpg");
  } else if (imagemobile.getAttribute("src") === "./images/image-product-2.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-3.jpg");
  } else if (imagemobile.getAttribute("src") === "./images/image-product-3.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-4.jpg");
  }else if (imagemobile.getAttribute("src") === "./images/image-product-4.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-1.jpg");
  }
});

iconprev.addEventListener("click", function () {
  if (image.getAttribute("src") === "./images/image-product-4.jpg") {
    image.setAttribute("src", "./images/image-product-3.jpg");
  } else if (image.getAttribute("src") === "./images/image-product-3.jpg") {
    image.setAttribute("src", "./images/image-product-2.jpg");
  } else if (image.getAttribute("src") === "./images/image-product-2.jpg") {
    image.setAttribute("src", "./images/image-product-1.jpg");
  } else if (image.getAttribute("src") === "./images/image-product-1.jpg") {
    image.setAttribute("src", "./images/image-product-4.jpg");
  }
});

iconprev4mobile.addEventListener("click", function () {
  if (imagemobile.getAttribute("src") === "./images/image-product-4.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-3.jpg");
  } else if (imagemobile.getAttribute("src") === "./images/image-product-3.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-2.jpg");
  } else if (imagemobile.getAttribute("src") === "./images/image-product-2.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-1.jpg");
  }else if (imagemobile.getAttribute("src") === "./images/image-product-1.jpg") {
    imagemobile.setAttribute("src", "./images/image-product-4.jpg");
  }
});

// Mobile Nav Toggle

menu.addEventListener("click", function () {
  if (mobilenav.display) {
    mobilenav.removeAttribute("id", "display");
  } else {
    mobilenav.setAttribute("id", "display")
  }
});

mobilemenuclose.addEventListener("click", function () {
  mobilenav.removeAttribute("id", "display")
});
