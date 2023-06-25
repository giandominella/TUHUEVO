let moneyActualEl = document.getElementById('moneyActual')
let moneyActual = 110
moneyActualEl.textContent += moneyActual
let errorBudget = document.getElementById("error-budget")

let felicidadActualEl = document.getElementById('felicidadActual')
let felicidad = 200
felicidadActualEl.textContent += felicidad
let caraFeliz = document.getElementById('cara-feliz')
let caraTriste = document.getElementById('cara-triste')

function checkFelicidad(){
if( felicidad >= 200){
    caraFeliz.style.display = "flex"
    caraTriste.style.display = "none"
} 
if (felicidad < 200) {
    caraFeliz.style.display = "none"
    caraTriste.style.display = "flex"
}
}
checkFelicidad()

let popUp = document.getElementById("comprar-popup")
document.getElementById("herramientas-ropa").onclick = function(){
    document.getElementById("herramientas").style.display = "none";
    document.getElementById("inside-ropa").style.display = "flex";
}

document.getElementById("back-ropa").onclick = function(){
    document.getElementById("herramientas").style.display = "flex";
    document.getElementById("inside-ropa").style.display = "none";
}

document.getElementById("ribbon-button").onclick = function(){
    document.getElementById("inside-ropa").style.display = "none";
    document.getElementById("inside-ribbon").style.display = "flex";
}

document.getElementById("sunglasses-button").onclick = function(){
    document.getElementById("inside-ropa").style.display = "none";
    document.getElementById("inside-sunglasses").style.display = "flex";
}


document.getElementById("back-sun").onclick = function(){
    document.getElementById("inside-ropa").style.display = "flex";
    document.getElementById("inside-sunglasses").style.display = "none";
}

document.getElementById("none-sun").onclick = function(){
    document.getElementById("sinUsar-sunglasses-black").style.display = "none";
    document.getElementById("sinUsar-sunglasses-aqua").style.display = "none";
    document.getElementById("sinUsar-sunglasses-gold").style.display = "none";
    document.getElementById("sinUsar-sunglasses-red").style.display = "none";
}

document.getElementById("sunglasses-black").onclick = function(){
    document.getElementById("sinUsar-sunglasses-black").style.display = "flex";
    document.getElementById("sinUsar-sunglasses-aqua").style.display = "none";
    document.getElementById("sinUsar-sunglasses-gold").style.display = "none";
    document.getElementById("sinUsar-sunglasses-red").style.display = "none";
}

document.getElementById("sunglasses-aqua").onclick = function(){
    document.getElementById("sinUsar-sunglasses-black").style.display = "none";
    document.getElementById("sinUsar-sunglasses-aqua").style.display = "flex";
    document.getElementById("sinUsar-sunglasses-gold").style.display = "none";
    document.getElementById("sinUsar-sunglasses-red").style.display = "none";
}

document.getElementById("sunglasses-gold").onclick = function(){
    document.getElementById("sinUsar-sunglasses-black").style.display = "none";
    document.getElementById("sinUsar-sunglasses-aqua").style.display = "none";
    document.getElementById("sinUsar-sunglasses-gold").style.display = "flex";
    document.getElementById("sinUsar-sunglasses-red").style.display = "none";
}

document.getElementById("sunglasses-red").onclick = function(){
    document.getElementById("sinUsar-sunglasses-black").style.display = "none";
    document.getElementById("sinUsar-sunglasses-aqua").style.display = "none";
    document.getElementById("sinUsar-sunglasses-gold").style.display = "none";
    document.getElementById("sinUsar-sunglasses-red").style.display = "flex";
}

//// MENU FELICIDAD
var modal = document.getElementById("myModal");
var btn = document.getElementById("herramientas-happiness");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//// MENU MONEDAS
let menuMonedas = document.getElementById("interior-monedas")
let btnMonedas = document.getElementById("herramientas-monedas")
let cerrarMonedas = document.getElementById("cerrar-monedas")

btnMonedas.onclick = function() {
    menuMonedas.style.display = "block";
  }

  cerrarMonedas.onclick = function() {
    menuMonedas.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == menuMonedas) {
        menuMonedas.style.display = "none";
    }
}

document.getElementById("aceptar-mail").onclick = function(price){
    menuMonedas.style.display = "none"
    price = 100
    moneyActual +=  price
    moneyActualEl.textContent = "Money: " + moneyActual
    document.getElementById("email-card").style.display = "none"

}


document.getElementById("ignorar-mail").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = "Happiness: " + felicidad
    checkFelicidad()

}


/////PANTALLA INICIAL
let inputNombre = document.getElementById('name')
let btnContinuar = document.getElementById('continuar-inicio')
let nombreMascotaSpan = document.getElementById('nombreMascota')

inputNombre.addEventListener('input', function() {
    btnContinuar.disabled = inputNombre.value.trim() === ''
  });


  btnContinuar.addEventListener('click', function() {
    let disponibilidadNombre = document.getElementById('disponibilidad-nombre')
    disponibilidadNombre.textContent = 'Este nombre está disponible'
    disponibilidadNombre.classList.add('nombre-aceptado')

    let nombreMascota = inputNombre.value.trim();
    nombreMascotaSpan.textContent = nombreMascota

    setTimeout(function(){
        document.getElementById('pantalla-fecha').style.display='flex'
        document.getElementById('pantalla-inicio').style.display='none'
    }, 1000)
  });

  let inputFechaNacimiento = document.getElementById('fecha-nacimiento');
  let btnFecha = document.getElementById('continuar-fecha');
  inputFechaNacimiento.addEventListener('input', function() {
    btnFecha.disabled = inputFechaNacimiento.value === '';
  });

  btnFecha.addEventListener('click', function() {
    
    let fechaNacimiento = inputFechaNacimiento.value;
    price = 500
    moneyActual =+ price
    console.log(moneyActual)
    moneyActualEl.textContent = "Money: " + moneyActual

    setTimeout(function(){
       document.getElementById('todo').style.display='flex'
       document.getElementById('gracias').style.display='flex'
       document.getElementById('pantalla-fecha').style.display='none'

    }, 500)

    setTimeout(function(){
       
        document.getElementById('gracias').style.display='none'
        
 
     }, 4000)
  });