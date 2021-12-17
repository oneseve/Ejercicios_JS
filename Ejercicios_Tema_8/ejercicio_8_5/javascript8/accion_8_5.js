let capaScroll=document.getElementById("capa");
let capaBoton=document.getElementById("boton");
let boton=document.querySelector("#boton button");
capaBoton.addEventListener("scroll",(ev)=>{
    //para saber si hemos llegado al final
    //hay que sumar la anchura del elemento
    //a la propiedad scrollTop y ver si redondeando
    //hacai arriba, hemos llelgado a scrollHeight
    if(Math.ceil(capaScroll.scrollTop+capaScroll.clienteHeight)>=
    capaScroll.scrollHeight){
        capaBoton.style.display="block";
    }
    else{
        capaBoton.style.display="none";
    }
});
boton.addEventListener("click",(ev)=>{
    document.body.removeChild(capaScroll);
});

