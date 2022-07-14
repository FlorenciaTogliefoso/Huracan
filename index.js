alert('Bienvenidos a mi pagina web')

 alert("Espero les guste Messi")

 alert('Gracias por visitar')

 const esEstudiante = true;
const esProfesor = false;

const valor = true; 
console.log(!valor)

console.log(Boolean(0) )
console.log(Boolean("10"))

console.log("9" == 9)

console.log(10 === 10)
console.log(10 === "10")

console.log(10 == 10)
console.log(10 == "10")
console.log(10 == "5")

console.log(10 > 10)
console.log(10 > 5)
console.log(10 > 15)

console.log(10 < 50)
console.log(10 < 5)

console.log(10 >= 10)
console.log(10 <= 5)

console.log(10 !== 10)
console.log(10 !== 5)

console.log(10 != "10")
console.log(10 != 5)

const edadDelUsuario = prompt("Ingrese su edad")

const body = document.querySelector("body")
body.style.display = "none"

if(edadDelUsuario >= 18){
    body.style.display = "flex"
 } else { 
    alert("No podes ingresar")
 }

 const año = prompt("Ingrese un año en el cual Messi salio campeon")
 
 if(año === "2014" || año === "2015"){ 
    console.log("Fue campeon")
 } 
 else if (año ==="2022" || año === "2021"){
    console.log("Fue campeon")
 }

 if(año === "2018" || año === "2019"){ 
    console.log("Fue campeon")
}

if(año === "2016" || año === "2017"){ 
    console.log("Fue campeon")
}

 else { 
    console.log("Ese año no salio campeon")
 }

 console.log("Hola Fanaticos de Messi")

function saludar (nombre){
    return nombre
}

const comprobarContrasenia = (contrasenia) => {
    if(contrasenia.length >=10){
        return true 
    } else{
        return false
    }
}

console.log(comprobarContrasenia("messi100721"))

const checkearContrasenia = (contrasenia) => contrasenia.length >= 10

console.log(checkearContrasenia("messiCampeon1007"))

console.log("messiCampeon1007".length >= 10)
 
dato1 = prompt("Ingrese el año de nacimiento de Leo: ");
dato2 = prompt("Ingrese el año en el que debuto: ");

function comparacion(dato1, dato2){
    if(dato1.length == dato2.length){
        console.log("1987")
    } else{
        console.log("2004")
    }
}

const argumentos=(argumento1, argumento2)=>{
    if(argumento1.length == argumento2.length){
        return `Si, ese año nacio`
    } else {
        return `No, ese año no debuto`
    }
}

const largoElementos = (elemento1, elemento2) => elemento1.lenght == elemento2.lenght

const comparaDatos = (dato1, dato2) => dato1.lenght == dato2.lenght 

console.log(comparaDatos("123", "456"))

const gritar = (str) => {
    return str.toUpperCase()
}

const exclamarGritando = (funcion) => {
    return `¡¡¡${funcion}!!!`
}
console.log(exclamarGritando(gritar("Aguante Huracan")))