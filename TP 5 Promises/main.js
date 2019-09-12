function httpRequest(url){
    return new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
        request.open('GET',url);
        request.responseType = 'json';
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
    console.log(response[0]);//response[0].id; // el response ya se puede manejar como un objeto JSON,
    displayRequestResults(response.splice(0,101));
})
.catch((reason) => {
    console.log(Error(reason));
})

function displayRequestResults (results){
    displayPage(0, results);
    var pages = results.length / 10;
    var ul = document.getElementById("pagination");
    for (let i = 0; i < pages; i++) {
        var li = document.createElement("li");
        li.className = "page-item";
        var a = document.createElement("a");
        a.className = "page-link";
        a.href = "#";
        a.innerHTML = i+1;
        a.addEventListener("click", function(){displayPage(i, results)}, false); // aca la i siempre me tomaba el ultimo valor del loop,
        // al cambiar en el for el "var i" por "let i" se soluciona, esto por el contexto de las variables en js: https://entredesarrolladores.com/6865/addeventlistener-en-un-loop
        li.appendChild(a);
        ul.appendChild(li);
    }
}
//https://es.stackoverflow.com/questions/79809/cual-es-la-diferencia-de-usar-let-en-vez-de-var-en-javascript

function displayPage (page, results){
    var tbody = document.getElementById("results");
    tbody.innerHTML = "";
    var from = page*10;
    var to = from + 10;
    for (var i = from; i < to; i++) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.scope = "row",
        th.innerHTML = results[i].id;

        var td1 = createTd(results[i].first_name);
        var td2 = createTd(results[i].last_name);
        var td3 = createTd(results[i].email);
        var td4 = createTd(results[i].gender);
        var td5 = createTd(results[i].last_connected_ip);

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbody.appendChild(tr);
    }
}

function createTd(content){
    var td = document.createElement("td");
    td.innerHTML = content;
    return td;
}