var listC = document.getElementById('list-div');
var formC = document.getElementById("form-div");
var header = document.getElementById("header");
var button = document.getElementById("add");
var buttonS = document.getElementById('submit');
var list = document.getElementById('list');
var buttonD = document.getElementsByClassName('delete');
var formP = document.getElementById('form-p');

//function for refreshing page
function pageRefresh(){
    if (header.innerHTML == "Phone Directory") {
        header.innerHTML = "Add Subscribers";
    } else {
        header.innerHTML = "Phone Directory";
    }

    if (listC.style.display == "none") {
        listC.style.display = "block";
    } else {
        listC.style.display = "none";
    }

    if (formC.style.display == "none") {
        formC.style.display = "block";
    } else {
        formC.style.display = "none";
    }

    if (button.innerHTML == "Add") {
        button.innerHTML = "Back";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        button.innerHTML = "Add";
        button.style.backgroundColor = "orange";
        button.style.color = "white";
    }
}

//function for Add/Back button
button.addEventListener("click", function (){
    pageRefresh();
});

//function for ADD button
buttonS.addEventListener('click', function (){
    var name = document.getElementById('name');
    var number = document.getElementById('contact');
    
    var li = document.createElement('li');
    li.setAttribute("class", "grid-container");

    var paraN = document.createElement('p');
    var textN = document.createTextNode(name.value);
    paraN.appendChild(textN);

    var paraC = document.createElement('p');
    var textC = document.createTextNode(number.value);
    paraC.appendChild(textC);

    li.appendChild(paraN);
    li.appendChild(paraC);

    var btn = document.createElement('button');
    var btn_text = document.createTextNode('Delete');
    btn.setAttribute("class", "delete");
    btn.setAttribute("onclick", "this.parentNode.parentNode.removeChild(this.parentNode);");
    btn.appendChild(btn_text);

    li.appendChild(btn);

    list.appendChild(li);
    
    name.value ="";
    number.value = "";
    pageRefresh();
});