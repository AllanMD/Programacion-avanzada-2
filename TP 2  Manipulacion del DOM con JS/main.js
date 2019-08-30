/// 1. Insertar el string "Hello World" dentro del elemento <p>
//document.getElementById("myId").innerHTML = "HELLO WORLD";
document.querySelector("#myId").innerHTML = "HELLO WORLD CON QUERYSELECTOR";

/// 2. Insertar el string "Hello World" dentro del primer elemento que tenga la clase test
document.getElementsByClassName("test")[0].innerHTML = "Hello world test"; // [0] para obtener el primer elemento con ese class

/*3. Agregar funcionalidad a los botones para modificar la tabla.
a. Cuando haga click en el botón “Insert row” se deberá agregar una fila al final de la tabla.
b. Cuando haga click en el botón “Delete row” se deberá borrar la última fila agregada.*/
var i = 1;
function insertRow(){

    var tr = document.createElement("tr");
    var row1 = document.createElement("td");
    var row2 = document.createElement("td");
    row1.innerHTML = "row" + i;
    row2.innerHTML = "row " + i;
    tr.appendChild(row1);
    tr.appendChild(row2);
    var table = document.getElementsByClassName("myTable");
    table[0].appendChild(tr);
    i++;
}

function deleteRow(){
    //var table = document.getElementsByClassName("myTable")[0];
    var table = document.querySelector(".myTable"); // obtiene el primero que coincida con el pasado por parametro
    var length = table.rows.length -1;
    if(length > 0){
        table.deleteRow(length);
    } // para no borrar la primera fila que es el header
    
}

/* 4. Deberá resaltar (agregar CSS) todos los elementos span que contengan la clase
myClass cuando se haga click en el botón “Highlight words” . */

function highlight(){
    //var span = document.getElementsByClassName("myClass"); // funciona igual que el de abajo
    var span = document.querySelectorAll(".myClass"); // .myClass selector CSS para los class =""
    for (let index = 0; index < span.length; index++) {
        const element = span[index];
        element.style.color = "red";
    }
  
}