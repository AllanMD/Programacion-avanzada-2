function httpRequest(url){
    return new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
        request.open('GET',url);
        request.responseType = 'JSON';
        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            }
            else{
                reject(Error("No se pudo resolver la peticion, Error: " + request.statusText));
            }
        }

        request.onerror = function (){
            reject(Error("Oops, hubo un problema de conexion"));
        }
        request.send();
    });
}

httpRequest("https://utn-2019-avanzada2-tp5.herokuapp.com/records").then((response) =>{
    console.log(response);
    //response[0].id; // el response ya se puede manejar como un objeto JSON, de esta manera obtengo el id del primero
})
.catch((reason) => {
    console.log(Error(reason));
})