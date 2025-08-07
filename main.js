let menu = document.getElementById("menu");
let contaniar = document.getElementById("contaniar");
let Close1 = document.getElementById("close1");
let Close2 = document.getElementById("close2");
let showImgSection = document.querySelector("section");
let mainImg = document.getElementById("mainImg");
let content = document.getElementById("content");
let nav = document.querySelector("nav");
let img = document.getElementById("img");
let cartLogo = document.getElementById("cartLogo");
let cartContent = document.getElementById("cartContent");
let toastEl = document.getElementById("myToast");
let amountCart = document.getElementById("amountCart");
let productAmount = document.getElementById("number");

//
let productAmountnumber = 0;
//

menu.onclick = () => {
  sidebar.classList.toggle("active");
  contaniar.style.filter = "blur(5px)";
};
Close1.onclick = () => {
  sidebar.classList.toggle("active");
  contaniar.style.filter = "blur(0px)";
};
Close2.onclick = () => {
  showImgSection.style.display = "none";
  content.style.filter = "blur(0px)";
  nav.style.filter = "blur(0px)";
};
mainImg.onclick = () => {
  showImgSection.style.display = "block";
  content.style.filter = "blur(15px)";
  nav.style.filter = "blur(15px)";
};
cartLogo.onclick = () => {
  if (cartContent.style.visibility === "visible") {
    cartContent.style.visibility = "hidden";
  } else {
    cartContent.style.visibility = "visible";
  }
};

function DeleteFun() {
  productAmountnumber = 0;
  productAmount.innerHTML = productAmountnumber;
  document.getElementById("pop-text").innerText = "Delete succcses";
  new bootstrap.Toast(toastEl, { delay: 2000 }).show();
  cartContent.innerHTML = `
        <h5>Cart</h5>
        <hr />
    `;
}
//

function photo(path) {
  img.src = path;
}

function decrease() {
  if (amountCart.innerText == 0) {
    amountCart.innerText = 0;
  } else {
    amountCart.innerText = parseInt(amountCart.innerText) - 1;
    productAmountnumber -= 1;
  }
}
function increase() {
  amountCart.innerText = parseInt(amountCart.innerText) + 1;
  productAmountnumber += 1;
}

function AddToCart() {
  if (amountCart.innerText == 0) {
    document.getElementById("pop-text").innerText =
      "What are you doing? Add some products to the cart!";
    new bootstrap.Toast(toastEl, { delay: 3000 }).show();
  } else {
    document.getElementById("pop-text").innerText = "Add succcses";
    new bootstrap.Toast(toastEl, { delay: 2000 }).show();
    amountCart.innerText = 0;
    productAmount.innerHTML = productAmountnumber;
    cartContent.innerHTML = `
        <h5>Cart</h5>
        <hr />
    `;
    cartContent.innerHTML += `
            <div class="product">
              <div>
                <img src="images/image-product-1.jpg" alt="product" />
                <span>
                  Fall Limited Edition Sneakers <br />
                  $${125.0} x ${productAmountnumber} 
                  <span>$${125.0 * productAmountnumber}</span>
                </span>
                <img src="images/icon-delete.svg" alt="icon-delete" onclick="DeleteFun()"/>
              </div>
              <button>Checkout</button>
            </div>
    `;
  }
}
