/////moños en la cabeza
let ribbonRojoHead = document.getElementById("sinUsar-ribbon-rojo")
let ribbonAquaHead = document.getElementById("sinUsar-ribbon-aqua")
let ribbonAzulHead = document.getElementById("sinUsar-ribbon-azul")
let ribbonVioletaHead = document.getElementById("sinUsar-ribbon-violeta")
let ribbonNaranjaHead = document.getElementById("sinUsar-ribbon-naranja")
let ribbonGoldHead = document.getElementById("sinUsar-ribbon-gold")

/////moños botones
let ribbonRojoBoton = document.getElementById("ribbon")
let ribbonAquaBoton = document.getElementById("ribbon-aqua")
let ribbonAzulBoton = document.getElementById("ribbon-azul")
let ribbonVioletaBoton = document.getElementById("ribbon-violeta")
let ribbonNaranjaBoton = document.getElementById("ribbon-naranja")
let ribbonGoldBoton = document.getElementById("ribbon-gold")

/////precios ribbon
let priceText = document.getElementById("valor-ribbon")

// INTENTO DE ARRAY let ribbonHead = [ribbonRojoHead, ribbonAquaHead, ribbonAzulHead, ribbonVioletaHead, ribbonNaranjaHead, ribbonGoldHead]

let compradoR1, compradoR2, compradoR3, compradoR4, compradoR5, compradoR6 = false

////////////////////////////


//BACK KEY
document.getElementById("back-ribbon").onclick = function(){
    document.getElementById("inside-ropa").style.display = "flex";
    document.getElementById("inside-ribbon").style.display = "none";
    document.getElementById("back-ribbon").style.display = "none";
    document.getElementById("back-ropa").style.display = "flex";
    //document.getElementById("inside-ropa").classList.remove("slide-in-bottom")
}
//NONE
document.getElementById("none-ribbon").onclick = function(){
    ribbonRojoHead.style.display = "none";
    ribbonAquaHead.style.display = "none";
    ribbonAzulHead.style.display = "none";
    ribbonVioletaHead.style.display = "none";
    ribbonNaranjaHead.style.display = "none";
    ribbonGoldHead.style.display = "none";
}
//RIBBON ROJO
ribbonRojoBoton.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 10
    priceText.textContent = price

    if(compradoR1 === true){
        ribbonRojoHead .style.display = "flex";
        ribbonAquaHead.style.display = "none";
        ribbonAzulHead.style.display = "none";
        ribbonVioletaHead.style.display = "none";
        ribbonNaranjaHead.style.display = "none";
        ribbonGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoR1 = true

            ribbonRojoHead.style.display = "flex";
            ribbonAquaHead.style.display = "none";
            ribbonAzulHead.style.display = "none";
            ribbonVioletaHead.style.display = "none";
            ribbonNaranjaHead.style.display = "none";
            ribbonGoldHead.style.display = "none";
            
            moneyActual -=  price
            moneyActualEl.textContent = moneyActual //"Money: " + moneyActual
            document.getElementById("comprar-popup").style.display = "none";
           
            ribbonRojoBoton.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
    document.getElementById("btn-no").onclick = function(){
        popUp.style.display = 'none'
    }
}
//RIBBON AQUA 
ribbonAquaBoton.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'

    price = 10
    priceText.textContent = price
    
    if(compradoR2 === true){
        ribbonRojoHead .style.display = "none";
        ribbonAquaHead.style.display = "flex";
        ribbonAzulHead.style.display = "none";
        ribbonVioletaHead.style.display = "none";
        ribbonNaranjaHead.style.display = "none";
        ribbonGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
        compradoR2 = true

        ribbonRojoHead.style.display = "none";
        ribbonAquaHead.style.display = "flex";
        ribbonAzulHead.style.display = "none";
        ribbonVioletaHead.style.display = "none";
        ribbonNaranjaHead.style.display = "none";
        ribbonGoldHead.style.display = "none";

        moneyActual -=  price
        moneyActualEl.textContent = moneyActual //"Money: " + moneyActual
        document.getElementById("comprar-popup").style.display = "none";

        ribbonAquaBoton.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
}
//RIBBON AZUL
ribbonAzulBoton.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 20
    priceText.textContent = price
    if(compradoR3 === true){
        ribbonRojoHead .style.display = "none";
        ribbonAquaHead.style.display = "none";
        ribbonAzulHead.style.display = "flex";
        ribbonVioletaHead.style.display = "none";
        ribbonNaranjaHead.style.display = "none";
        ribbonGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoR3 = true

            ribbonRojoHead.style.display = "none";
            ribbonAquaHead.style.display = "none";
            ribbonAzulHead.style.display = "flex";
            ribbonVioletaHead.style.display = "none";
            ribbonNaranjaHead.style.display = "none";
            ribbonGoldHead.style.display = "none";

            moneyActual -=  price
            moneyActualEl.textContent = moneyActual //"Money: " + moneyActual
            document.getElementById("comprar-popup").style.display = "none";

            ribbonAzulBoton.className = "comprado"
            } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
    }
    }
}
//RIBBON VIOLETA
ribbonVioletaBoton.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 20
    priceText.textContent = price
    if(compradoR4 === true){
        ribbonRojoHead .style.display = "none";
        ribbonAquaHead.style.display = "none";
        ribbonAzulHead.style.display = "none";
        ribbonVioletaHead.style.display = "flex";
        ribbonNaranjaHead.style.display = "none";
        ribbonGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoR4 = true

            ribbonRojoHead.style.display = "none";
            ribbonAquaHead.style.display = "none";
            ribbonAzulHead.style.display = "none";
            ribbonVioletaHead.style.display = "flex";
            ribbonNaranjaHead.style.display = "none";
            ribbonGoldHead.style.display = "none";

            moneyActual -=  price
            moneyActualEl.textContent = moneyActual //"Money: " + moneyActual
            document.getElementById("comprar-popup").style.display = "none"

            ribbonVioletaBoton.className = "comprado"
            } else {
                errorBudget.style.display = "flex"
                popUp.style.display = 'none'
        }
    }
}
//RIBBON NARANJA
ribbonNaranjaBoton.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 20
    priceText.textContent = price
    if(compradoR5 === true){
        ribbonRojoHead .style.display = "none";
        ribbonAquaHead.style.display = "none";
        ribbonAzulHead.style.display = "none";
        ribbonVioletaHead.style.display = "none";
        ribbonNaranjaHead.style.display = "flex";
        ribbonGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoR5 = true

            ribbonRojoHead.style.display = "none";
            ribbonAquaHead.style.display = "none";
            ribbonAzulHead.style.display = "none";
            ribbonVioletaHead.style.display = "none";
            ribbonNaranjaHead.style.display = "flex";
            ribbonGoldHead.style.display = "none";

            moneyActual -=  price
            moneyActualEl.textContent = moneyActual //"Money: " + moneyActual
            document.getElementById("comprar-popup").style.display = "none"

            ribbonNaranjaBoton.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
}

//RIBBON GOLD
ribbonGoldBoton.onclick = function(price, feliciPrice){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 100
    priceText.textContent = price


    if(compradoR6 === true){
        ribbonRojoHead .style.display = "none";
        ribbonAquaHead.style.display = "none";
        ribbonAzulHead.style.display = "none";
        ribbonVioletaHead.style.display = "none";
        ribbonNaranjaHead.style.display = "none";
        ribbonGoldHead.style.display = "flex";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        
        ////
        if(price <= moneyActual){
            compradoR6 = true

            ribbonRojoHead.style.display = "none";
            ribbonAquaHead.style.display = "none";
            ribbonAzulHead.style.display = "none";
            ribbonVioletaHead.style.display = "none";
            ribbonNaranjaHead.style.display = "none";
            ribbonGoldHead.style.display = "flex";

            moneyActual -=  price
            moneyActualEl.textContent = moneyActual //"Money: " + moneyActual
            document.getElementById("comprar-popup").style.display = "none"

            feliciPrice = 100
            felicidad += feliciPrice
            felicidadActualEl.textContent = felicidad //"Happiness: " + felicidad
            checkFelicidad()

            ribbonGoldBoton.className = "comprado"
        } 
        ////
        else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
            
        }
    }
}

document.getElementById("error-budget-btn").onclick = function() {
    errorBudget.style.display = "none"
    felicidad = 0
    felicidadActualEl.textContent = felicidad 
    // checkFelicidad()
    reduceFelicidad() 

}

document.getElementById("error-comprar").onclick = function() {
    menuMonedas.style.display = "block"
    errorBudget.style.display = "none"
}


//////////////////////////////////////////////////////////////////////////////////////////////
////lentes cabeza
let sunBlackHead = document.getElementById("sinUsar-sunglasses-black")
let sunAquaHead = document.getElementById("sinUsar-sunglasses-aqua")
let sunRedHead = document.getElementById("sinUsar-sunglasses-red")
let sunGoldHead = document.getElementById("sinUsar-sunglasses-gold")

////lentes botones
let sunBlackBtn = document.getElementById("sunglasses-black")
let sunAquaBtn = document.getElementById("sunglasses-aqua")
let sunRedBtn = document.getElementById("sunglasses-red")
let sunGoldBtn = document.getElementById("sunglasses-gold")


///boolean comprados

let compradoSBlack, compradoSAqua, compradoSRed, compradoSGold = false

////////////////////////////
///back key
document.getElementById("back-sun").onclick = function(){
    document.getElementById("inside-ropa").style.display = "flex";
    document.getElementById("inside-sunglasses").style.display = "none";
    document.getElementById("back-sun").style.display = "none";
    document.getElementById("back-ropa").style.display = "flex";
    //document.getElementById("inside-ropa").classList.remove("slide-in-bottom")
}

///none
document.getElementById("none-sun").onclick = function(){
    sunBlackHead.style.display = "none";
    sunAquaHead.style.display = "none";
    sunRedHead.style.display = "none";
    sunGoldHead.style.display = "none";
}

///lentes black
sunBlackBtn.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 10
    priceText.textContent = price

    if(compradoSBlack === true){
        sunBlackHead .style.display = "flex";
        sunAquaHead.style.display = "none";
        sunRedHead.style.display = "none";
        sunGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoSBlack = true

            sunBlackHead .style.display = "flex";
            sunAquaHead.style.display = "none";
            sunRedHead.style.display = "none";
            sunGoldHead.style.display = "none";
            
            moneyActual -=  price
            moneyActualEl.textContent = moneyActual
            popUp.style.display = "none";
           
            sunBlackBtn.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
    document.getElementById("btn-no").onclick = function(){
        popUp.style.display = 'none'
    }
}

///lentes aqua
sunAquaBtn.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 20
    priceText.textContent = price

    if(compradoSBlack === true){
        sunBlackHead .style.display = "none";
        sunAquaHead.style.display = "flex";
        sunRedHead.style.display = "none";
        sunGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoSAqua = true

            sunBlackHead .style.display = "none";
            sunAquaHead.style.display = "flex";
            sunRedHead.style.display = "none";
            sunGoldHead.style.display = "none";
            
            moneyActual -=  price
            moneyActualEl.textContent = moneyActual
            popUp.style.display = "none";
           
            sunAquaBtn.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
    document.getElementById("btn-no").onclick = function(){
        popUp.style.display = 'none'
    }
}

///lentes red
sunRedBtn.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 25
    priceText.textContent = price

    if(compradoSRed === true){
        sunBlackHead .style.display = "none";
        sunAquaHead.style.display = "none";
        sunRedHead.style.display = "flex";
        sunGoldHead.style.display = "none";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoSRed = true

            sunBlackHead .style.display = "none";
            sunAquaHead.style.display = "none";
            sunRedHead.style.display = "flex";
            sunGoldHead.style.display = "none";
            
            moneyActual -=  price
            moneyActualEl.textContent = moneyActual
            popUp.style.display = "none";
           
            sunRedBtn.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
    document.getElementById("btn-no").onclick = function(){
        popUp.style.display = 'none'
    }
}

/// lentes gold
sunGoldBtn.onclick = function(price){
    errorBudget.style.display = "none"
    popUp.style.display = 'none'
    price = 100
    priceText.textContent = price

    if(compradoSRed === true){
        sunBlackHead .style.display = "none";
        sunAquaHead.style.display = "none";
        sunRedHead.style.display = "none";
        sunGoldHead.style.display = "flex";

    } else {
        popUp.style.display = 'flex'
    }

    document.getElementById("btn-si").onclick = function(){
        if(price <= moneyActual){
            compradoSGold = true

            sunBlackHead .style.display = "none";
            sunAquaHead.style.display = "none";
            sunRedHead.style.display = "none";
            sunGoldHead.style.display = "flex";
            
            moneyActual -=  price
            moneyActualEl.textContent = moneyActual
            popUp.style.display = "none";
           
            sunGoldBtn.className = "comprado"
        } else {
            errorBudget.style.display = "flex"
            popUp.style.display = 'none'
        }
    }
    document.getElementById("btn-no").onclick = function(){
        popUp.style.display = 'none'
    }
}