// import { ponerPrecio, precio } from "./cesta.js";
import myJson from '../jsonFiles/coffee.json' assert {type: 'json'};
// let flechas = [];
// flechas = document.getElementsByClassName("flechaFaq");
if (document.title == "Café de altura") {
    let precio = 0;
    let nombre = "";
    let source = "";
    let adds = 0;
    // let cantidad = 0;

    //#region Bolsas de café
    let coffeePLace = document.getElementById("coffeePlace");
    for (let i = 0; i < 4; i++) {
        let coffeeArticle = coffeePLace.appendChild(document.createElement("article"));
        //Imagen
        let coffeeImg = coffeeArticle.appendChild(document.createElement("img"));
        coffeeImg.src = myJson[i].img_url;
        //Nombre
        let coffeDiv = coffeeArticle.appendChild(document.createElement("div"));
        let coffeName = coffeDiv.appendChild(document.createElement("input"));
        coffeName.type = "button";
        coffeName.value = myJson[i].brand;
        //Precio
        let coffePrice = coffeDiv.appendChild(document.createElement("p"));
        coffePrice.innerText = `${myJson[i].price} €`;
        //Botón
        let coffeButton = coffeeArticle.appendChild(document.createElement("input"));
        coffeButton.type = "button";
        coffeButton.classList = "masProducto";
        coffeButton.value = "Añadir";
    }

    //#endregion

    localStorage.clear();

    //#region Prueba para primera vez en la página
    // if (!localTime) {
    //     localStorage.setItem("time",JSON.stringify({"num": 0}));
    // }
    // let localTime = JSON.parse(localStorage.getItem("time"));
    // if (Object.values(localTime)[0] == 0) {
    //     localStorage.clear();
    //     localStorage.setItem("time",JSON.stringify({"num": 1}));
    // }
    //#endregion
    
    //#region Añadir eventos

    function añadir() {
        if (adds < 4) {
            adds += 1;
            precio = this.previousSibling.children[1].textContent;
            nombre = this.previousSibling.children[0].value;
            source = this.previousSibling.previousSibling.src;
            localStorage.setItem(`precio${adds}`,JSON.stringify({"name":nombre, "price":precio,"src":source}));
            localStorage.setItem("cantidad",JSON.stringify({"num": adds}))
        }
    }
    function occult(i) {
        let p1 = document.getElementsByClassName("FAQtext")[0];
        let p2 = document.getElementsByClassName("FAQtext")[1];
        let p3 = document.getElementsByClassName("FAQtext")[2];
        let srcUp = "assets/img/flechitaArriba.svg";
        let srcDown = "assets/img/flechitaAbajo.svg";
    
        switch (i.target.id) {
            case "flecha1":
                if (p1.classList.contains('current-item')) {
                    
                    for (var e=0; e<1; e++) {
                        
                        p1.classList.remove('current-item');
                    } 
                    console.log(p1.classList);
                } else {
                    
                    p1.classList.add('current-item');
                    console.log(p1.classList);
                }
                // if(p1.hidden==true){
                //     // p1.hidden=false;
                //     this.src=srcUp;
                // } else{
                //     // p1.hidden=true;
                //     this.src=srcDown;
                // }
                break;
            case "flecha2":
                if(p2.hidden==true){
                    p2.hidden=false;
                    this.src=srcUp;
                } else{
                    p2.hidden=true;
                    this.src=srcDown;
                }
                break;
            case "flecha3":
                if(p3.hidden==true){
                    p3.hidden=false;
                    this.src=srcUp;
                } else{
                    p3.hidden=true;
                    this.src=srcDown;
                }
                break;
            default:
                break;
        }
    }
    for (let i = 0; i < document.getElementsByClassName("flechaFaq").length; i++) {
        document.getElementsByClassName("flechaFaq")[i].addEventListener("click",occult);
    }
    for (let i = 0; i < document.getElementsByClassName("masProducto").length; i++) {
        document.getElementsByClassName("masProducto")[i].addEventListener("click",añadir);
    }
    // document.getElementsByClassName("FAQtext")[0].hidden = true;
    document.getElementsByClassName("FAQtext")[1].hidden = true;
    document.getElementsByClassName("FAQtext")[2].hidden = true;
    //#endregion

    //#region Formulario
    const userName = document.getElementById("username");
    const userMail = document.getElementById("email");
    const userTlf = document.getElementById("tlf");
    const userOpinion = document.getElementById("opinion");
    const userPrivacityTerms = document.getElementById("politicas");
    const submitForm = document.getElementById("submit");
    
    submitForm.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isTlfValid = checkUserTlf();

        let isFormValid = isUsernameValid &&
            isEmailValid &&
            isTlfValid;

        console.log(isFormValid);
        // submit to the server if the form is valid
        if (isFormValid) {
            localStorage.setItem("Usuario",JSON.stringify({"name":userName.value,"email":userMail.value,"Telephone":userTlf.value}))
        }
    });

    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    const isRequired = value => value === '' ? false : true;

    function isEmailValid (email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    function checkUsername() {

        let valid = false;
        const min = 3,
            max = 25;
        const username = userName.value.trim();
    
        if (!isRequired(username)) {
            alert(`${userName.value}. El nombre de usuario no puede estar en blanco`);
        } else if (!isBetween(username.length, min, max)) {
            alert(`${userName.value}. Debe tener una longitud de entre ${min} y ${max} letras.`)
        } else {
            // showSuccess(userName);
            valid = true;
        }
        return valid;
    }

    function checkUserTlf() {

        let valid = false;
        const min = 9,
            max = 9;
        const userTelephone = userTlf.value.trim();
    
        if (!isRequired(userTelephone)) {
            alert(`${userTlf.value}. El numero de teléfono no puede estar en blanco`);
        } else if (!isBetween(userTelephone.length, min, max)) {
            alert(`${userTlf.value}. Debe tener una longitud de ${min} números.`)
        } else {
            // showSuccess(userTlf);
            valid = true;
        }
        return valid;
    }

    function checkEmail() {

        let valid = false;
        const email = userMail.value.trim();

        if (!isRequired(email)) {
            alert(`${userMail.value}. El email no puede estar en blanco.`);
        } else if (!isEmailValid(email)) {
            alert(`${userMail.value}. Este email no es valido.`)
        } else {
            // showSuccess(userMail);
            valid = true;
        }
        return valid;
    }

    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');
    
        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;
    
        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');
    
        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }
    //#endregion
}
else if (document.title == "Cesta") {
    let zonaProducto = document.getElementsByClassName("zonaProducto")[0];
    //#region Variables de prueba
    // let precioProducto = document.getElementsByClassName("precioProducto")[0];
    // let imgProducto = document.getElementsByClassName("imgProducto")[0];
    // let infoProducto = document.getElementsByClassName("infoProducto")[0];
    //#endregion
    let cantidad = 0;
    
    if(JSON.parse(localStorage.getItem("cantidad"))) {
        let cuantity = JSON.parse(localStorage.getItem("cantidad"));
        
        for (let i = 1; i <= Object.values(cuantity)[0]; i++) {
            let obj = JSON.parse(localStorage.getItem(`precio${i}`));
            //#region CreaElementos
            let article = zonaProducto.appendChild(document.createElement("article"));
            article.setAttribute("class","producto");
            let selecCantidad = article.appendChild(document.createElement("div"));
            selecCantidad.setAttribute("class","cantidad");
            
            //Seccion sumar y restar cantidad
            let divMinus = selecCantidad.appendChild(document.createElement("div"));
            let divCatidad = selecCantidad.appendChild(document.createElement("section"));
            let divPlus = selecCantidad.appendChild(document.createElement("div"));
            
            let imgDivMinus = divMinus.appendChild(document.createElement("img"));
            imgDivMinus.src = "../img/logo-.svg";
            divMinus.addEventListener("click",()=>{let cantidad = parseInt(cantidadProducto.textContent);console.log(cantidad);(cantidad>1)?cantidad -=1 : cantidad;cantidadProducto.innerText = cantidad.toString()});
            
            let cantidadProducto = divCatidad.appendChild(document.createElement("p"));
            cantidadProducto.setAttribute("class","cantidadProducto");
            cantidadProducto.innerText = 1;
            
            let imgDivPlus = divPlus.appendChild(document.createElement("img"));
            imgDivPlus.src = "../img/logo+.svg";
            divPlus.addEventListener("click",()=>{let cantidad = parseInt(cantidadProducto.textContent) ;cantidad+=1; cantidadProducto.innerText = cantidad.toString()});
            
            //Imagen producto
            let newImgProduct = article.appendChild(document.createElement("img"));
            newImgProduct.src = Object.values(obj)[2];
            newImgProduct.setAttribute("class","imgProducto");
            
            //Info imagen producto
            let infoImgProduct = article.appendChild(document.createElement("div"));
            infoImgProduct.setAttribute("class","infoProducto");
            let nameProduct = infoImgProduct.appendChild(document.createElement("p"));
            nameProduct.appendChild(document.createElement("strong")).innerText = Object.values(obj)[0];
            infoImgProduct.appendChild(document.createElement("p")).innerText = "Paquete de café, 250 gr";
            //Precio del producto
            let priceProduct = article.appendChild(document.createElement("h3"));
            priceProduct.setAttribute("class","precioProducto");
            priceProduct.innerText = Object.values(obj)[1];
            
            // let separador = article.appendChild(document.createElement("div"));
            // separador.setAttribute("class","separador");
            // separador.style.width = 3+"rem";
 
            //#endregion
            
            let subTotalPrice = document.getElementById("subtotal");
            let totalPrice = document.getElementById("total");
            
            cantidad = parseInt(Object.values(obj)[1]);
            subTotalPrice.innerText = `${parseInt(subTotalPrice.textContent) + cantidad},00€`;

            totalPrice.innerText = `${parseInt(subTotalPrice.textContent)},00€`
        }

        //#region Prueba del articulo
        // precioProducto.innerText = Object.values(object)[1];
        // imgProducto.src = Object.values(object)[2];
        // infoProducto.getElementsByTagName("p")[0].innerText = Object.values(object)[0];
        // console.log(JSON.parse(localStorage.getItem("precio")));
        //#endregion
    }
}