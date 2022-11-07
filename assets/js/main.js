let flechas = [];
flechas = document.getElementsByClassName("flechaFaq");
for (let i = 0; i < 2; i++) {
    flechas.addEventListener("click",occult);
}

function occult(i) {
    let p1 = document.getElementById("text0");
    console.log(p1);
    switch (i) {
        case i.id=="flecha1":
            (p1.hidden==true)?p1.hidden=false:p1.hidden=true;
            break;
        case 1:
            (document.getElementById("text1").hidden==true)?document.getElementById("text1").hidden=false:document.getElementById("text1").hidden=true;
        break;
        case 2:
            (document.getElementById("text2").hidden==true)?document.getElementById("text2").hidden=false:document.getElementById("text2").hidden=true;
            break;
        default:
            break;
    }
}