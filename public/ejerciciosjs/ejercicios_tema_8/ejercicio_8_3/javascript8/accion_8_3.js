
var capa = document.getElementById("capa");

//El ratón entra en la capa
capa.addEventListener("mouseenter", (ev) => {
    capa.style.backgroundColor = "green";
});

//el ratón sale de la capa
capa.addEventListener("mouseleave", (ev) => {
    capa.style.backgroundColor = "transparent";
});

//Se aprieta el boton principal sobre la capa
capa.addEventListener("mousedown", (ev) => {
    if (ev.button == 0) {//botón izquierdo
        capa.style.backgroundColor = "red";
    } else if (ev.button == 2) { //botón derecho
        capa.style.backgroundColor = "blue";
    }
}
);

//Se suelta el botón principal sobre la capa 
capa.addEventListener("mouseup", (ev) => {
    capa.style.backgroundColor = "green";
});

//Se intenta sacar el menu de contecto, accion que se provoca 
//con el boton secundario, pero que se debe anular aparte
capa.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
});