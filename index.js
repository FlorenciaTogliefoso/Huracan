/*const argumentos=(argumento1, argumento2)=>{
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


const  edad  =  20
let  otraEdad  =  edad
otraEdad  =  27



const  carteraDeClientes  =  [ ]

carteraDeClientes.push ( "Azucena" )

const  personita  =  {
    nombre : "Tomás" ,
    edad : 20
}

console.log ( carteraDeClientes )
carteraDeClientes.push( personita )
console.log ( carteraDeClientes )

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
 */
 console.log ("librerias")

 swal("sweet alert")

 swal("Gracias por visitar esta pagina", "da click para continuar")

 swal("Gracias por visitar esta pagina", "da click para continuar", "success")

 const formularioNombre = document.querySelector("#form-nombre")

 formularioNombre.onsubmit = (e) => {
     e.preventDefault()
     swal({
         title: "Se ha enviado exitosamente",
         text: "Haz click en continuar",
         icon: "success",
         button: "Continuar"
     })
 }
 /*
 swal({
    title: "De que barrio es Huracan",
    buttons: {
    frase1: "Parque Patricios",
    frase2: "Pompeya",
    frase3: "Flores"
    }
 })
*/
const botonGeneradorDeNotis = document.querySelector("#noti-generator")
console.log(botonGeneradorDeNotis)

botonGeneradorDeNotis.onclick = () => {

    Toastify({
        text: "Aguante Huracan",
        close: true,
        duration: 6000
    }).showToast()
}

const DateTime = luxon.DateTime
console.log(DateTime)


const fechaDeCumpleaños = DateTime.local(1992,4,21, 16, 10, 10, 5)
console.log(fechaDeCumpleaños)


console.log(fechaDeCumpleaños.toString())

const diaDeHoy = DateTime.now()
console.log(diaDeHoy)
console.log(diaDeHoy.toLocaleString())


const botonFechaActual = document.querySelector("#button-fecha")

botonFechaActual.onclick = () => {
 console.log(`${diaDeHoy.c.day}, ${diaDeHoy.c.month}, ${diaDeHoy.c.year}`)
 document.querySelector(".caja").innerHTML = diaDeHoy.toLocaleString()
}

const fechaPorObjeto = DateTime.fromObject (
    {
        day: 15,
        hour:13,
        month: 5,
        year: 1990
    },
    {
        zona: "Parque Patricios/Buenos_Aires",
        numberingSystem: 'beng'
    }
)

console.log(fechaPorObjeto.toString())



console.log(DateTime.fromISO("1999-10-01").toString())

const fechaDeHoy = DateTime.now ()

console.log(fechaDeHoy.year)
console.log(fechaDeHoy.month)
console.log(fechaDeHoy.day)

console.log(fechaDeCumpleaños.zoneName)


console.log(fechaDeHoy.toLocaleString(DateTime.DATE_HUGE))
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_SHORT)) 
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_FULL)) 



const sumarDiasAFechaDeHoy = fechaDeHoy.plus({
    hours: 1000000,
    year: 1000,
    second: 10000000,
})

console.log(sumarDiasAFechaDeHoy.toLocaleString(DateTime.DATE_HUGE))


const restarDiasAFechaDeHoy = fechaDeHoy.minus({
    year: 20000
})

console.log(restarDiasAFechaDeHoy.toLocaleString(DateTime.DATE_HUGE))


const Interval = luxon.Interval

const fechaAhoraYa = DateTime.now()
const fechaDiezAniosAdelante = DateTime.local(2032, 08, 08)

const intervaloEntreDosFechas = Interval.fromDateTimes(fechaAhoraYa, fechaDiezAniosAdelante)
console.log(intervaloEntreDosFechas)
console.log(intervaloEntreDosFechas.length("day"))