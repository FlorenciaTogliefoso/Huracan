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

console.log("Huracan")

const nombre  = " Alejo "

function nuevosObjetos (nombre, apellido){
    this.nombreDePila = nombre; 
    this.apelliidoDeLaPersona = apellido; 
}

const persona1 = new nuevosObjetos ("Globo", "Huracan")
console.log(persona1) 

const personas = [ "Globo", "Huracan"]

console.log(personas)

console.log ( personas [ 0 ] )

console.log ( personas.lenght )
console.log( "Carola".lenght )
const  fruta  =  "manzana"
console.log ( "123120'9310'293013-_-´+´{+´pásodsa´+dp+p65469*-/*-" . longitud )
console.log ( fruta.length )

console.log(fruta.lenght)

const  frutas  =  [  "plátano" ,  "manzana" ,  "pera" ,  "uva" ,  "melón" , "sandía  "  ]

console.log ( frutas.lenght )

for  ( let  i  =  0 ;  i  <  frutas.lenght;  i ++ ) {
    console.log ( `En la posición ${ i } , se encuentra: ${ frutas [ i ] } ` )
} 
const  arrayRaro  =  [ 1 ,  2 ,  3  , 4 ,  "carola" ,  "Kojima" ,  [ 1 ,  2  , 3 ,  4 ,  5 ] ,  true ,  false ,  { nombre : "Fernando" }  ]

const  arraysConArrays  =  [  [  1 ,  2 ,  3  ] ,  [  4 ,  5 ,  6  ] ,  [  7 ,  8 ,  9  ]  ]

for  ( let i  =  0 ;  i  <  arraysConArrays . longitud  ;  i ++ ) {
    console.log( arraysConArrays [ i ] )

    for (  let  j  =  0 ;  j  <  arreglosConArrays [ i ] . longitud ;  j ++ ) {
        console.log ( arraysConArrays [ i ] [ j ] )
    }
}

const clientes=  [
    {
        nombre : "Carola" ,
        edad : 27
    } ,
    {
        nombre : "Franco" ,
        edad : 27
    } ,
    {
        nombre : "Mitchell" ,
        edad : 27
    } ,
    {
        nombre : "Pablo" ,
        edad : 27
    } ,
    {
        nombre : "Azucena" ,
        edad : 27
    } ,
    {
        nombre : "Paula" ,
        edad : 27
    } ,
]

console.log ( clientes )

for  ( let  i  =  0 ;  i  <  clientes . longitud ;  i ++  ) {

    console.log ( clientes [ i ] . nombre )
}

console.log ( frutas ) 
console.log ( frutas . push ( "papaya" ) )  
console.log ( frutas ) 

const  edad  =  20
let  otraEdad  =  edad
otraEdad  =  27

const  otrasFrutas  =  frutas
otrasFrutas.push ( "cereza" )
console.log ( otrasFrutas )
console.log ( frutas )

const  nuevasFrutas  =  [... frutas]
nuevasFrutas.push("tomate")

console.log ( frutas )
console.log( nuevasFrutas )

nuevasFrutas.unshift ( "mandarina" )
console.log(nuevasFrutas)
nuevasFrutas.unshift ( "POMELO" ,  "TOMATE" )
console.log ( nuevasFrutas )

nuevasFrutas.pop ( )
console.log( nuevasFrutas ) 
nuevasFrutas.pop( )
nuevasFrutas.pop ( )
nuevasFrutas.pop ( )
nuevasFrutas.pop ( )
nuevasFrutas.pop ( )
console.log ( nuevasFrutas )


console.log ( nuevasFrutas )
nuevasFrutas.reverse ( )
console.log(  nuevasFrutas )

console.log ( nuevasFrutas.join ( ) )
console.log ( nuevasFrutas.join ( " " ) )
console.log ( nuevasFrutas .join( ", " ) )
console.log ( nuevasFrutas )

const  verduras  =  [  "acelga" ,  "espinaca" ,  "perejil" ,  "cilantro" ,  "lechuga" ]
const  nuevoArray  =  nuevasFrutas . concat ( verduras )  
console.log ( nuevoArray )

const  otrasVerduras  =  verduras.slice ( ) 
const  verdurasQueMeGustan  =  verduras.slice ( 3 ,  4 )  

console.log ( verduras )
console.log ( verdurasQueMeGustan )

verduras.splice ( 0 ,  0 ,  "zapallito" )
console.log ( verduras )
verduras.splice( 3 ,  1 )
console.log ( verduras )

console.log ( verduras.indexOf ( "zapallito" ) )

console.log ( verduras.includes ( "perejil" ) )
console.log ( verduras.includes( "cilantro" ) )

const  carteraDeClientes  =  [ ]

carteraDeClientes.push ( "Azucena" )

const  personita  =  {
    nombre : "Tomás" ,
    edad : 20
}

console.log ( carteraDeClientes )
carteraDeClientes.push( personita )
console.log ( carteraDeClientes )