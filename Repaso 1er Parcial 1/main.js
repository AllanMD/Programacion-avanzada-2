// ---------- 1 -------------
var array = new Array();
array.push(1,5,2,3,4,5,5,5,6,7);
console.log("Array con duplicados: " + array);
array = deleteDuplicatesFromArray(array);
console.log("Array desp de eliminar duplicados: " + array);

function deleteDuplicatesFromArray(array){
   for (let i = 0; i < array.length; i++) {
       for (let index = 0; index < array.length; index++) {
           if(array[index] == array[i] && index != i  ){
               array.splice(index,1);
           }
       }
   }

   return array;   
}

// ---------------2 ------------
var years = [2019,1587,1995,1968,1254,2004, 2092];

years.forEach(year => {
    if (isLeap(year)){
        console.log(year + " ----> Es bisiesto");
    }
    else{
        console.log(year + "------> NO bisiesto");
    }
    
});
function isLeap (year){
    var isLeap = false;
    if (year % 4 === 0){ // variable % 2 === 0 determina si la variable es divisible por 2
        isLeap = true;
        if (year % 100 === 0){
            isLeap = false;
            if(year % 400 === 0){
                isLeap = true;
            }
        }
    }
    return isLeap;
}


// --------------- 3 ----------------
console.log("---------------- 3 ------------");
class Person {
    constructor (name, last_name, age){
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
}

var allan = new Person ('Allan', 'Maduro', 21);
var putito = new Person('Fede', 'Elias', 74);
var persona = new Person("Bbbb", "hghg",54);

var persons = new Array(allan, putito, persona);

console.log(persons.sort((a, b) => (a.age > b.age) ? 1 : -1)); // si la edad de a es mayor, devuelve 1 , sino -1 // el sort recibe una funcion como parametro

// ------------------ 4 -----------
console.log("----------------------- 4 ----------------");

class Item {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    /*Item.prototype.toString = function(){
        return "fds";
    }*/


}

class Cart{
    constructor(){
        this.items = new Array();
    }

    addItem(item){
        this.items.push(item);
    }

    getTotal(){
        var total = 0;
        this.items.forEach(element => {
            total += element.price;
        });
        return total;
    }
}

var tv = new Item("tv", 100);
var pc = new Item("pc", 500);

var cart = new Cart();
cart.addItem(tv);
cart.addItem(pc);

console.log("Total de carrito: " + cart.getTotal());

// hacer los toString..