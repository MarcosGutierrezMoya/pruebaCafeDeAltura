// let flechas = [];
// flechas = document.getElementsByClassName("flechaFaq");
for (let i = 0; i < document.getElementsByClassName("flechaFaq").length; i++) {
    document.getElementsByClassName("flechaFaq")[i].addEventListener("click",occult);
}
for (let i = 0; i < document.getElementsByClassName("masProducto").length; i++) {
    document.getElementsByClassName("masProducto")[i].addEventListener("click",añadir);
    console.log("hola");
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
    console.log(this.previousSibling.lastChild);
    // document.previousSibling.lastChild
}