/* alert('Bienvenidos a mi pagina web')

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


const saludo = saludar()

console.log(saludo)

let edadLegal = 18

const chequearSiEsLegal = (edadDelUsuario, edadDeLegalidad) => {

    if( edadDelUsuario >= edadDeLegalidad ){
        return "Es mayor de edad"
    } 
    else {
        return "Es menor de edad"
    }
}

const comprobarEdadDeAriel = chequearSiEsLegal(40, edadLegal) 
const comprarEdadCarola = chequearSiEsLegal(27, edadLegal) 

edadLegal = 18 + 20

const comprobarEdadDelQuemero = chequearSiEsLegal(25, edadLegal)
console.log(comprobarEdadDelQuemero)

const saludoFormal = () => {
    console.log("Buenas noches querido estudiantes")
}

const saludoInformal = () => {
    console.log("ke ase crá")
}

const comprobarSaludo = (tipoDeSaludo, metodoFormal, metodoInformal) => {

    if (tipoDeSaludo === "formal"){
        metodoFormal()
    }
    else if(tipoDeSaludo === "informal"){
        metodoInformal()
    }
}

const saludoPiola = comprobarSaludo("informal", saludoFormal, saludoInformal)

const estudiantes = ["Mateo", "Mitchell", "Jorge", "Azucena", "Paula", "Malena", "Fernandos"]
 const numeros = [7, 3, 22, 14, 89, 100, 5]
 let cliente = [
    {
        nombre: "Hezze",
        edad: 20,
    },
    {
        nombre: "Cristaldo",
        edad: 25,
    },
    {
        nombre: "Merolla",
        edad: 27,
    },
    {
        nombre: "Soto",
        edad: 28,
    },
]

estudiantes.forEach(( elementoActual, i) => {
    console.log(elementoActual)
})

const numeroMenor = numeros.find((curr) => {
    return curr > 1 && curr < 10
})

console.log(numeroMenor)

const clientesMayoresDeEdad = clientes.filter((elemento) => {
    return elemento.edad > 18
})

console.log(cliente)
console.log(clientesMayoresDeEdad)
console.log(cliente)

console.log(cliente.some( (elemento) => {
    return elemento.edad < 20
}))

const numerosMultiplicados = numeros.map((curr) => {
    return curr * 1000
})

console.log(numerosMultiplicados)
console.log(numeros)

const valorTotal = numerosMultiplicados.reduce((acc, elemento) => {
    return acc + elemento
})

console.log(valorTotal)

const nombresAHTML = estudiantes.reduce((acc, curr) => {
    return acc += `
    <p>${curr}</p>
    `
})

console.log(nombresAHTML)

console.log(numeros)

console.log(numeros.sort((a, b) => {
    return a - b
}))

console.log(numeros.sort((a, b) => {
    return b - a
}))

console.log(cliente)

cliente.sort( (a, b) => {

    if(a.edad > b.edad){
        return 1
    }
    else if( a.edad < b.edad){
        return -1
    }
})

console.log(cliente)
cliente.sort( (a, b) => {

    if(a.edad > b.edad){
        return -1
    }
    else if( a.edad < b.edad){
        return 1
    }
})

console.log(Math.E) 
console.log(Math.PI) 

console.log(Math.min(10, 2, 1, -Infinity)) 
console.log(Math.max(1000, 10000000, 2, Infinity)) 

console.log(Math.sqrt(9)) 
console.log(Math.sqrt(-1))

console.log(Math.random()) 
console.log(Math.random() * 1000) 

console.log(Math.random() * 50 + 10) 

console.log(Math.round(Math.random() * 1000))
console.log(Math.round(9.9))
console.log(Math.ceil(9.9)) 
console.log(Math.floor(9.9))

console.log(new Date()) 
console.log(new Date(1994, 8, 26)) 
console.log(new Date(1996, 5, 15, 14, 36, 59))
console.log(new Date("November 26, 2014 10:40"))


console.log("November 26", 2014, 14,30)
const fecha = new Date(2015, 4, 29, 20, 30)
const dia = fecha.getDay()
console.log(dia) 
console.log(fecha.getMonth()) 
console.log(fecha.getFullYear()) 


console.log(fecha.toDateString()) 
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleString())
console.log(fecha.toTimeString())
*/


console.log(document)
const container = document.getElementById("container")

const div = document.getElementsByTagName("div")

console.log(div)

const divClase = document.getElementsByClassName("tarjeta")
console.log(divClase)

const contenedorDivID = document.querySelector("#container")

const contenedorDivClass = document.querySelector(".tarjeta")

const contenedorDivEtiqueta = document.querySelector("div")

console.log(contenedorDivClass, contenedorDivEtiqueta, contenedorDivID)


const todosLoscontenedoresDiv = document.querySelectorAll("div")

console.log(todosLoscontenedoresDiv)


for(let i = 0; i < todosLoscontenedoresDiv.length; i++){
    console.log(todosLoscontenedoresDiv[i])
}


const parrafoSaludo = document.querySelector("#saludo")
console.log(parrafoSaludo)


parrafoSaludo.innerText = "le cambio el texto xd"


container.innerHTML = `<p>Aguante Huracan</p>`


console.log(POKEMON)
console.log(POKEMON.pokemon)

const debilidadesPokemon = (array, i) => {    

    const debilidadesArray = array[i].weaknesses.reduce((acc, curr) => {
        return acc + `
            <p>${curr}</p>
        `      
    },"")

    return debilidadesArray
}


const tarjetasHtml = POKEMON.pokemon.reduce((acc, elemento, i) => {   

        return acc = acc + `    
            <div class="tarjeta">
                <div class="img-container">
                    <img src=${elemento.img} alt=${elemento.name}>
                </div>   
                <p>
                    ${elemento.name}
                </p> 
                <div>
                    <p>
                        Debilidades:
                    </p>
                    ${debilidadesPokemon(POKEMON.pokemon, i)}     
                </div>   
            </div>
        `       
},"")
/*
console.log(tarjetasHtml)

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")


console.log(document.forms)

const cuadrado = document.querySelector(".cuadrado-rojo")
console.log(cuadrado)



const parrafo = document.querySelector("p")
const botonVerMas = document.querySelector("#verMas")


botonVerMas.addEventListener ("click", () => {
    parrafo.classList.toggle("ver")

    if (parrafo.classList.contains("ver")){
        botonVerMas.textContent = "Cerrar"
    } else {
        botonVerMas.textContent = "Ver más"
    }
})



cuadrado.onmousemove = () => {
    console.log("me están clickendo")
    cuadrado.classList.toggle("cuadrado-azul")
}
*/

const inputUsuario = document.getElementById("usuario")
const inputContrasenia = document.getElementById("contrasenia")
const formSesion = document.getElementById("form-sesion")
const newNote = document.getElementById("new-note")
const logOut = document.getElementById("log-out")
const main = document.querySelector("main")
const asideLogin = document.querySelector("aside")
const formNewNote = document.getElementById("form-new-note")
const inputFechaNewNote = document.getElementById("input-fecha-newnote")
const inputTextNewNote = document.getElementById("input-text-newnote")
const containerNotes = document.getElementById("container-notes")
const cerrarFormNewNote = document.getElementById("cerrar-newnote")



const user = {
    usuario: "Huracan",
    contrasenia: "2014"
}

let notas = []



formSesion.onsubmit = (e) => {
    e.preventDefault()
    if ( inputUsuario.value === user.usuario && inputContrasenia.value === user.contrasenia ) {
        main.style.display = "flex"
        asideLogin.style.display = "none"
        localStorage.setItem("user", true)
    } else {
        formSesion.reset()
        alert("El usuario o contraseña es incorrecto")
    }
}

function preferenciaDeUsuario () {
    const tokenLS = localStorage.getItem("user")
    if ( tokenLS === "true" ) {
        main.style.display = "flex"
        asideLogin.style.display = "none"
    } else if ( tokenLS !== "true" ) {
        main.style.display = "none"
        asideLogin.style.display = "flex"
    }
}

preferenciaDeUsuario()

logOut.onclick = () => {
    localStorage.removeItem("user")
    location.reload() 
}



newNote.onclick = () => {
    formNewNote.style.display = "flex"
}

cerrarFormNewNote.onclick = () => {
    formNewNote.style.display = "none"
}

const notasAlLocalStorage = (array) => {
    const arrayConvertidoAJSON = JSON.stringify(array)
    localStorage.setItem("notas", arrayConvertidoAJSON)
}

const valorDelLocalStorage = (clave) => {
    const valorDelLs = localStorage.getItem(clave)
    const parsearValor = JSON.parse(valorDelLs)
    return parsearValor
}


const pushearObjetos = (fecha, nota, array) => array.push({
    fechaDeLaNota: fecha,
    descripcion: nota
})

const notasAlHtml = (array) => {

    const arrayReducido = array.reduce((acc, curr) => {
        const fecha = new Date(curr.fechaDeLaNota)

        return acc + `
            <article class="notita">
                <h2>
                    ${fecha.toLocaleDateString()}
                </h2>
                <p>
                    ${curr.descripcion}
                </p>
            </article>
        `
    },"")

    return arrayReducido
}

formNewNote.onsubmit = (e) => {
    e.preventDefault()
    pushearObjetos(inputFechaNewNote.value, inputTextNewNote.value, notas)
    notasAlLocalStorage(notas)
    formNewNote.reset()
    formNewNote.style.display = "none"
    containerNotes.innerHTML = notasAlHtml(notas)
}

let notasTraidasDelLocalStorage = valorDelLocalStorage("notas")
notas = notasTraidasDelLocalStorage
 