// import { ponerPrecio, precio } from "./cesta.js";
// let flechas = [];
// flechas = document.getElementsByClassName("flechaFaq");
if (document.title == "Café de altura") {
    let precio = 0;
    let nombre = "";
    let source = "";
    let adds = 0;
    // let cantidad = 0;
    
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

    for (let i = 0; i < document.getElementsByClassName("flechaFaq").length; i++) {
        document.getElementsByClassName("flechaFaq")[i].addEventListener("click",occult);
    }
    for (let i = 0; i < document.getElementsByClassName("masProducto").length; i++) {
        document.getElementsByClassName("masProducto")[i].addEventListener("click",añadir);
    }
    document.getElementById("text2").hidden = true;
    function occult(i) {
        let p1 = document.getElementById("text0");
        let p2 = document.getElementById("text1");
        let p3 = document.getElementById("text2");
        let srcUp ="assets/img/flechitaArriba.svg";
        let srcDown ="assets/img/flechitaAbajo.svg";
    
        switch (i.target.id) {
            case "flecha1":
                console.log(p1);
                if(p1.hidden==true){
                    p1.hidden=false;
                    this.src=srcUp;
                } else{
                    p1.hidden=true;
                    this.src=srcDown;
                }
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
    
    function añadir() {
        if (adds < 4) {
            adds += 1;
            precio = this.previousSibling.previousSibling.children[1].textContent;
            nombre = this.previousSibling.previousSibling.children[0].value;
            source = this.previousSibling.previousSibling.previousSibling.previousSibling.src;
            localStorage.setItem(`precio${adds}`,JSON.stringify({"name":nombre, "price":precio,"src":source}));
            localStorage.setItem("cantidad",JSON.stringify({"num": adds}))
        }
    }
}
else if (document.title == "Cesta") {
    let zonaProducto = document.getElementsByClassName("zonaProducto")[0];
    //#region Variables de prueba
    // let precioProducto = document.getElementsByClassName("precioProducto")[0];
    // let imgProducto = document.getElementsByClassName("imgProducto")[0];
    // let infoProducto = document.getElementsByClassName("infoProducto")[0];
    //#endregion
    // let cantidad = 1;
    
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
            
        }
        
        //#region Prueba del articulo
        // precioProducto.innerText = Object.values(object)[1];
        // imgProducto.src = Object.values(object)[2];
        // infoProducto.getElementsByTagName("p")[0].innerText = Object.values(object)[0];
        // console.log(JSON.parse(localStorage.getItem("precio")));
        //#endregion
    }
}