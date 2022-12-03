let userOrder = JSON.parse(localStorage.getItem("userOrder"));
// console.log(userOrder);

let cart_item = document.getElementById("cart_item");
for (let item of userOrder){
   let cart_row = document.createElement("div");
   cart_row.className = "cart_row";
   cart_item.appendChild(cart_row);

   let cart_column = document.createElement("div");
   cart_column.className = "cart_column cart_item";
   cart_row.appendChild(cart_column);

   let image = document.createElement("img");
   image.className = "art_item_image"
   image.src = item.product_link
   cart_column.appendChild(image);

   let cart_item_title = document.createElement("span");
   cart_item_title.className = "cart_item_title"
   cart_item_title.textContent = item.name;
   cart_column.appendChild(cart_item_title);

   let cart_price = document.createElement("span");
   cart_price.className = "cart_price cart_column";
   cart_price.textContent = "$ " + item.price;
   cart_row.appendChild(cart_price);

   let cart_quantity_input = document.createElement("div");
   cart_quantity_input.className ="cart_quantity_input cart_column";
   cart_row.appendChild(cart_quantity_input);

   let quantity_of_product_input = document.createElement("input");
   quantity_of_product_input.id = "quantity_of_product";
   quantity_of_product_input.type = "number";
   quantity_of_product_input.value = 1;
   cart_quantity_input.appendChild(quantity_of_product_input);

   let remove_btn = document.createElement("button");
   remove_btn.className = "remove_btn";
   remove_btn.type = "button";
   remove_btn.textContent = "REMOVE";
   cart_quantity_input.appendChild(remove_btn);


    
}
