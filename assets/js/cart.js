// /* Set values + misc */
// var promoCode;
// var promoPrice;
// var fadeTime = 300;

// /* Assign actions */
// $('.quantity input').change(function() {
//   updateQuantity(this);
// });

// $('.remove button').click(function() {
//   removeItem(this);
// });

// $(document).ready(function() {
//   updateSumItems();
// });

// $('.promo-code-cta').click(function() {

//   promoCode = $('#promo-code').val();

//   if (promoCode == '10off' || promoCode == '10OFF') {
//     //If promoPrice has no value, set it as 10 for the 10OFF promocode
//     if (!promoPrice) {
//       promoPrice = 10;
//     } else if (promoCode) {
//       promoPrice = promoPrice * 1;
//     }
//   } else if (promoCode != '') {
//     alert("Invalid Promo Code");
//     promoPrice = 0;
//   }
//   //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
//   if (promoPrice) {
//     $('.summary-promo').removeClass('hide');
//     $('.promo-value').text(promoPrice.toFixed(2));
//     recalculateCart(true);
//   }
// });

// /* Recalculate cart */
// function recalculateCart(onlyTotal) {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $('.basket-product').each(function() {
//     subtotal += parseFloat($(this).children('.subtotal').text());
//   });

//   /* Calculate totals */
//   var total = subtotal;

//   //If there is a valid promoCode, and subtotal < 10 subtract from total
//   var promoPrice = parseFloat($('.promo-value').text());
//   if (promoPrice) {
//     if (subtotal >= 10) {
//       total -= promoPrice;
//     } else {
//       alert('Order must be more than £10 for Promo code to apply.');
//       $('.summary-promo').addClass('hide');
//     }
//   }

//   /*If switch for update only total, update only total display*/
//   if (onlyTotal) {
//     /* Update total display */
//     $('.total-value').fadeOut(fadeTime, function() {
//       $('#basket-total').html(total.toFixed(2));
//       $('.total-value').fadeIn(fadeTime);
//     });
//   } else {
//     /* Update summary display. */
//     $('.final-value').fadeOut(fadeTime, function() {
//       $('#basket-subtotal').html(subtotal.toFixed(2));
//       $('#basket-total').html(total.toFixed(2));
//       if (total == 0) {
//         $('.checkout-cta').fadeOut(fadeTime);
//       } else {
//         $('.checkout-cta').fadeIn(fadeTime);
//       }
//       $('.final-value').fadeIn(fadeTime);
//     });
//   }
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children('.subtotal').each(function() {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });

//   productRow.find('.item-quantity').text(quantity);
//   updateSumItems();
// }

// function updateSumItems() {
//   var sumItems = 0;
//   $('.quantity input').each(function() {
//     sumItems += parseInt($(this).val());
//   });
//   $('.total-items').text(sumItems);
// }

// /* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//     updateSumItems();
//   });
// }


/* const products = [
    { id: 1, name: "Product 1", price: 10.00 },
    { id: 2, name: "Product 2", price: 20.50 },
    { id: 3, name: "Product 3", price: 5.25 },
  ];
  
  let cart = [];
  
  function displayProducts() {
    const productList = document.getElementById("products");
    productList.innerHTML = ""; // Clear existing products
  
    for (const product of products) {
      const productItem = document.createElement("div");
      productItem.classList.add("product");
  
      const productName = document.createElement("p");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("span");
      productPrice.textContent = `$${product.price.toFixed(2)}`;
  
      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.addEventListener("click", () => addToCart(product));
  
      productItem.appendChild(productName);
      productItem.appendChild(productPrice);
      productItem.appendChild(addToCartButton);
  
      productList.appendChild(productItem);
    }
  }
  
  function addToCart(product) {
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear existing cart items
  
    let totalPrice = 0;
    for (const item of cart) {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
  
      cartList.appendChild(cartItem);
      totalPrice += item.price;
    }
  
    const totalPriceSpan = document.getElementById("total-price");
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  }
  
  displayProducts(); */

/*  
  function addToCart(productId, productName, price) {

    // Function to create a cookie with specific options
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  
    // Check if cart cookie exists
    let cartItems = getCookie("cartItems");
  
    // If no cart cookie, create an empty object
    if (!cartItems) {
      cartItems = {};
    } else {
      // Parse existing cart cookie (convert string back to object)
      cartItems = JSON.parse(cartItems);
    }
  
    // Check if product already exists in cart
    if (cartItems.hasOwnProperty(productId)) {
      // Update quantity if product already exists
      cartItems[productId].quantity++;
    } else {
      // Add new product information to cart object
      cartItems[productId] = {
        name: productName,
        price: price,
        quantity: 1
      };
    }
  
    // Stringify the cart object back to a JSON string for cookie storage
    let cartString = JSON.stringify(cartItems);
  
    // Set the cart cookie with product information
    setCookie("cartItems", cartString, 7); // Expires in 7 days
    
  }
  
  // Function to retrieve a cookie value by name
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
  */

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
  
  function addToCart(productId, productName, price) {
  
    // Function to create a cookie with specific options
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  
    // Optimized logic for cart handling
    let cartItems = {};
    try {
      const existingCookie = getCookie("cartItems");
      if (existingCookie) {
        cartItems = JSON.parse(existingCookie);
      }
    } catch (error) {
      console.error("Error parsing cart cookie:", error);
    }
  
    // Check if product already exists and update quantity
    if (cartItems.hasOwnProperty(productId)) {
      cartItems[productId].quantity++;
    } else {
      // Add new product information to cart object
      cartItems[productId] = {
        name: productName,
        price: price,
        quantity: 1
      };
    }
  
    // Stringify the cart object back to a JSON string for cookie storage
    const cartString = JSON.stringify(cartItems);
  
    // Set the cart cookie with product information
    setCookie("cartItems", cartString, 7); // Expires in 7 days
  }
  
  // Call this function whenever you need to add a product to the cart
  // Replace these with your actual values
  // addToCart(123, "Awesome Product", 19.99);
  
  