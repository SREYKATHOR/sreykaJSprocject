
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
   quantity_of_product_input.addEventListener("keyup",excuteTotailPrice)
   quantity_of_product_input.dataset.index = index;
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
    firstExcutePrice("remove");
   



    saveOrders();
     
    
    
}
// -----------excute the totail product--------------------
var total = 0

function firstExcutePrice(count){
    let cardItemContainer = document.getElementById("cart_item");

    for(let order of userOrder){
        subTotal = 0
        let priceElement = document.getElementsByClassName("cart_price")[0]
        let quantityElement = document.getElementsByClassName("quantity_of_product")[0]
        
        let price = parseFloat(priceElement.textContent.replace("$",""))
        
        let quantity = quantityElement.value 
        
    
        subTotal = subTotal + (price * quantity)
        if (count == "add"){
            total = total + subTotal
        }else if (count = "remmove"){
            total = total - subTotal
        }

    }
    document.getElementsByClassName("cart_total_price")[0].textContent = "$ " + total
}
function excuteTotailPrice(event){
    let cardItemContainer = document.getElementById("cart_item");
    let quantity_index = event.target.dataset.index;
    
    for(let order of userOrder){
        subTotal = 0
        let priceElement = document.getElementsByClassName("cart_price")[0]
        let quantityElement = document.getElementsByClassName("quantity_of_product")[quantity_index]
        
        
        let price = parseFloat(priceElement.textContent.replace("$",""))
        
        let quantity = quantityElement.value 
       
        subTotal = subTotal + (price * quantity)
        total = total + subTotal
      
    }
    
    document.getElementsByClassName("cart_total_price")[0].textContent = "$ " + total
    

    }

    // pay---------------------------
function paymentClicked(){
    alert("Thank you for buying")
    

    let ManageOrderHistory = JSON.parse(localStorage.getItem("userOrder"));
    ManageOrderHistory.push(custpmer_information);
    

    localStorage.setItem("orderHistory",JSON.stringify(ManageOrderHistory))

    if (ManageOrderHistory !== null){
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
let formCheckOut = document.getElementById("get_user_information_contianer");



let payment = document.getElementById("payment")
payment.addEventListener('click',OnClickCheckOut)
function OnClickCheckOut(){
    formCheckOut.style.display = "block"
    
}
let cancel = document.getElementById("cancel_btn")
cancel.addEventListener("click",onCancel)
function onCancel(){
    hide(formCheckOut)
}


let submit = document.getElementById("submit_btn")
submit.addEventListener("click",onSubmit)
let custpmer_information = []
function onSubmit(){
    let newCustomer = {}
    let name = document.getElementById("nameCustomer")
    let phoneNumber = document.getElementById("phone_number")
    if (name.value == "" || phoneNumber == ""){
        alert("You didn't complete it yet. Please complete it." )
    }
    else{
        newCustomer.nameCustomer =  name.value
        newCustomer.phoneNumberCustomer = phoneNumber.value
        custpmer_information.push(newCustomer)
        hide(formCheckOut)
        paymentClicked();
    }
}

let dom_dialog = document.getElementById("#get_user_information")
function show(element){
    element.style.display = "block"
}
function hide(element){
    element.style.display = "none"
}
firstExcutePrice("add");
loadOrders();
