// import { ponerPrecio, precio } from "./cesta.js";
import myJson from '../jsonFiles/coffee.json' assert {type: 'json'};
// let flechas = [];
// flechas = document.getElementsByClassName("flechaFaq");
if (document.title == "Café de altura") {
    let bolsitas = document.getElementsByClassName("masProducto");
    let precio = 0;
    let nombre = "";
    let source = "";
    let adds = 0;
    let cantidad1 = 0;
    let cantidad2 = 0;
    let cantidad3 = 0;
    let cantidad4 = 0;

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

    // localStorage.clear();

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


    function añadir() { //Añadir los productos cuando clickes el boton
        let numCarrito = document.getElementById("cuentaProductos");
        localStorage.setItem("bolsitas", bolsitas.length);
        adds += 1;
        numCarrito.innerText = adds;
        localStorage.setItem("numCarrito", numCarrito.textContent);
        precio = this.previousSibling.children[1].textContent;
        nombre = this.previousSibling.children[0].value;
        source = this.previousSibling.previousSibling.src;
        for (let i = 0; i < myJson.length; i++) {
            if (myJson[i].brand == nombre) {
                switch (myJson[i].brand) {
                    case "Costa Rica Tarrazú":
                        cantidad1++;
                        localStorage.setItem(`precio1`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad1 }));
                        // localStorage.setItem("cantidad",JSON.stringify({"num": adds}))
                        break;
                    case "Colombia Los Naranjos":
                        cantidad2++;
                        localStorage.setItem(`precio2`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad2 }));
                        // localStorage.setItem("cantidad",JSON.stringify({"num": adds}))
                        break;
                    case "Laos Amanecer":
                        cantidad3++;
                        localStorage.setItem(`precio3`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad3 }));
                        // localStorage.setItem("cantidad",JSON.stringify({"num": adds}))
                        break;
                    case "Etiopía Yrgacheff":
                        cantidad4++;
                        localStorage.setItem(`precio4`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad4 }));
                        // localStorage.setItem("cantidad",JSON.stringify({"num": adds}))
                        break;
                    default:
                        break;
                }
            }
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

                    for (var e = 0; e < 1; e++) {
                        this.src = srcDown;
                        p1.classList.remove('current-item');
                    }
                } else {
                    this.src = srcUp;
                    p1.classList.add('current-item');
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
                if (p2.classList.contains('current-item')) {

                    for (var e = 0; e < 1; e++) {
                        this.src = srcDown;
                        p2.classList.remove('current-item');
                    }
                } else {
                    this.src = srcUp;
                    p2.classList.add('current-item');
                }
                break;
            case "flecha3":
                if (p3.classList.contains('current-item')) {

                    for (var e = 0; e < 1; e++) {
                        this.src = srcDown;
                        p3.classList.remove('current-item');
                    }
                } else {
                    this.src = srcUp;
                    p3.classList.add('current-item');
                }
                break;
            default:
                break;
        }
    }

    for (let i = 0; i < document.getElementsByClassName("flechaFaq").length; i++) {
        document.getElementsByClassName("flechaFaq")[i].addEventListener("click", occult);
    }

    for (let i = 0; i < document.getElementsByClassName("masProducto").length; i++) {
        document.getElementsByClassName("masProducto")[i].addEventListener("click", añadir);
    }
    //#endregion

    //#region Formulario
    const userName = document.getElementById("username");
    const userMail = document.getElementById("email");
    const userTlf = document.getElementById("tlf");
    const userOpinion = document.getElementById("opinion");
    const userPolitics = document.getElementById("politicas");
    const submitForm = document.getElementById("submit");

    submitForm.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        let isUsernameValid = checkUsername(),
            isEmailValid = checkEmail(),
            isTlfValid = checkUserTlf(),
            isOpinionValid = checkUserOpinion(),
            isPolitics = checkPolitics();

        let isFormValid = isUsernameValid &&
            isEmailValid &&
            isTlfValid &&
            isOpinionValid &&
            isPolitics;

        console.log(isFormValid);
        // submit to the server if the form is valid
        if (isFormValid) {
            localStorage.setItem("Usuario", JSON.stringify({ "name": userName.value, "email": userMail.value, "Telephone": userTlf.value, "opinion": userOpinion.value }))
        }
    });

    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    const isRequired = value => value === '' ? false : true;

    function isEmailValid(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    function checkUsername() {

        let valid = false;
        const min = 3,
            max = 20;
        const username = userName.value.trim();

        if (!isRequired(username)) {
            showError(userName, `El nombre de usuario no puede estar en blanco`);
        } else if (!isBetween(username.length, min, max)) {
            showError(userName, `Debe tener una longitud de entre ${min} y ${max} letras.`)
        } else {
            if (/(.*[a-zA-Z]{3,20}$)/gm.test(userName.value)) {
                showSuccess(userName);
                valid = true;
            }
            else {
                showError(userName, `Tu nombre no puede contener números.`)
            }
        }
        return valid;
    }

    function checkUserOpinion() {

        let valid = false;
        const min = 3;
        const userOp = userOpinion.value.trim();

        if (!isRequired(userOp)) {
            showError(userOpinion, `Necesitamos saber en que podemos ayudarte.`);
        } else if (!isBetween(userOp.length, min)) {
            showError(userOpinion, `Debe tener una longitud mínima de ${min} caracteres.`)
        } else {
            if (/(.*[a-zA-Z0-9]{3,}$)/gm.test(userOpinion.value)) {
                showSuccess(userOpinion);
                valid = true;
            }
            else {
                showError(userOpinion, `Tu nombre no puede contener números.`)
            }
        }
        return valid;
    }

    function checkUserTlf() {

        let valid = false;
        const min = 9,
            max = 9;
        const userTelephone = userTlf.value.trim();

        if (!isRequired(userTelephone)) {
            showError(userTlf, `El numero de teléfono no puede estar en blanco`);
        } else if (!isBetween(userTelephone.length, min, max)) {
            showError(userTlf, `Debe tener una longitud de ${min} números.`)
        } else {
            if (/\d*/.test(userTelephone.value)) {
                showSuccess(userTlf);
                valid = true;
            }
            else {
                showError(userTlf, `Solo puede contener números.`)
            }
        }
        return valid;
    }

    function checkEmail() {

        let valid = false;
        const email = userMail.value.trim();

        if (!isRequired(email)) {
            showError(userMail, `El email no puede estar en blanco.`);
        } else if (!isEmailValid(email)) {
            showError(userMail, `Este email no es valido.`)
        } else {
            showSuccess(userMail);
            valid = true;
        }
        return valid;
    }

    function checkPolitics() {
        let politics = userPolitics.classList;
        if (politics == "on") {
            return true;
        }
        else {
            return false;
        }
    }

    const showError = (input, message) => {
        // get the form-field element
        let formField = input;
        if (input.id != "tlf") {
            formField = input.parentElement;
        }
        else {
            formField = input.parentElement.parentElement;
        }
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');

        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        let formField = input;
        if (input.id != "tlf") {
            formField = input.parentElement;
        }
        else {
            formField = input.parentElement.parentElement;
        }

        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');

        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }

    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };

    submit.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'username':
                checkUsername();
                break;
            case 'email':
                checkEmail();
                break;
            case 'tlf':
                checkUserTlf();
                break;
            case 'opinion':
                checkUserOpinion();
                break;
            case 'politicas':
                e.target.classList.toggle("on");
                checkPolitics();
                break;
        }
    }));
    //#endregion
}
else if (document.title == "Tienda") {
    let precio = 0;
    let nombre = "";
    let source = "";
    let cantidad = 0;
    let adds = 0;
    let cantidad1 = 0;
    let cantidad2 = 0;
    let cantidad3 = 0;
    let cantidad4 = 0;
    let cantidad5 = 0;
    let cantidad6 = 0;
    let cantidad7 = 0;
    let cantidad8 = 0;

    localStorage.clear();

    //#region Bolsas de café
    let coffeePLace1 = document.getElementById("coffeePlace1");
    for (let i = 0; i < 4; i++) {
        let coffeeArticle = coffeePLace1.appendChild(document.createElement("article"));
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
    let coffeePLace2 = document.getElementById("coffeePlace2");
    for (let i = 4; i < 8; i++) {
        let coffeeArticle = coffeePLace2.appendChild(document.createElement("article"));
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
        if (myJson[i].brand == "Colombia La Casita") {
            coffeeArticle.classList.add("outStock")
            coffeButton.disabled = true;
        }
    }

    //#endregion

    function añadir() {
        let bolsitas = document.getElementsByClassName("masProducto");
        let numCarrito = document.getElementById("cuentaProductos");

        localStorage.setItem("bolsitas", bolsitas.length);
        adds += 1;
        numCarrito.innerText = adds;
        localStorage.setItem("numCarrito", numCarrito.textContent);
        precio = this.previousSibling.children[1].textContent;
        nombre = this.previousSibling.children[0].value;
        source = this.previousSibling.previousSibling.src;
        for (let i = 0; i < myJson.length; i++) {
            if (myJson[i].brand == nombre) {
                switch (myJson[i].brand) {
                    case "Costa Rica Tarrazú":
                        cantidad1++;
                        localStorage.setItem(`precio1`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad1 }));
                        break;
                    case "Colombia Los Naranjos":
                        cantidad2++;
                        localStorage.setItem(`precio2`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad2 }));
                        break;
                    case "Laos Amanecer":
                        cantidad3++;
                        localStorage.setItem(`precio3`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad3 }));
                        break;
                    case "Etiopía Yrgacheff":
                        cantidad4++;
                        localStorage.setItem(`precio4`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad4 }));
                        break;
                    case "Kenia Ndunduri":
                        cantidad5++;
                        localStorage.setItem(`precio5`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad5 }));
                        break;
                    case "Etiopía Sidamo":
                        cantidad6++;
                        localStorage.setItem(`precio6`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad6 }));
                        break;
                    case "Costa Rica Monte Bello":
                        cantidad7++;
                        localStorage.setItem(`precio7`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad7 }));
                        break;
                    case "Colombia La Casita":
                        cantidad8++;
                        localStorage.setItem(`precio8`, JSON.stringify({ "name": nombre, "price": precio, "src": source, "cantidad": cantidad8 }));
                        break;
                    default:
                        break;
                }
            }
        }
    }
    for (let i = 0; i < document.getElementsByClassName("masProducto").length; i++) {
        document.getElementsByClassName("masProducto")[i].addEventListener("click", añadir);
    }
}
else if (document.title == "Cesta") {
    let zonaProducto = document.getElementsByClassName("zonaProducto")[0];
    //#region Variables de prueba
    // let precioProducto = document.getElementsByClassName("precioProducto")[0];
    // let imgProducto = document.getElementsByClassName("imgProducto")[0];
    // let infoProducto = document.getElementsByClassName("infoProducto")[0];
    //#endregion
    let cantidad = 0;
    let bolsitasPrecio = localStorage.getItem("bolsitas");
    let numCarrito = document.getElementById("cuentaProductos");
    numCarrito.innerText = localStorage.getItem("numCarrito");

    if (localStorage.length > 1) {
        console.log(bolsitasPrecio);
        // let cuantity = JSON.parse(localStorage.getItem("cantidad"));
        let subTotalPrice = document.getElementById("subtotal");
        let totalPrice = document.getElementById("total");
        let sendPrice = document.getElementById("sendPrice");
        let urgentSendPrice = document.getElementById("urgentSendPrice");
        let sendTotalPrice = document.getElementById("sendTotalPrice");

        document.getElementById("send").addEventListener("click", changeSendPrice);
        document.getElementById("urgentSend").addEventListener("click", changeSendPrice);

        for (let i = 1; i <= bolsitasPrecio; i++) {
            if (localStorage.getItem(`precio${i}`)) {
                let obj = JSON.parse(localStorage.getItem(`precio${i}`));
                //#region CreaElementos
                let article = zonaProducto.appendChild(document.createElement("article"));
                article.setAttribute("class", "producto");
                article.setAttribute("id", `precio${i}`);
                let selecCantidad = article.appendChild(document.createElement("div"));
                selecCantidad.setAttribute("class", "cantidad");

                //Seccion sumar y restar cantidad
                let divMinus = selecCantidad.appendChild(document.createElement("div"));
                let divCatidad = selecCantidad.appendChild(document.createElement("section"));
                let divPlus = selecCantidad.appendChild(document.createElement("div"));

                let imgDivMinus = divMinus.appendChild(document.createElement("img"));
                imgDivMinus.src = "../img/logo-.svg";
                divMinus.addEventListener("click", restarPrecio);

                let cantidadProducto = divCatidad.appendChild(document.createElement("p"));
                cantidadProducto.setAttribute("class", "cantidadProducto");
                cantidadProducto.innerText = Object.values(obj)[3];

                let imgDivPlus = divPlus.appendChild(document.createElement("img"));
                imgDivPlus.src = "../img/logo+.svg";
                divPlus.addEventListener("click", sumarPrecio);

                //Imagen producto
                let newImgProduct = article.appendChild(document.createElement("img"));
                newImgProduct.src = Object.values(obj)[2];
                newImgProduct.setAttribute("class", "imgProducto");

                //Info imagen producto
                let infoImgProduct = article.appendChild(document.createElement("div"));
                infoImgProduct.setAttribute("class", "infoProducto");
                let nameProduct = infoImgProduct.appendChild(document.createElement("p"));
                nameProduct.appendChild(document.createElement("strong")).innerText = Object.values(obj)[0];
                infoImgProduct.appendChild(document.createElement("p")).innerText = "Paquete de café, 250 gr";
                //Precio del producto
                let priceProduct = article.appendChild(document.createElement("h3"));
                priceProduct.setAttribute("class", "precioProducto");
                priceProduct.innerText = `${parseInt(Object.values(obj)[1]) * parseInt(cantidadProducto.textContent)},00€`;

                subTotalPrice.innerText = `${parseInt(subTotalPrice.textContent) + parseInt(priceProduct.innerText)},00€`;
                // let separador = article.appendChild(document.createElement("div"));
                // separador.setAttribute("class","separador");
                // separador.style.width = 3+"rem";

                //#endregion

                totalPrice.innerText = `${parseInt(subTotalPrice.textContent)},00€`


                function restarPrecio() {
                    let cantidad = parseInt(cantidadProducto.textContent);
                    if (cantidad > 1) {
                        cantidad -= 1;
                        cantidadProducto.innerText = cantidad.toString()
                        priceProduct.innerText = `${parseInt(Object.values(obj)[1]) * parseInt(cantidadProducto.textContent)},00€`;

                        subTotalPrice.innerText = `${parseInt(subTotalPrice.textContent) - (parseInt(priceProduct.innerText) / parseInt(cantidadProducto.textContent))},00€`;
                        numCarrito.innerText -= 1;
                        localStorage.setItem("numCarrito", numCarrito.textContent);
                        putSendPrice();
                    }
                    else {
                        localStorage.removeItem(this.closest("article").id);
                        this.closest("article").remove();
                        numCarrito.innerText -= 1;
                        localStorage.setItem("numCarrito", numCarrito.textContent);
                    }
                }

                function sumarPrecio() {
                    let cantidad = parseInt(cantidadProducto.textContent);
                    cantidad += 1;
                    cantidadProducto.innerText = cantidad.toString();
                    priceProduct.innerText = `${parseInt(Object.values(obj)[1]) * parseInt(cantidadProducto.textContent)},00€`;

                    subTotalPrice.innerText = `${parseInt(subTotalPrice.textContent) + (parseInt(priceProduct.innerText) / parseInt(cantidadProducto.textContent))},00€`;
                    totalPrice.innerText = `${parseInt(subTotalPrice.textContent)},00€`;
                    putSendPrice();
                }
            }
        }

        function changeSendPrice(item) {
            switch (item.target.id) {
                case "send":
                    sendTotalPrice.innerText = sendPrice.textContent;
                    document.getElementById("urgentSend").checked = false;
                    break;
                case "urgentSend":
                    sendTotalPrice.innerText = urgentSendPrice.textContent
                    document.getElementById("send").checked = false;
                    putSendPrice();
                    break;
                default:
                    break;
            }
        }

        function putSendPrice() {
            if (sendTotalPrice.textContent == sendPrice.textContent) {
                totalPrice.innerText = `${parseInt(subTotalPrice.textContent)},00€`
            }
            else {
                totalPrice.innerText = `${parseInt(subTotalPrice.textContent) + parseInt(sendTotalPrice.textContent)},00€`
            }
        }

        //#region Prueba del articulo
        // precioProducto.innerText = Object.values(object)[1];
        // imgProducto.src = Object.values(object)[2];
        // infoProducto.getElementsByTagName("p")[0].innerText = Object.values(object)[0];
        // console.log(JSON.parse(localStorage.getItem("precio")));
        //#endregion
    }
}