//con addEventListener
//alert("se esta ejecutando el javaScript");
function listenerMayusculas (evento){ 
    //var x = document.getElementById("nombre");
    var x = evento.currentTarget; ///el currentTarget del evento devuelve el elemento en el que se produjo el evento (al que se le asocio el listener)
    //Returns the element whose event listeners triggered the event
    x.value = x.value.toUpperCase();
}

function validarNombre (evento){
    var x = evento.currentTarget;
    var regex = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/;
    //var correcto=true;
    //alert(x.value);
    if (!regex.test(x.value)){
        //correcto=false;
        document.getElementById("errores").innerHTML="<p>El nombre es inválido</p>";
        document.getElementById("nombre").focus();//pongo el foco en el elemento que esta erroneo
    }else{
        document.getElementById("errores").innerHTML="";
    }
}
function validarApellidos (evento){
    var x = evento.currentTarget;
    var regex = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/;
    if (!regex.test(x.value)){
        document.getElementById("errores").innerHTML="<p>Los apellidos son inválidos</p>";
        document.getElementById("apellidos").focus();
    }else{
        document.getElementById("errores").innerHTML="";
    }

}
function validarEdad(evento){
    var x = evento.currentTarget;
    var regex = /^[0-9]$|^[1-9][0-9]$|^(105)$/;//solo acepta numeros entre 0 y 105
    
    //if (x.value<0 || x.value>105){
    if (!regex.test(x.value)){
        document.getElementById("errores").innerHTML="<p>La edad es inválida</p>";
        document.getElementById("edad").focus();
    }else{
        document.getElementById("errores").innerHTML="";
    }
}

function asociarListeners(loadEvent){//dentro de esta funcion hay que meter todo el codigo que debe esperar a que se cargue la ventana entera para ejecutarse
    //alert('hola');
    document.getElementById("nombre").addEventListener('blur', listenerMayusculas, false);
    document.getElementById("apellidos").addEventListener('blur', listenerMayusculas, false);
    document.getElementById("nombre").addEventListener('blur',validarNombre, false);
    document.getElementById("apellidos").addEventListener('blur',validarApellidos, false);
    document.getElementById("edad").addEventListener('blur',validarEdad,false);

}


//como el script esta metido en el head se ejecuta antes de cargar todo el documento html por lo que no consigue el elemento cuyo id es nombre, por eso en la consola daba el error de acceder a la propiedad addEventListener de null

//la solucion a esto es ejecutar este codigo en el evento load del window
//cuando LA VENTANA  (window) se haya terminado de cargar correctamente entonces se ejecutará la funcion asociar listeners
window.addEventListener('load',asociarListeners,false);




//sin el addEventListener
// document.getElementById("nombre").onblur = mayusculas;

// function mayusculas(){
//     var x = document.getElementById("nombre");
//     x.value = x.value.toUpperCase();
// }
