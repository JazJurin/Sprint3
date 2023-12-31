// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i]);
      document.getElementById("count_product").innerHTML = cartList.length;
    }
  }
  console.log(cartList);
  calculateTotal();
}

// Exercise 2
function cleanCart() {
    cartList.splice(0);
    document.getElementById("cart_list").innerHTML = " ";
    document.getElementById("total_price").innerHTML = 0;
    console.log("Clean Cart", cartList);  
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;

  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i];
    if (product.subtotalWithDiscount) {
      total += parseFloat(product.subtotalWithDiscount);
    } else {
      total += product.price;
    }
  }
  console.log("total", total);

}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let i = 0; i < cartList.length; i++) {
    let product = cartList[i];
    let repitProduct = cart.findIndex((item) => item.id === product.id);
    if (repitProduct !== -1) {
      cart[repitProduct].quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
  }
  console.log(cart);
  applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    if (product.name === "cooking oil" && product.quantity >= 3) {
      product.subtotalWithDiscount = product.quantity * 10;
    } else if (
      product.name === "Instant cupcake mixture" &&
      product.quantity >= 10
    ) {
      product.subtotalWithDiscount = (
        (2 / 3) *
        (product.price * product.quantity)
      ).toFixed(2);
    }
  }
  console.log(cart);
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const cartList = document.getElementById("cart_list");
  cartList.innerHTML = " ";

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let row = document.createElement("tr");

    const nameProduct = document.createElement("th");
    nameProduct.textContent = product.name;
    row.appendChild(nameProduct);

    const priceProduct = document.createElement("th");
    priceProduct.textContent = product.price;
    row.appendChild(priceProduct);

    const quantityProduct = document.createElement("td");
    quantityProduct.textContent = product.quantity;
    row.appendChild(quantityProduct);

    const subtotalProduct = document.createElement("td");
    subtotalProduct.textContent = (product.price * product.quantity).toFixed(2);
    row.appendChild(subtotalProduct);

    const subtotalWithDiscountProduct = document.createElement("td");
    if (product.subtotalWithDiscount) {
      subtotalWithDiscountProduct.textContent = product.subtotalWithDiscount;
    } else {
      subtotalWithDiscountProduct.textContent = "-";
    }
    row.appendChild(subtotalWithDiscountProduct);

    cartList.appendChild(row);

    if (product.subtotalWithDiscount) {
      totalPrice += parseFloat(product.subtotalWithDiscount);
    } else {
      totalPrice += parseFloat((product.price * product.quantity).toFixed(2));
    }
  }

  document.getElementById("total_price").innerHTML = totalPrice.toFixed(2);

}



// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    addToCart();
    generateCart();
    applyPromotionsCart();
    printCart();
   
}
