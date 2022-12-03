
let userOrder = JSON.parse(localStorage.getItem("userOrder"));


// save order-------------------
function saveOrders(){
    localStorage.setItem("userOrder",JSON.stringify(userOrder))
}
function loadOrders(){
    let userOrderStore = JSON.parse(localStorage.getItem("userOrder"));
    if (userOrderStore !== null) {
        userOrder = userOrderStore;
      }

}
// function resetOrders(item){
//     let item = JSON.parse(localStorage.getItem("userOrder"));
//     if (item !== null) {
//         item = null;
//       }

// }

let cart_item = document.getElementById("cart_item");
for (let index in userOrder){
    loadOrders();
   let cart_row = document.createElement("div");
   cart_row.className = "cart_row";
   cart_row.dataset.index = index;
   cart_item.appendChild(cart_row);

   let cart_column = document.createElement("div");
   cart_column.className = "cart_column cart_item";
   cart_row.appendChild(cart_column);

   let image = document.createElement("img");
   image.className = "art_item_image"
   image.src = userOrder[index].product_link
   cart_column.appendChild(image);

   let cart_item_title = document.createElement("span");
   cart_item_title.className = "cart_item_title"
   cart_item_title.textContent =  userOrder[index].name;
   cart_column.appendChild(cart_item_title);

   let cart_price = document.createElement("span");
   cart_price.className = "cart_price cart_column";
   cart_price.textContent = "$ " +  userOrder[index].price;
   cart_row.appendChild(cart_price);

   let cart_quantity_input = document.createElement("div");
   cart_quantity_input.className ="cart_quantity_input cart_column";
   cart_row.appendChild(cart_quantity_input);

   let quantity_of_product_input = document.createElement("input");
   quantity_of_product_input.className = "quantity_of_product";
   quantity_of_product_input.type = "number";
   quantity_of_product_input.value = 1;
   cart_quantity_input.appendChild(quantity_of_product_input);

   let remove_btn = document.createElement("button");
   remove_btn.className = "remove_btn";
   remove_btn.type = "button";
   remove_btn.textContent = "REMOVE";
   cart_quantity_input.appendChild(remove_btn);


    
}
// remove order------------------------------------
let remove_btn = document.querySelectorAll(".remove_btn");
for (var i= 0; i< remove_btn.length; i++){
    var button = remove_btn[i];
    button.addEventListener('click',removeOrder)
}

function removeOrder(event){
    var buttonClickedIndex = event.target.parentElement.parentElement.remove();
    userOrder.splice(buttonClickedIndex,1)         
    excuteTotailPrice();


    saveOrders();
     
    
    
}
// -----------excute the totail product--------------------
function excuteTotailPrice(){
    let cardItemContainer = document.getElementById("cart_item");
    console.log(cardItemContainer);
    var total = 0
    for(let order of userOrder){
        let priceElement = document.getElementsByClassName("cart_price")[0]
        let quantityElement = document.getElementsByClassName("quantity_of_product")[0]
        // console.log(priceElement);
        
        let price = parseFloat(priceElement.textContent.replace("$",""))
        // console.log(price)
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    // console.log(total)
    document.getElementsByClassName("cart_total_price")[0].textContent = "$ " + total
    

    }

    // pay---------------------------
function paymentClicked(){
    alert("Thank you for buying")

    let orderHistory = JSON.parse(localStorage.getItem("userOrder"));
    localStorage.setItem("orderHistory",JSON.stringify(orderHistory))

    if (orderHistory !== null){
        userOrder = []
    }

    let cardItem = document.getElementsByClassName("cart_item")[0]
    while (cardItem.hasChildNodes()){
        cardItem.removeChild(cardItem.firstChild)
    }
    

    total = 0
    document.getElementsByClassName("cart_total_price")[0].textContent = "$ " + total

    excuteTotailPrice();
    saveOrders();


    

}
excuteTotailPrice();
loadOrders();
