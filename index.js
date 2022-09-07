const gritar = (str) => {
    return str.toUpperCase()
}

const exclamarGritando = (funcion) => {
    return `¡¡¡${funcion}!!!`
}

const SaludoRandom = () => {
	var vNumero = Math.round(Math.random() * 1000);
    
	const urlPersonajes = "https://rickandmortyapi.com/api/character"

    fetch(urlPersonajes)
    .then( (res) => res.json())
    .then( (data) => {
        
		var Nombre = data.results[Math.round(Math.random() * 20)].name
		
		if(vNumero%2==0){
			swal(exclamarGritando(gritar("Bienvenido a Huracan " + Nombre)))
		}else{
			swal("Bienvenido a Huracan " + Nombre)
		}
		
    })
}

SaludoRandom()

const fecha = new Date(2015, 4, 29, 20, 30)

document.getElementById("FechaHora").innerHTML = fecha.toLocaleDateString()


 const formularioNombre = document.querySelector("#formularioNombre")

 formularioNombre.onsubmit = (e) => {
     e.preventDefault()
     swal({
         title: "Se ha enviado exitosamente",
         text: "Haz click en continuar",
         icon: "success",
         button: "Continuar"
     })
 }

const clientes=  [
    {
        nombre : "Franco" ,
        edad : 30
    } ,
    {
        nombre : "Hezze" ,
        edad : 18
    } ,
    {
        nombre : "Fattori" ,
        edad : 27
    } ,
    {
        nombre : "Merolla" ,
        edad : 30
    } ,
    {
        nombre : "Gauto" ,
        edad : 20
    } ,
    {
        nombre : "Cabral" ,
        edad : 22
    } ,
]

const  personita  =  {
    nombre : "Chaves" ,
    edad : 27
}

clientes.push(personita)

const chequearSiEsLegal = (nombreDelUsuario, edadDelUsuario, edadDeLegalidad) => {
    if( edadDelUsuario >= edadDeLegalidad ){
        return nombreDelUsuario + " es mayor de edad con " + edadDelUsuario + " años"
    } 
    else {
        return nombreDelUsuario + " es menor de edad con " + edadDelUsuario + " años"
    }
} 

console.log(clientes.length)

for(let i=0; i < clientes.length; i++) {
    document.getElementById("flor").innerHTML = document.getElementById("flor").innerHTML + chequearSiEsLegal(clientes[i].nombre,clientes[i].edad,18) + "<br>"
}


const botonGeneradorDeNotis = document.querySelector("#noti-generator")


botonGeneradorDeNotis.onclick = () => {
    Toastify({
        text: "Aguante Huracan",
        close: true,
        duration: 6000
    }).showToast()
}




