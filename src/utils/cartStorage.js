export function getCartItems () {
    console.log('cart storage::::',JSON.parse(localStorage.getItem("cartItems")));
    return JSON.parse(localStorage.getItem("cartItems")) || [];
}

export function setCartItems (items) {
    localStorage.setItem("cartItems", JSON.stringify(items));
}
