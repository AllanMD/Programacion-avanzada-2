import { data } from "./MOCK_DATA.js"
//https://es.stackoverflow.com/questions/215982/error-al-abrir-p%C3%A1gina-web-en-local-con-ajax-access-to-xmlhttprequest-at-file
// para poder usar script modules y solucionar problemas de CORS

function loadData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(data)
}, 1000)
})
}

function loadTable(data){
	var tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
	tableBody.innerHTML = "";
	data.forEach(element => {
		var tr = tableBody.insertRow(-1);
		var id = tr.insertCell(-1);
		id.innerHTML = element.id;
		var first_name = tr.insertCell(-1);
		first_name.innerHTML = element.first_name;
		var last_name = tr.insertCell(-1);
		last_name.innerHTML = element.last_name;
		var email = tr.insertCell(-1);
		email.innerHTML = element.email;
		var dni = tr.insertCell(-1);
		dni.innerHTML = element.dni;
	});

}

function sort (){
	loadData().then((response) =>{
    var field = document.getElementById("field").value;
	var sort = document.getElementById("sort").value;
	var newData = new Array();

	if (sort == "asc") {
		newData = response.sort((a, b) => (a[field] > b[field]) ? 1 : -1);
	}

	else if (sort == "desc"){
		newData = response.sort((a, b) => (a[field] < b[field]) ? 1 : -1);
		//array.reverse no funcionaba siempre bien, reemplace con sort
		
	}
	loadTable(newData);
})
.catch((reason) => {
    console.log(Error(reason));
})
	
}

window.onload = function() {
	var btn = document.getElementById("sortBtn");
	btn.addEventListener("click", sort, false);
	
	loadData().then((response) =>{
		loadTable(response);
	})
	.catch((reason) => {
		console.log(Error(reason));
	})
}; 
// https://developer.mozilla.org/es/docs/Web/API/GlobalEventHandlers/onload