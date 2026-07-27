/* ==========================================================
                    MAIN PART 1A
            VARIABLES + MENU DATABASE
========================================================== */

/* ===============================
            ELEMENTS
================================= */

const productsContainer = document.getElementById("products");
const categoryButtons = document.querySelectorAll(".category");

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

const purchaseBtn = document.getElementById("purchaseBtn");

/* Payment */

const paymentModal = document.getElementById("paymentModal");
const paymentOverlay = document.getElementById("paymentOverlay");

const buyNow = document.getElementById("buyNow");

/* Success */

const successModal = document.getElementById("successModal");




/* ===============================
            VARIABLES
================================= */

let cart = [];

let currentCategory = "hot";

/* ===============================
            MENU DATABASE
================================= */

const menu = {

    hot: [

        {
            name: "HOT LATTE ",
            description: "Fresh hot latte with milk.",
            image: "../photo/Hotlatte.png",
            price: {
                Small: 2.50,
                Medium: 3.50,
                Large: 4.50
            }
        },

        {
            name: "HOT LEMON TEA ",
            description: "Good quality lemon and the Modulkiri tea",
            image: "../photo/Hotlemontea.png",
            price: {
                Small: 2.75,
                Medium: 3.75,
                Large: 4.75
            }
        },

        {
            name: "HOT AMERICANO",
            description: "Bold espresso with hot water.",
            image: "../photo/Hotamericano.png",
            price: {
                Small: 2.00,
                Medium: 3.00,
                Large: 4.00
            }
        },

        {
            name: "HOT MATCHA LATTE",
            description: "Great quality Matcha with milk",
            image: "../photo/Hotmacha.png",
            price: {
                Small: 3.00,
                Medium: 4.00,
                Large: 5.00
            }
        },

        {
            name: "HOT CHOCOLATE",
            description: "Hot black chocolate",
            image: "../photo/Hotchocolate.png",
            price: {
                Small: 2.20,
                Medium: 3.20,
                Large: 4.20
            }
        }

    ],

    ice: [

        {
            name: "ICED LATTTE",
            description: "Chilled espresso with milk.",
            image: "../photo/Ice_latte.png",
            price: {
                Small: 3.00,
                Medium: 4.00,
                Large: 5.00
            }
        },

        {
            name: "ICED AMERICANO",
            description: "Strong iced coffee.",
            image: "../photo/Iceamerricano.png",
            price: {
                Small: 2.50,
                Medium: 3.50,
                Large: 4.50
            }
        },

        {
            name: "ICED MATCHA LATTE",
            description: "Refressing Matcha with milk.",
            image: "../photo/Ice_machalatte.png",
            price: {
                Small: 3.25,
                Medium: 4.25,
                Large: 5.25
            }
        },

        {
            name: "ICE LEMON TEA",
            description: "Fresh lemon infused tea.",
            image: "../photo/Ice_lemontea.png",
            price: {
                Small: 2.75,
                Medium: 3.75,
                Large: 4.75
            }
        },

        {
            name: "ICE CHOCOLATE LATTE",
            description: "Refreshing dark chocolate .",
            image: "../photo/Ice_chocolatelatte.png",
            price: {
                Small: 3.10,
                Medium: 4.10,
                Large: 5.10
            }
        }

    ],

    frappe: [

        {
            name: "STRAWBERRRY FRAPE",
            description: "Blended strawberry whipped cream.",
            image: "../photo/Frape_Strawberry.png",
            price: {
                Small: 4.00,
                Medium: 5.00,
                Large: 6.00
            }
        },

        {
            name: "COCUNUT FRAPE",
            description: "Creamy caramel blended coconut.",
            image: "../photo/Frape_coconut.png",
            price: {
                Small: 4.25,
                Medium: 5.25,
                Large: 6.25
            }
        },

        {
            name: "OREO FRAPE",
            description: "Oreo cookies blended with fresh milk.",
            image: "../photo/Frape_oreo.png",
            price: {
                Small: 4.10,
                Medium: 5.10,
                Large: 6.10
            }
        },

        {
            name: "MANGO FRAPE",
            description: "Blended mango with milk.",
            image: "../photo/Frape_Mango.png",
            price: {
                Small: 4.50,
                Medium: 5.50,
                Large: 6.50
            }
        },

        {
            name: "WATERMELON FRAPE",
            description: "Blended mango with milk.",
            image: "../photo/Frape_Watermelon.png",
            price: {
                Small: 4.75,
                Medium: 5.75,
                Large: 6.75
            }
        }

    ],

    snack: [

        {
            name: "CROISSANT",
            description: "Fresh baked every morning.",
            image: "../photo/Snark_croisant.png",
            price: {
                Small: 2.50,
                Medium: 3.50,
                Large: 4.50
            }
        },

        {
            name: "NOODLE",
            description: "Micheat noodle with egg",
            image: "../photo/Snark_noodle.png",
            price: {
                Small: 3.00,
                Medium: 4.00,
                Large: 5.00
            }
        },

        {
            name: "SANDWICH",
            description: "Best for breakfast",
            image: "../photo/Snark_sandwich.png",
            price: {
                Small: 2.00,
                Medium: 3.00,
                Large: 4.00
            }
        },

        {
            name: "FRIED CHICKEN SET",
            description: "Golden crispy fried chicken and french fires.",
            image: "../photo/Snark_frychicken.png",
            price: {
                Small: 2.75,
                Medium: 3.75,
                Large: 4.75
            }
        },

        {
            name: "MEAT BALL",
            description: "Soft and Khmer cow Meatball.",
            image: "../photo/Snark_meatball.png",
            price: {
                Small: 3.50,
                Medium: 4.50,
                Large: 5.50
            }
        }

    ]

};


/* ==========================================================
                    MAIN PART 1B
        DISPLAY PRODUCTS + ADD TO CART
========================================================== */

function renderProducts(category) {

    currentCategory = category;

    productsContainer.innerHTML = "";

    categoryButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.category === category) {
            button.classList.add("active");
        }

    });



    menu[category].forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img src="${product.image}"
                     alt="${product.name}">

            </div>

            <div class="product-content">

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-price">
                    $${product.price.Small.toFixed(2)}
                </div>

                <div class="size-group">

                    <button class="size-btn active"
                            data-size="Small">
                        S
                    </button>

                    <button class="size-btn"
                            data-size="Medium">
                        M
                    </button>

                    <button class="size-btn"
                            data-size="Large">
                        L
                    </button>

                </div>

                <button class="add-cart-btn">
                    Add To Cart
                </button>

            </div>

        `;

        productsContainer.appendChild(card);



        /* ===========================
                SIZE SELECTOR
        ============================ */

        const sizeButtons =
            card.querySelectorAll(".size-btn");

        const priceDisplay =
            card.querySelector(".product-price");

        let selectedSize = "Small";



        sizeButtons.forEach(btn => {

            btn.addEventListener("click", function () {

                sizeButtons.forEach(b =>
                    b.classList.remove("active")
                );

                this.classList.add("active");

                selectedSize =
                    this.dataset.size;

                priceDisplay.textContent =
                    "$" +
                    product.price[selectedSize]
                    .toFixed(2);

            });

        });



        /* ===========================
                ADD TO CART
        ============================ */

        const addButton =
            card.querySelector(".add-cart-btn");

        addButton.addEventListener("click", function () {

            const existingItem = cart.find(item =>

                item.name === product.name &&
                item.size === selectedSize

            );



            if (existingItem) {

                existingItem.qty++;

            }

            else {

                cart.push({

                    name: product.name,

                    size: selectedSize,

                    price:
                        product.price[selectedSize],

                    qty: 1

                });

            }

            updateCart();

            addButton.textContent =
                "Added ✓";

            setTimeout(() => {

                addButton.textContent =
                    "Add To Cart";

            }, 1000);

        });

    });

}



/* ==========================================================
                    CATEGORY BUTTONS
========================================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const category =
            this.dataset.category;

        renderProducts(category);

    });

});



/* ==========================================================
                LOAD DEFAULT CATEGORY
========================================================== */

renderProducts(currentCategory);

/* ==========================================================
                    MAIN PART 2A-1
                SHOPPING CART SYSTEM
========================================================== */

function updateCart() {

    cartItems.innerHTML = "";

    let subtotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h3>Your Cart is Empty</h3>

                <p>Add some delicious food or drinks!</p>

            </div>

        `;

        totalPrice.textContent = "$0.00";

        return;

    }



    cart.forEach((item, index) => {

        const itemTotal = item.price * item.qty;

        subtotal += itemTotal;

        const card = document.createElement("div");

        card.className = "cart-card";

        card.innerHTML = `

            <div class="cart-left">

                <h4>${item.name}</h4>

                <p>Size : ${item.size}</p>

                <span>$${item.price.toFixed(2)}</span>

            </div>


            <div class="cart-middle">

                <button class="minus-btn">−</button>

                <span>${item.qty}</span>

                <button class="plus-btn">+</button>

            </div>


            <div class="cart-right">

                <h4>$${itemTotal.toFixed(2)}</h4>

            </div>

        `;

        cartItems.appendChild(card);



        /* ==========================
                PLUS BUTTON
        ========================== */

        card.querySelector(".plus-btn")
        .addEventListener("click", () => {

            cart[index].qty++;

            updateCart();

        });



        /* ==========================
                MINUS BUTTON
        ========================== */

        card.querySelector(".minus-btn")
        .addEventListener("click", () => {

            cart[index].qty--;

            if (cart[index].qty <= 0) {

                cart.splice(index,1);

            }

            updateCart();

        });

    });



    /* ==========================
            CALCULATE TOTAL
    ========================== */

    const tax = subtotal * 0.10;

    const total = subtotal + tax;

    totalPrice.innerHTML = `

        <div class="price-summary">

            <div>

                <span>Subtotal</span>

                <strong>$${subtotal.toFixed(2)}</strong>

            </div>

            <div>

                <span>Tax (10%)</span>

                <strong>$${tax.toFixed(2)}</strong>

            </div>

            <hr>

            <div class="grand-total">

                <span>Total</span>

                <strong>$${total.toFixed(2)}</strong>

            </div>

        </div>

    `;

}


/* ==========================================================
                    MAIN PART 2A-2
                PAYMENT WINDOW
========================================================== */

let orderSummary = {
    subtotal: 0,
    tax: 0,
    total: 0
};


/* ==========================================
            PURCHASE BUTTON
========================================== */

purchaseBtn.addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
    });

    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    orderSummary = {
        subtotal,
        tax,
        total
    };

    paymentOverlay.classList.add("show");
    paymentModal.classList.add("show");
    document.body.style.overflow = "hidden";

});

/* ==========================================
            CLOSE PAYMENT
========================================== */

paymentOverlay.addEventListener("click", closePayment);

function closePayment(){

    paymentOverlay.classList.remove("show");

    paymentModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* ==========================================
        PAYMENT METHOD SWITCHER
========================================== */

const methodButtons = document.querySelectorAll(".method-card");
const cashContent = document.getElementById("cashContent");
const qrContent = document.getElementById("qrContent");

methodButtons.forEach(btn => {

    btn.addEventListener("click", function(){

        methodButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        if(this.dataset.method === "cash"){
            cashContent.style.display = "block";
            qrContent.style.display = "none";
        } else {
            cashContent.style.display = "none";
            qrContent.style.display = "block";
        }

    });

});


/* ==========================================================
                    MAIN PART 2B-1
        PAYMENT PROCESSING + SUCCESS ANIMATION
========================================================== */

buyNow.addEventListener("click", function(){


    // close payment window

    paymentModal.classList.remove("show");

    paymentOverlay.classList.remove("show");



    // create success animation HTML

    successModal.innerHTML = `

        <div class="success-box">


            <div class="success-circle">

                <div class="success-spinner"></div>


                <span class="success-tick">
                    ✓
                </span>


            </div>


            <h2>
                Payment Successful
            </h2>


            <p>
                Thank you for your order!
            </p>


        </div>

    `;



    // show success

    successModal.classList.add("show");



    // remove after 3 seconds

    setTimeout(()=>{


        successModal.classList.remove("show");


    },3000);



});


// ESC CLOSE SUCCESS

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        successModal.classList.remove("show");

    }

});


// CLICK OUTSIDE SUCCESS

successModal.addEventListener("click",function(e){

    if(e.target===successModal){

        successModal.classList.remove("show");

    }

});