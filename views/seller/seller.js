// DOM ELEMENT -----------------------------------
let dom_create_product_dialog = document.querySelector("#create_product_dialog");
let dom_seller_view = document.querySelector("#seller_view");
let id_value = document.querySelector("#id");
let name_value = document.querySelector("#name");
let color_value = document.querySelector("#color");
let price_value = document.querySelector("#price");
// Data--------------------------------------------
let products = [
  {
    id:"1",
    name:"Dress",
    color:"Red",
    price:"12"
  },
  {
    id:"1",
    name:"Dress",
    color:"Red",
    price:"12"
  },
  {
    id:"1",
    name:"Dress",
    color:"Red",
    price:"12"
  }
]
// console.log(products);
// function create and cancel ------------------
function onCreate(){
    hide(dom_create_product_dialog);
    // console.log(id_value.value);
    // console.log(name_value.value);
    // console.log(color_value.value);
    // console.log(price_value.value);
}
function onCancel(){
    hide(dom_create_product_dialog);
}
// function add product------------------------
function onAddProduct(){
    show(dom_create_product_dialog)
    displayProduct();

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
  // Remove the card group-product-contianer and create the new one and create table
    // remove 
  let dom_group_product_container = document.querySelector("#group_product_container");
  dom_group_product_container.remove();
    // create
  let group_product_container =document.createElement("div");
  group_product_container.id = "group_product_container";

  let table = document.createElement("table");
  table.id = "table";
  dom_group_product_container.appendChild(table);
  
  let table_row = document.createElement("tr");
  table_row.className = "table-row";
  table.appendChild(table_row);
  
  dom_seller_view.appendChild(group_product_container);
  
  console.log(group_product_container);
  console.log(dom_seller_view);
  
  // for all item create td and add it to product contianer
 

}