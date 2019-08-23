function myFunction(){

    var num1 = document.forms["formulario"]["num1"].value;
    var num2 = document.forms["formulario"]["num2"].value;

    var resultado = parseInt(num1) + parseInt(num2);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}