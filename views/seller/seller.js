// DOM ELEMENT -----------------------------------
const dom_create_product_dialog = document.querySelector("#create_product_dialog");

// Data--------------------------------------------
let products = [
  {
    product_link:"../../img/T-shirt1.jfif",
    name:"T-Shirt",
    price:"12"
  },
  {
    product_link:"../../img/T-shirt2.jfif",
    name:"T-Shirt",
    price:"12"
  },
  {
    product_link:"../../img/T-shirt3.jfif",
    name:"T-Shirt",
    price:"12"
  },
  {
    product_link:"../../img/T-shirt4.jfif",
    name:"T-Shirt",
    price:"12"
  },
  {
    product_link:"../../img/dress1.jfif",
    name:"Dress",
    price:"12"
  },
  {
    product_link:"../../img/dress2.jfif",
    name:"Dress",
    price:"12"
  },
  {
    product_link:"../../img/dress3.jfif",
    name:"Dress",
    price:"12"
  },
  {
    product_link:"../../img/dress4.jfif",
    name:"Dress",
    price:"12"
  },
  {
    product_link:"../../img/Short1.jfif",
    name:"Short",
    price:"12"
  },
  {
    product_link:"../../img/Short2.jfif",
    name:"Short",
    price:"12"
  },
  {
    product_link:"../../img/Short3.jfif",
    name:"Short",
    price:"12"
  },
  {
    product_link:"../../img/Short4.jfif",
    name:"Short",
    price:"12"
  },
  {
    product_link:"../../img/Skirt1.jfif",
    name:"Skirt",
    price:"12"
  },
  {
    product_link:"../../img/Skirt2.jfif",
    name:"Skirt",
    price:"12"
  },
  {
    product_link:"../../img/Skirt3.jfif",
    name:"Skirt",
    price:"12"
  },
  {
    product_link:"../../img/Skirt4.jfif",
    name:"Skirt",
    price:"12"
  },
  
]
// logcal storage--------------------------
// ------------------function save to local storage--------
function saveProducts(){
  localStorage.setItem("products",JSON.stringify(products));
}

function loadProducts() {
  let productStorage = JSON.parse(localStorage.getItem("products"));
  if (productStorage !== null) {
    products = productStorage;
  }
  console.log(products);
}
// function create and cancel ------------------
function onCreate(){
  hide(dom_create_product_dialog);
  // 1create new product
  let new_product = {};
  
  
  new_product.product_link = document.querySelector("#product_link").value;
  new_product.name = document.querySelector("#name").value;
  new_product.price = document.querySelector("#price").value;

  products.push(new_product);


  document.querySelector("#product_link").value ="";
  document.querySelector("#name").value ="";
  document.querySelector("#price").value ="";
  // 2 save new product
  saveProducts();
  // 3 display new product
  displayProduct();
  // console.log(new_product);

}
function onRemoveProduct(event){
  // Get index
  let index = event.target.parentElement.parentElement.dataset.index;
  // Romve Product
  products.splice(index,1)
  // Save to local storage
  saveProducts();
  // Update view
  displayProduct();
}
function onEditProduct(event){
  // Get the product index using the dataset
  document.querySelector("menu").lastElementChild.textContent = "Edit";
  let index = event.target.parentElement.parentElement.dataset.index;
  // Update the dialog with product informatin
  document.querySelector("#product_link").value = products[index].product_link;
  document.querySelector("#name").value = products[index].name;
  document.querySelector("#price").value = products[index].price;
  // To show dialog
  show(dom_create_product_dialog);
  products.splice(index,1);


}

function onCancel(){
  hide(dom_create_product_dialog);
}
// function add product------------------------
function onAddProduct(){
  document.querySelector("menu").lastElementChild.textContent = "Create";

  show(dom_create_product_dialog)
  
}

// function show and hide dialog--------------
function hide(element){
  element.style.display = "none";
}
function show(element){
  element.style.display = "block";
}

// function display product-------------------
function displayProduct(){
  let dom_seller_view = document.querySelector("#seller_view");
  // Remove the card group-product-contianer and create the new one and create table
  // remove 
  group_product_container = document.querySelector("#group_product_container");
  if (group_product_container != null){
    group_product_container.remove();

  }
  // console.log(dom_group_product_container);
    // create
  group_product_container = document.createElement("div");
  group_product_container.id = "group_product_container";

  let table = document.createElement("table");
  table.id = "table";

  let thead = document.createElement("tr");
  table.appendChild(thead);

  
  for (let i = 0; i<5; i++){
    let thead_text = ["Product_link","Name","Price","Edit","Delete"]
    let th = document.createElement("th");
    th.textContent = thead_text[i];
    thead.appendChild(th);

  }
  
  
  // for all item create td and add it to product contianer
  for (let index= 0; index< products.length; index++){
    let table_row = document.createElement("tr");
    table_row.className = "table-row";
    table_row.dataset.index = index;
    
    // --------------------------------------
    for (let i in products[index]){
      let td = document.createElement("td")
      td.id = i;
  
      if (td.id == "product_link"){
        product_img = document.createElement('img');
        product_img.className = "img_product"
        product_img.src = products[index].product_link;
        td.appendChild(product_img);
        
      } 
      if (td.id == "name"){
        td.textContent = products[index].name;
      }  
      if (td.id == "price"){
        td.textContent = products[index].price + " $";
      }  
      table_row.appendChild(td);
    }

    let tr_img1 = document.createElement("td");
    let edit_img = document.createElement("img");
    edit_img.src = "../../img/edit.png";
    edit_img.addEventListener('click', onEditProduct)
    tr_img1.appendChild(edit_img);
    table_row.appendChild(tr_img1);
    
    let tr_img2 = document.createElement("td");
    let delete_img = document.createElement("img");
    delete_img.src = "../../img/trash.png";
    delete_img.addEventListener('click',onRemoveProduct)
    tr_img2.appendChild(delete_img);
    table_row.appendChild(tr_img2);
    
    table.appendChild(table_row);
    group_product_container.appendChild(table);
    dom_seller_view.appendChild(group_product_container);
  }

  
}

// -------------call product-------------------
// saveProducts();
loadProducts();
displayProduct();