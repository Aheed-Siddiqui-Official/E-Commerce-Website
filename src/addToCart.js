import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
 
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price);

    price = price.replace("Rs", "");

    let existingProd = arrLocalStorageProduct.find((currProd) => currProd.id === id);

    if(existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updateCart = {id, quantity, price};

        updateCart = arrLocalStorageProduct.map((curProd) => {
            return(curProd.id === id) ? updateCart : curProd;
            }
        )
        console.log(updateCart);
        
        localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
    }

    if(existingProd) {
        // alert("Already Added");
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
}