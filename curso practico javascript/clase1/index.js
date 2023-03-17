const valueH1 = document.querySelector('h1'); // etiqueta
const parrafo = document.querySelector('.parrafo'); // clase
const input = document.querySelector('#input'); // etiqueta

console.log({
    valueH1,
    parrafo,
    input

});

//set and get attibute

parrafo.setAttribute("class","10");

console.log(parrafo.getAttribute("class"));


//add and remove class
valueH1.classList.add("w-100");
input.classList.remove("name");
