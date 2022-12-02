// DOM------------------
let dom_display_product_container = document.querySelector("#display_product_container")
let dom_display_dialog = document.querySelector("#detail_product_dialog");
// get information from local storage--------
const list_product = JSON.parse(localStorage.getItem("products"));



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
    hide(dom_display_dialog)
}



// function saveProducts(){
//   localStorage.setItem("products",JSON.stringify(list_product));
// }

// function loadProducts() {
//   productStorage = JSON.parse(localStorage.getItem("products"));
//   if (productStorage !== null) {
//       list_product = productStorage
//     }
//     console.log(productStorage);
// }

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

        product_buy_button.textContent = "BUY NOW";
        product_detail.appendChild(product_buy_button);

        
        
        product_container.appendChild(product);
    }
    dom_display_product_container.appendChild(product_container);
    // console.log(product_container)


}
// ------------------function on add to card---------------------
function onDetailProduct(event){
    let indexOnAddCard = event.target.parentElement.parentElement.dataset.index;
    console.log(indexOnAddCard);
    let product_user_detail = list_product[indexOnAddCard];

    let dom_dialog_detail = document.getElementById("dialog_detail")
    // console.log(product_user_detail);

    // console.log("Hello", product_detail);

    let dasdasfasf = document.getElementById("section");
    console.log(dasdasfasf)


    document.getElementById("section").remove();
    let section = document.createElement("section");
    section.id = "section"
    dom_dialog_detail.appendChild(section);
    console.log(section)

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


    let disabled_option = document.createElement("option");
    disabled_option.disabled = "disabled"
    size_select.appendChild(disabled_option);

    let array_of_size = ["S","M","L","XL","XXL"];
    for (let size of array_of_size){
        let size_option = document.createElement("option");
        size_option.value = size;
        size_option.textContent = size;
        size_select.appendChild(size_option);
    }

    let num_of_product_label = document.createElement("label");
    num_of_product_label.textContent = "Number Of Product";
    product_information.appendChild(num_of_product_label);

    let num_of_product = document.createElement("input");
    num_of_product.type = "number"
    num_of_product.placeholder = "Your Product Number"
    product_information.appendChild(num_of_product);

    let product_detail = document.createElement("div");
    product_detail.className = "product_details"
    product_information.appendChild(price_product);

    let p_detail = document.createElement("p");
    p_detail.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    price_product.appendChild(p_detail);


    let menu_btn = document.createElement("menu");
    dom_dialog_detail.appendChild(menu_btn);

    let onCanel_btn = document.createElement("button");
    onCanel_btn.addEventListener("click",onCancel);
    onCanel_btn.textContent = "CANCEL";
    menu_btn.appendChild(onCanel_btn);

    let onAddToCard_btn = document.createElement("button");
    onAddToCard_btn.addEventListener("click",onAddToCard);
    onAddToCard_btn.textContent = "ADD TO CARD";
    menu_btn.appendChild(onAddToCard_btn);    
    
    
    // Show dialog detail------------------
    show(dom_display_dialog)

    

    
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
// loadProducts();