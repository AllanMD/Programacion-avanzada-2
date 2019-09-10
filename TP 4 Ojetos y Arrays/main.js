
class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class ProductLine {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

class ShoppingCart {
    constructor(){
        this.productLines = new Array();
    }

    addProductToShoppingCart(product){
        var exists = false;
            this.productLines.forEach(element => { // pasar a while para no recorrer todo si ya encontre el product
                if(element.product == product){
                    element.quantity ++;
                    exists = true;
                }
            });
        if (!exists) {

            var productL = new ProductLine(product, 1);
            this.productLines.push(productL);
        }

        displayCart(this.productLines);
    }

    deleteProduct(product){

        for (var i = 0; i < this.productLines.length; i++) { // pasar a while para no recorrer todo innecesariamente
            if(this.productLines[i].product == product){
                    this.productLines[i].quantity --;
                    if (this.productLines[i].quantity == 0) {
                        this.productLines.splice(i,1); // a partir de la pos i, eliminar 1
                    }
                }
        }

        displayCart(this.productLines); 

    }
}

var shoppingCart = new ShoppingCart();
var computer = new Product("Computadora", "24.99", "Esto es una puta descripcion");
var tv = new Product("Televisor", "24.99", "Descripcion numero dos");
var smartphone = new Product("Telefono", "2444", "JAJAJAJAJAJAAJAJAJ");

var array = new Array(computer, tv, smartphone);
//var array = [computer, tv, smartphone]; // otra forma de declarar

array.forEach(product => {
    createProduct(product);
});

var i = 0;
function createProduct(product) {

    var div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 mb-4";

    var div2 = document.createElement("div");
    div2.className = "card h-100";

    var a = document.createElement("a");
    a.href = "#";

    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "http://placehold.it/700x400";

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
    button.onclick = function() {

        shoppingCart.addProductToShoppingCart(product);

    } 
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

function displayCart (){
    

    var cart = document.getElementById("cart");
    console.log(shoppingCart.productLines);
    cart.innerHTML = "";
    var li = document.createElement("li");
    li.className = "list-group-item"; 
    li.style = "background-color: #18b639; color: white;"
    li.innerHTML = "Cart";
    cart.appendChild(li);
    

    shoppingCart.productLines.forEach(element => {
        
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.innerHTML = "Quitar";
        button.onclick = function (){
            shoppingCart.deleteProduct(element.product);
        }
        li.className = "list-group-item";

        var strong = document.createElement("strong");
        strong.className = "product-name";
        strong.innerHTML = element.product.name;

        var p = document.createElement("p");
        p.id = "quantity-" + i;
        i++;

        p.innerHTML = element.quantity;

        li.appendChild(strong);
        li.appendChild(p);

        li.appendChild(button);
        cart.appendChild(li);
    });
}
