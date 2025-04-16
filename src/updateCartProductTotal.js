import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, currElem) => {
        let productPrice = parseInt(currElem.price) || 0 ;
        return accum + productPrice;
    }, initialValue);
    // console.log(totalProductPrice);
    
    productSubTotal.textContent = `Rs:${totalProductPrice}`;
    productFinalTotal.textContent = `Rs:${totalProductPrice + 50}`;
} 