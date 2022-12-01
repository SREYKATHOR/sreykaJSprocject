// DOM------------------
let dom_display_product_container = document.querySelector("#display_product_container")
// get information from local storage--------
const list_product = JSON.parse(localStorage.getItem("products"));

// diplay product------------------
function displayProduct(){
    let product_container = document.querySelector(".list_product_container");
    if (product_container !== null){
        product_container.remove();
    }
    product_container = document.createElement("div");
    product_container.className = "list_product_container"
    // console.log(list_product);
    for (let index = 0; index < list_product.length; index++){
   
        let product = document.createElement("div");
        product.className = "product";
        
        let product_img = document.createElement("img");
        product_img.src = list_product[index].product_link;
        product.appendChild(product_img);
        
        let product_detail = document.createElement("div");
        product_detail.className = "product_detail";
        product.appendChild(product_detail);
        
        let product_name = document.createElement("h2");
        product_name.textContent = "Name: "+ list_product[index].name;
        product_detail.appendChild(product_name);
        
        let product_price = document.createElement("h3");
        product_price.textContent = "Price: "+ list_product[index].price + " $";
        product_detail.appendChild(product_price)
        
        let product_buy_button = document.createElement("button")
        product_buy_button.textContent = "BUY NOW";
        product_detail.appendChild(product_buy_button);

        
        
        product_container.appendChild(product);
    }
    dom_display_product_container.appendChild(product_container);
    console.log(product_container)


}










// call function to display product
displayProduct();