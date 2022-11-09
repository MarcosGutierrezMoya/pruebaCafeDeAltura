// import { ponerPrecio, precio } from "./cesta.js";
// let flechas = [];
// flechas = document.getElementsByClassName("flechaFaq");

if (document.title == "Café de altura") {
    let precio = 0;
    let nombre = "";
    let source = "";
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
        precio = this.previousSibling.previousSibling.children[1].textContent;
        nombre = this.previousSibling.previousSibling.children[0].value;
        source = this.previousSibling.previousSibling.previousSibling.previousSibling.src;
        localStorage.setItem("precio",JSON.stringify({"name":nombre, "age":precio,"src":source}));
        console.log(precio);
    }
}
else if (document.title == "Cesta") {
    let zonaProducto = document.getElementById("zonaProducto");
    let precioProducto = document.getElementById("precioProducto");
    let imgProducto = document.getElementById("imgProducto");
    let infoProducto = document.getElementById("infoProducto");

    //#region CreaElementos
    let articulo = zonaProducto.appendChild(document.createElement("article"));
    let selecCantidad = articulo.appendChild(document.createElement("div")).setAttribute("id","cantidad");
    let divMinus = selecCantidad.appendChild(document.createElement("div"));
    let divCatidad = selecCantidad.appendChild(document.createElement("div"));
    let divPlus = selecCantidad.appendChild(document.createElement("div"));
    //#endregion

    let object = JSON.parse(localStorage.getItem("precio"));
    precioProducto.innerText = Object.values(object)[1];
    imgProducto.src = Object.values(object)[2];
    infoProducto.getElementsByTagName("p")[0].innerText = Object.values(object)[0];
    console.log(JSON.parse(localStorage.getItem("precio")));
}