const apiUrl = "https://utn2019-avanzada2-tp6.herokuapp.com";
function request(method, url) {
	return new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
        request.open(method,url);
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

var btn = document.getElementById("createPost");
btn.addEventListener('click', sendPost, false);

function sendPost (){
	var title = document.getElementById("title").value;
	var body = document.getElementById("body").value;

	var url = apiUrl+"/api/posts?title={"+title+"}&body={"+body+"}";

	request('POST',url).then((response) =>{
		alert("exito");
    console.log(response);
})
.catch((reason) => {
	alert("Error");
    console.log(Error(reason));
})
alert("GFFFFFFFFFFFFFFFFFFFFFFFF");  // el navegador web no deja enviar post por seguridad, consultar
}

loadPosts();

function loadPosts (){
	var postsSection = document.getElementById("posts-section");
	postsSection.innerHTML = "";
	var h2 = document.createElement("h2");
	h2.innerHTML = "Publicaciones";
	var hr = document.createElement("hr");
	postsSection.appendChild(h2);
	postsSection.appendChild(hr);
	request('GET', apiUrl+"/api/posts").then((response) =>{
		console.log(response);
		
		response.forEach(post => {
			var postDiv = createPostDiv();
			var h4 = createH4(post.title);
			var p = createBodyElement(post.body);
			var h6 = createH6("Comentarios:");
			var ul = loadCommentsByPostId(post.id);
			postDiv.appendChild(h4);
			postDiv.appendChild(p);
			postDiv.appendChild(h6);
			postDiv.appendChild(ul);

			var form = createForm();
			var formDiv = createFormDiv();
			var label = createLabel("Agregar comentario:");
			var textarea = createTextArea();

			formDiv.appendChild(label);
			formDiv.appendChild(textarea);
			var button = createSubmitButton("Enviar comentario");
			form.appendChild(formDiv);
			form.appendChild(button);

			postDiv.appendChild(form);

			postsSection.appendChild(postDiv);
			postsSection.appendChild(document.createElement("br"));//momentaneo
		})
	})
	.catch((reason) => {
		console.log(Error(reason));
	})
}

function loadCommentsByPostId(postId){
	var ul = document.createElement("ul");
	ul.className = "list-group";
	request('GET', apiUrl+"/api/comments?post_id="+postId).then((response) =>{
		console.log(response);
		// if response vacio, innerhtml de ul = "sin comentarios"
		response.forEach(comment => {
			var li = createListElement(comment.author + ": " + comment.text);
			ul.appendChild(li);
		})
	})
	.catch((reason) => {
		console.log(Error(reason));
	})
	
	return ul;
}
function createPostDiv (){
	var div = document.createElement("div");
	div.className = "col-lg-4 col-md-6";
	return div;
}
function createH4 (content){
	var h4 = document.createElement("h4");
	h4.innerHTML = content;
	return h4;

}
function createBodyElement(body){
	var p = document.createElement("p");
	p.className = "description";
	p.innerHTML = body;
	return p;
}

function createH6 (content){
	var h6 = document.createElement("h6");
	h6.innerHTML = content;
	return h6;
}

function createUl(){
	var ul = document.createElement("ul");
	ul.className = "list-group";
	return ul;
} 

function createListElement(content){
	var li = document.createElement("li");
	li.className = "list-group-item";
	li.innerHTML = content;
	return li;
}

function createForm(){
	var form = document.createElement("form");
	return form;
}

function createFormDiv(){
	var div = document.createElement("div");
	div.className = "form-group";
	return div;
}

function createLabel (content){
	var label = document.createElement("label");
	label.innerHTML = content;
	return label;
}

function createTextArea (){
	var textarea = document.createElement("textarea");
	textarea.className = "form-control";
	textarea.setAttribute("area-label", "With textarea");
	textarea.id = "comment";
	return textarea;
}

function createSubmitButton(content){
	var button = document.createElement("button");
	button.type = "submit";
	button.className = "btn btn-primary";
	button.innerHTML = content;
	//agregarle el onclick, funcion : addCommentToPost()
	return button; 
}