
class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class ShoppingLine {
    constructor(quantity, product) {
        this.quantity = quantity;
        this.product = product;
    }
}

var computadora = new Product("Computadora","24.99","Esto es una puta descripcion");
var televisor = new Product("Televisor","24.99","Descripcion numero dos");
var telefono = new Product("Telefono","2444","JAJAJAJAJAJAAJAJAJ");

createProduct(computadora);
createProduct(televisor);
createProduct(telefono);

function createProduct(product) {
    var div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 mb-4";

    var div2 = document.createElement("div");
    div2.className = "card h-100";

    var a = document.createElement("a");
    a.href = "#";

    var img = document.createElement("img");
    img.className="card-img-top";
    img.src="http://placehold.it/700x400";

    var div3 = document.createElement("div");
    div3.className = "card-body";

    var h4 = document.createElement("h4");
    h4.className = "card-title";

    var a2 = document.createElement("a");
    a2.innerHTML = product.name;
    a2.href = "#";

    var h5 = document.createElement("h5");
    h5.innerHTML = product.price;

    var p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = product.description;

    var div4 = document.createElement("div");
    div4.className = "card-footer";

    var button = document.createElement("button");
    button.innerHTML = "Add";
    button.className = "btn btn-success";
    button.onclick = function addProductToCart(){
        var cart = document.getElementById("cart");
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.innerHTML = "Quitar";
        //button.onclick = function deleteProduct(){}
        li.innerHTML = product.name;
        li.className = "list-group-item";
    
        li.appendChild(button);
        cart.appendChild(li);
    
    } // por ahora product.name
    a.appendChild(img);
    div2.appendChild(a);
    h4.appendChild(a2);
    div3.appendChild(h4);
    div3.appendChild(h5);
    div3.appendChild(p);
    div2.appendChild(div3);
    div4.appendChild(button);
    div2.appendChild(div4);

    div.appendChild(div2);

    var row = document.getElementById("productList");

    row.appendChild(div);

    
}
