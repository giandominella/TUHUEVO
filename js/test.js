let moneyActualEl = document.getElementById('moneyActual')
let moneyActual = 110
moneyActualEl.textContent += moneyActual
let errorBudget = document.getElementById("error-budget")

let felicidadActualEl = document.getElementById('felicidadActual')
let felicidad = 200
felicidadActualEl.textContent += felicidad
let caraFeliz = document.getElementById('cara-feliz')
let caraMeh = document.getElementById('cara-meh')
let caraTriste = document.getElementById('cara-triste')
console.log(felicidad)
function checkFelicidad(){
    if( felicidad >= 200){
        caraFeliz.style.display = "flex"
        caraTriste.style.display = "none"
        caraMeh.style.display = "none"
    } 
    if (felicidad < 200) {
        caraFeliz.style.display = "none"
        caraMeh.style.display = "flex"
        caraTriste.style.display = "none"
    }
    if(felicidad < 150) {
        caraFeliz.style.display = "none"
        caraMeh.style.display = "none"
        caraTriste.style.display = "flex"
    }
}
checkFelicidad()

function reduceFelicidad(){
    checkFelicidad() /// si todo se rompe, se saca esto
    let eggyFeatures = document.getElementById("eggy-features")
    let eggyHats = document.getElementById("eggy-hats")
    let eggyEyes =  document.getElementById("eggy-eyes")

    eggyFeatures.classList.add("wobble-hor-bottom")
    eggyHats.classList.add("wobble-hor-bottom")
    eggyEyes.classList.add("wobble-hor-bottom")

    setTimeout(function(){
        eggyFeatures.classList.remove('wobble-hor-bottom')
        eggyHats.classList.remove('wobble-hor-bottom')
        eggyEyes.classList.remove('wobble-hor-bottom')
 
     }, 1000)
}

let popUp = document.getElementById("comprar-popup")

document.getElementById("herramientas-ropa").onclick = function(){
    document.getElementById("herramientas").style.display = "none";
    document.getElementById("inside-ropa").style.display = "flex";
    document.getElementById("inside-ropa").classList.add("slide-in-bottom")
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

//// MENU FELICIDAD
let modal = document.getElementById("myModal");
let btn = document.getElementById("herramientas-happiness");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    //modal.style.display = "block";
    feliciPrice = 1
    felicidad += feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    reduceFelicidad()
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
let notifEl = document.getElementById("money-notif")

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


function cuantoGanaste(price) {
    let cuantasGanasteEl = document.getElementById("cuanto-gano")
    notifEl.style.display = 'flex'

    moneyActual +=  price
    moneyActualEl.textContent = moneyActual //"Money: " + moneyActual

    cuantasGanasteEl.textContent = "¡Ganaste " + price + " monedas!"

    setTimeout(function(){
        notifEl.classList.add('animate__fadeOut')
 
     }, 4000)
    
}


//// monedas-email
document.getElementById("aceptar-email").onclick = function(price){
    menuMonedas.style.display = "none"
    price = 100
    cuantoGanaste(price)
    document.getElementById("email-card").style.display = "none"
}


document.getElementById("ignorar-email").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("email-card").style.display = "none"
    reduceFelicidad()
 
}
//// monedas-twitter
document.getElementById("aceptar-twitter").onclick = function(price){
    menuMonedas.style.display = "none"
    price = 50
    cuantoGanaste(price)
    document.getElementById("twitter-card").style.display = "none"

}

document.getElementById("ignorar-twitter").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("twitter-card").style.display = "none"
    reduceFelicidad()

}
//// monedas-credit
document.getElementById("aceptar-credit").onclick = function(price){
    menuMonedas.style.display = "none"
    document.getElementById("credit-card").style.display = "none"
    document.getElementById("credit-pay").style.display = "flex"
}

document.getElementById("ignorar-credit").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    reduceFelicidad()
    //document.getElementById("credit-card").style.display = "none"

}
//ACEPTAR PAY
let btnAceptarPay = document.getElementById("aceptar-pay")
let inputTarjeta = document.getElementById("ccnum")
let inputCodigo = document.getElementById("cvv")
let tarjetaLabel = document.getElementById("tarjetaLabel")
let codigoLabel = document.getElementById("codigoLabel")
let cerrarCredit = document.getElementById("cerrar-credit")

inputTarjeta.addEventListener('input', function() {
    btnAceptarPay.disabled = inputTarjeta.value.trim() === ''
    tarjetaLabel.classList.add('required')

    /*if(btnAceptarPay.disabled = inputTarjeta.value.trim() != ''){
        tarjetaLabel.classList.remove('required')
        tarjetaLabel.classList.add('nombre-aceptado')
    }*/

  });

inputCodigo.addEventListener('input', function() {
    btnAceptarPay.disabled = inputCodigo.value.trim() === ''
    codigoLabel.classList.add('required')

   /* if(btnAceptarPay.disabled = inputCodigo.value.trim() != ''){
        codigoLabel.classList.remove('required')
        codigoLabel.classList.add('nombre-aceptado')
    }*/

  });

btnAceptarPay.addEventListener('click', function(price, feliciPrice){    
    menuMonedas.style.display = "none"
    price = 1000
    cuantoGanaste(price)

    feliciPrice = 200
    felicidad += feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()

    document.getElementById("credit-pay").style.display = "none"
  });


document.getElementById("ignorar-pay").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 400
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("credit-pay").style.display = "none"
    reduceFelicidad()
}

cerrarCredit.onclick = function() {
    menuMonedas.style.display = "flex"
    document.getElementById("credit-pay").style.display = "none"
    reduceFelicidad() ///NO ESTOY SEGURO SI ESTE DEBERIA IR ACA PERO YA FUE
  }

//// monedas-mic

let btnMic = document.getElementById("aceptar-mic")



btnMic.addEventListener('click', function() {
  //alert('Se solicitará acceso al micrófono.');

  // Solicitar acceso al micrófono
  try {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream, price) {
        // Acceso al micrófono otorgado
        console.log('Acceso al micrófono otorgado.');
        price = 700
        cuantoGanaste(price)

        // Detener el acceso al micrófono después de un tiempo
        setTimeout(function() {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          console.log('Acceso al micrófono detenido.');
        }, 5000);
      })
      .catch(function(error, feliciPrice) {
        console.error('Error al acceder al micrófono:', error);
        feliciPrice = 150
        felicidad -= feliciPrice
        felicidadActualEl.textContent = felicidad
        checkFelicidad()
        reduceFelicidad()
        menuMonedas.style.display = "none"

        if ('vibrate' in navigator) {
            // Hacer que el dispositivo vibre durante 1000 ms (1 segundo)
            navigator.vibrate(1000);
            console.log('vibración.');
          } else {
            console.log('El navegador no admite la vibración.');
          }


      });
  } catch (error) {
        feliciPrice = 150
        felicidad -= feliciPrice
        felicidadActualEl.textContent = felicidad
        checkFelicidad()
        reduceFelicidad()
        menuMonedas.style.display = "none"

        if ('vibrate' in navigator) {

            navigator.vibrate(1000);
            console.log('vibración.');
          } else {
            console.log('El navegador no admite la vibración.');
          }
  }
});

document.getElementById("ignorar-mic").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    reduceFelicidad()
}
/*
document.getElementById("aceptar-mic").onclick = function(price){
    menuMonedas.style.display = "none"
    document.getElementById("mic-card").style.display = "none"
    document.getElementById("mic-popup").style.display = "flex"
}

document.getElementById("ignorar-mic").onclick = function(feliciPrice){
    menuMonedas.style.display = "none"
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    reduceFelicidad()
}

document.getElementById("btn-si-mic").onclick = function(price){
    price = 500
    cuantoGanaste(price)
    document.getElementById("mic-popup").style.display = 'none'
}

document.getElementById("btn-no-mic").onclick = function(feliciPrice){
    feliciPrice = 100
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
    checkFelicidad()
    document.getElementById("mic-popup").style.display = 'none'
    reduceFelicidad()
}*/

/////
let nombreSuperior = document.getElementById("nombre-superior")


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
    nombreSuperior.textContent = nombreMascota

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
    moneyActualEl.textContent = moneyActual //"Money: " + moneyActual

    setTimeout(function(){
       document.getElementById('todo').style.display='flex'
       document.getElementById('gracias').style.display='flex'
       document.getElementById('pantalla-fecha').style.display='none'

    }, 500)

    setTimeout(function(){
       
        document.getElementById('gracias').style.display='none'
        
 
     }, 9000)
  });

///// MENU FOTOS

let menuFotos = document.getElementById("interior-fotos")
let btnFotos = document.getElementById("herramientas-fotos")
let cerrarFotos = document.getElementById("cerrar-fotos")

btnFotos.onclick = function() {
    menuFotos.style.display = "block";
  }

  cerrarFotos.onclick = function() {
    menuFotos.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == menuFotos) {
        menuFotos.style.display = "none";
    }
}

document.getElementById("perfil-huevo-card").onclick = function(){
    document.getElementById("dni").style.display = "flex"
    document.getElementById('todo').style.display='none'
}

document.getElementById("back-dni").onclick = function(feliciPrice){
    document.getElementById("todo").style.display = "flex"
    document.getElementById('dni').style.display='none'
    menuFotos.style.display = "none"
    feliciPrice = 50
    felicidad -= feliciPrice
    felicidadActualEl.textContent = felicidad
    checkFelicidad()
    reduceFelicidad()
}

