function validarFormulario(){

    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var pass = document.getElementById('pass').value;
    var email = document.getElementById('email').value;

    var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
    var regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

    
    //Validacion nombre
    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){ // lo ultimo es para los espacios en blanco
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }else if (nombre.length > 20){
        alert('Tiene mas de 20 caracteres bobo');
        return false;
    }

    for (let index = 0; index < nombre.length; index++) {
        if (iChars.includes(nombre[index])) {
            alert('Sos un pelotudo y alto cornudo (tiene caracteres especiales, como el que lo escribio)');
            return false;
        }
        
    }
 
    //Validacion edad
    if (isNaN(edad)){
        alert('La edad debe ser numerica');
        return false;
    }

    if (pass.length < 9 || pass.length > 20) {
        alert('Contraseña corta o larga');
        return false;
    } else if (!regex.test(pass)) {
        alert('La contraseña debe tener minimo una mayuscula, una minuscula y un numero');
        return false;
    }
 
    //Validacion correo //https://regexr.com/ para las regular expression (/\S+@\S+\.\S+/)
    if(!(/\S+@\S+\.\S+/.test(email))){
      alert('ERROR: Debe escribir un correo válido');
      return false;
    }
    //var separador1 = "@";
    //var separador2 = ".";
    var email2 = email.split("@",2); // fede@gmail.com --> fede gmail.com // lo separa por el @ sin incluirlo y devuelve los primeros 2 resultados
    var correo = email2[1].split(".",1); // --> gmail 
    // pasar a minuscula el correo
    if(correo != "google" && correo != "outlook" && correo != "icloud"){ 
        alert("El correo debe ser google, outlook o icloud");
        return false;
    }
    

    return true;
}

function addProductToWishList(product){

    var listElement = document.createElement("li");
    listElement.innerHTML = product;
    //listElement.addEventListener();

    var list = document.getElementById("wishList");
    list.appendChild(listElement);
}