----ejemplo basico de ciclo for---
for(let i=10; i>=2; i--){

    console.log(i);
}

-----validacion de sumatoria de 2+2----

let respuesta;
while(respuesta != '4'){
    let pregunta= prompt("ingrese cuanto es 2+2");
    let respuesta= pregunta;
}

----ARRAYS EJEMPLOS---

function imparreglo(arr){

    for(let i=0; i< arr.length; i++){
        console.log(arr[i]);
    }

}
imparreglo(['pedro','oscar','nelson']);

---RECORRER OBJETOS MEDIANTE UNA FUNCION--

//se declara el objeto y sus items

const obj={
    0: "ejemplo",
    1: 10,
    c: false

};

//se crea una nueva funcion donde se declara una constante que guardara los valores del objeto anterior

function impobj(obj){
    const arr = Object.values(obj); //la propiedad Object.values(obj);  lista todos los elementos de un objeto hacia un arreglo 
for(let i=0; i< arr.length; i++){  //se recorre el arreglo ya convertido 
    console.log(arr[i]);//se listan todos los elementos del objeto como arreglo.

}
  
}



----------EJERCICIO REDUCCION DE LINEAS DE CODIGO CON OBJETOS---

//se declara los objetos y sus respectivos elementos.

const listadesubscripciones ={ 

    gratis:"es gratis",
    nogratis:"no es gratis"

}

//se define una funcion la cual va a tomar el nombre de la constante del objeto y seguido de esto el nombre para poder identificar que objeto se esta usando , en caso de no encontrar nada retorna el warning.

function imprest(membership){
    if(listadesubscripciones[membership]){
       console.log(listadesubscripciones[membership]); 
        return;
    }
    console.warn("no existe el elemento");
    
}

 

