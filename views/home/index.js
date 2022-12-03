// DOM------------------
let dom_display_product_container = document.querySelector("#display_product_container")
let dom_display_dialog = document.querySelector("#detail_product_dialog");
// get information from local storage--------
const list_product = JSON.parse(localStorage.getItem("products"));
// console.log(list_product)
let user_order_product = []

function saveOrders(){
    localStorage.setItem("userOrder",JSON.stringify(user_order_product))
}
function loadOrders(){
    let userOrderStore = JSON.parse(localStorage.getItem("userOrder"));
    if (userOrderStore !== null) {
        user_order_product = userOrderStore;
      }

}




// FUNCTION------------------------------
function show(element){
    element.style.display = "block";
}
function hide(element){
    element.style.display = "none";
}
function onCancel(event){
    hide(dom_display_dialog)
}
function onAddToCard(event){
    // hide dialog
    hide(dom_display_dialog)
    // get value from index of user click on add to card
    let indexOnAddCard = event.target.dataset.index;
    let product_user_add_to_card = list_product[indexOnAddCard];
    //add product of user click order to local storage----------------
    user_order_product.push(product_user_add_to_card);  
    
    // user_order_product.push(product_user_add_to_card);  
    console.log(user_order_product);
    // save to local storage------------------------
    
    saveOrders();
    loadOrders();

}



function saveProductsOrder(){
  localStorage.setItem("userOrder",JSON.stringify(user_order_product));
}

function loadProducts() {
  storeUserOrder = JSON.parse(localStorage.getItem("userOrder"));
  if (storeUserOrder !== null) {
    user_order_product = storeUserOrder
    }
    console.log(user_order_product);
}

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
        product.dataset.index = index;
        
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
        product_buy_button.addEventListener('click',onDetailProduct);

        product_buy_button.textContent = "Views Detail";
        product_detail.appendChild(product_buy_button);

        
        
        product_container.appendChild(product);
    }
    dom_display_product_container.appendChild(product_container);
    // console.log(product_container)


}
// ------------------function on add to card---------------------
function onDetailProduct(event){
    // Show dialog detail------------------
    show(dom_display_dialog)
    let indexOnDetailProduct = event.target.parentElement.parentElement.dataset.index;
    // console.log(indexOnDetailProduct);
    let product_user_detail = list_product[indexOnDetailProduct];
    // console.log(product_user_detail);

    let dom_dialog_detail = document.getElementById("dialog_detail")
    // console.log(product_user_detail);

    // console.log("Hello", product_detail);

    let menu_button = document.getElementById("menu_button");
    document.getElementById("menu_button").remove();
   


    document.getElementById("section").remove();
    let section = document.createElement("section");
    section.id = "section"
    dom_dialog_detail.appendChild(section);
    

    let img_product = document.createElement("div");
    img_product.className = "img_product";
    section.appendChild(img_product);
    
    let image = document.createElement('img');
    image.src = product_user_detail.product_link;
    img_product.appendChild(image);

    let group_star = document.createElement("div");
    group_star.className = "group_star"
    img_product.appendChild(group_star);

    for (let star=0; star<6; star++){
        let i = document.createElement("i");
        i.className = "material-icons";
        i.textContent = "grade"
        group_star.appendChild(i);
    }

    let detail_product = document.createElement("div");
    detail_product.className = "detail_product";
    section.appendChild(detail_product);

    let name_product = document.createElement("h2")
    name_product.textContent = "Name : "+ product_user_detail.name;
    detail_product.appendChild(name_product);

    let price_product = document.createElement("h2");
    price_product.textContent = "Price : $ "+ product_user_detail.price
    detail_product.appendChild(price_product)


    let product_information = document.createElement("div");
    product_information.className = "product_information";
    detail_product.appendChild(product_information);

    let choose_size_label = document.createElement("label");
    choose_size_label.textContent = "Choose Size"
    product_information.appendChild(choose_size_label);

    let size_select = document.createElement("select");
    size_select.id = "size_select";
    product_information.appendChild(size_select);
    // console.log("Hello",size_select)


    let disabled_option = document.createElement("option");
    disabled_option.disabled = "disabled"
    disabled_option.textContent= "Choose Size";
    size_select.appendChild(disabled_option);

    let array_of_size = ["S","M","L","XL","XXL"];
    for (let size of array_of_size){
        let size_option = document.createElement("option");
        size_option.value = size;
        size_option.textContent = size;
        size_select.appendChild(size_option);
    }
    


    let product_detail = document.createElement("div");
    product_detail.className = "product_details"
    product_information.appendChild(product_detail);

    let p_detail = document.createElement("p");
    p_detail.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    product_detail.appendChild(p_detail);


    let menu_btn = document.createElement("menu");
    menu_btn.id = "menu_button"
    dom_dialog_detail.appendChild(menu_btn);

    let onCanel_btn = document.createElement("button");
    onCanel_btn.dataset.index = indexOnDetailProduct;
    onCanel_btn.addEventListener("click",onCancel);
    onCanel_btn.textContent = "CANCEL";
    menu_btn.appendChild(onCanel_btn);

    let onAddToCard_btn = document.createElement("button");
    onAddToCard_btn.dataset.index = indexOnDetailProduct;
    onAddToCard_btn.addEventListener("click",onAddToCard);
    onAddToCard_btn.textContent = "ADD TO CARD";
    menu_btn.appendChild(onAddToCard_btn);    
    

    
}


// function search when user type on search input-------------------

function search(){
    let search_box = document.getElementById("search_item").value.toUpperCase();
    let storeItem = document.getElementById("list_product_container");
    let product = document.querySelectorAll(".product");
    let productName = document.getElementsByTagName("h2")
    
    // console.log(search_box);

    for (let i = 0; i< productName.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];    
        if (match){
            let textValue = match.textContent || match.innerHTML
            if (textValue.toUpperCase().indexOf(search_box)> -1){
                product[i].style.display = "";
            } else{
                product[i].style.display = "none";

            }
        }
    }
}



// call function to display product
displayProduct();
loadOrders();