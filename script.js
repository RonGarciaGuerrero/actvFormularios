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
    if(x.value!=""){//solo si el campo esta relleno de algo ejecuto el codigo, si no, lanzo de error de campo vacío
        if (!regex.test(x.value)){//test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
            //correcto=false;
            document.getElementById("errores").innerHTML="<p>El nombre es inválido</p>";
            document.getElementById("nombre").focus();//pongo el foco en el elemento que esta erroneo
        }else{
            document.getElementById("errores").innerHTML="";
        }

    }else{
        document.getElementById("errores").innerHTML="<p>El campo nombre no puede estar vacío</p>";
        document.getElementById("nombre").focus();//pongo el foco en el elemento que esta erroneo
    }
}
function validarApellidos (evento){
    var x = evento.currentTarget;
    var regex = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/;
    if(x.value!=""){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>Los apellidos son inválidos</p>";
            document.getElementById("apellidos").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo apellido no puede estar vacío</p>";
        document.getElementById("apellidos").focus();//pongo el foco en el elemento que esta erroneo
    }
}
function validarEdad(evento){
    var x = evento.currentTarget;
    var regex = /^[0-9]$|^[1-9][0-9]$|^(105)$/;//solo acepta numeros entre 0 y 105
    if(x.value!=""){
        //if (x.value<0 || x.value>105){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>La edad es inválida</p>";
            document.getElementById("edad").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo edad no puede estar vacío</p>";
        document.getElementById("edad").focus();//pongo el foco en el elemento que esta erroneo
    }
}

function validarNif(evento){
    var x = evento.currentTarget;
    var regex = /^[0-9XYZ][0-9]{7}[-]{1}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;//valida NIE y DNI sin importar cuál sea. ^ busca el primer caracter de la cadena, [0-9XYZ] uno de cualquiera de estos valores[0-9]{7} siete numeros entre cero y nuevo [-]{1} un guión, [TRWAGMYFPDXBNJZSQVHLCKE]$ una de estas letras en la ultima posicion de la cadena, i es de ignorar mayusculas o minúsculas. 
    if(x.value!=""){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>El NIF es inválido</p>";
            document.getElementById("nif").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo NIF no puede estar vacío</p>";
        document.getElementById("nif").focus();//pongo el foco en el elemento que esta erroneo
    }
}

function validarEmail(evento){
    var x = evento.currentTarget;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.value!=""){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>El email es inválido</p>";
            document.getElementById("email").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo email no puede estar vacío</p>";
        document.getElementById("email").focus();//pongo el foco en el elemento que esta erroneo
    }
}


function validarProvincias(evento){
    var x = evento.currentTarget;
    if(x.value=="0"){
        document.getElementById("errores").innerHTML="<p>Debe escoger una provincia</p>";
        document.getElementById("provincia").focus();
    }else{
        document.getElementById("errores").innerHTML="";
    }
}

function validarFecha(evento){
    var x = evento.currentTarget;
    var regex = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;//Permite un tres seguido de un cero, seguido de un uno o un dos seguidos de un numero del cero al nueve con lo que se cumple los posibles dias del mes. Seguido de un guion o un punto o una barra. Para el mes seguido de un cero y un numero del 1 al 9, o un 1 seguido de un numero del uno al dos. Se repite la regla de la barra el punto o el guien, para el año ahora seguido de 4 numeros.
    if(x.value!=""){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>La fecha es inválida. El formato de fecha aceptado es: 01/01/2013, 5-3-2013, 15.03.2013</p>";
            document.getElementById("fecha").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo Fecha no puede estar vacío</p>";
        document.getElementById("fecha").focus();//pongo el foco en el elemento que esta erroneo
    }
}

function validarTelefono(evento){
    var x = evento.currentTarget;
    var regex = /^[0-9]{9}$/;//busca que haya 9 numeros obligatorios del 0 al 9
    
    if(x.value!=""){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>El teléfono es inválido</p>";
            document.getElementById("telefono").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo Teléfono no puede estar vacío</p>";
        document.getElementById("telefono").focus();//pongo el foco en el elemento que esta erroneo
    }
}

function validarHora(evento){
    var x = evento.currentTarget;
    var regex = /^([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;//Permite hora en formato 00:00 por ejemplo hasta 23:59, busca el primer caracter que sera un cero seguido de un numero del cero al nueve, o un uno seguido de un numero del cero al nueve, o un 2 seguido de un numero del cero al 3. Luego los dos puntos, seguido de un numero del cero al cinco, seguido de un numero del cero al nueve.
    
    if(x.value!=""){
        if (!regex.test(x.value)){
            document.getElementById("errores").innerHTML="<p>La hora es inválida</p>";
            document.getElementById("hora").focus();
        }else{
            document.getElementById("errores").innerHTML="";
        }
    }else{
        document.getElementById("errores").innerHTML="<p>El campo hora no puede estar vacío</p>";
        document.getElementById("hora").focus();//pongo el foco en el elemento que esta erroneo
    }
}

function validarEnviar(evento){
    evento.preventDefault();
    var x = evento.currentTarget;
    //alert("jeje");
    var a = document.forms["formulario"]["nombre"].value;
    var b = document.forms["formulario"]["apellidos"].value;
    var c = document.forms["formulario"]["edad"].value;
    var d = document.forms["formulario"]["nif"].value;
    var e = document.forms["formulario"]["email"].value;
    var f = document.forms["formulario"]["provincia"].value;
    var g = document.forms["formulario"]["fecha"].value;
    var h = document.forms["formulario"]["telefono"].value;
    var i = document.forms["formulario"]["hora"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == ""|| e == null || e == "", f == null || f == "", g == null || g == "", h == null || h == "", i == null || i == "") {
        alert("No puede dejar ningún campo vacío, rellene el formulario");
        return false;
    }else{
        document.getElementById("intentos").innerHTML="<p>Confirmación de envío de datos:</p><br/><button type=\"button\" onclick=\"alert('Datos enviados')\">Aceptar</button>&nbsp<button type=\"button\" onclick=\"alert('Envío cancelado')\">Cancelar</button>";
    }


    

}



function asociarListeners(loadEvent){//dentro de esta funcion hay que meter todo el codigo que debe esperar a que se cargue la ventana entera para ejecutarse
    //alert('hola');
    document.getElementById("nombre").addEventListener('blur', listenerMayusculas, false);
    document.getElementById("apellidos").addEventListener('blur', listenerMayusculas, false);
    document.getElementById("nombre").addEventListener('blur',validarNombre, false);
    document.getElementById("apellidos").addEventListener('blur',validarApellidos, false);
    document.getElementById("edad").addEventListener('blur',validarEdad,false);
    document.getElementById("nif").addEventListener('blur',validarNif,false);
    document.getElementById("email").addEventListener('blur',validarEmail,false);
    document.getElementById("provincia").addEventListener('blur',validarProvincias,false);
    document.getElementById("fecha").addEventListener('blur',validarFecha,false);
    document.getElementById("telefono").addEventListener('blur',validarTelefono,false);
    document.getElementById("hora").addEventListener('blur',validarHora,false);
    document.getElementById("formulario").addEventListener('submit',validarEnviar,false);

    // const form = document.getElementById('form');
    // const error = document.getElementById('errores');
    // const nomb = document.getElementById("nombre");
    // nomb.oninvalid = invalid;
    // form.onsubmit = submit;

}


//como el script esta metido en el head se ejecuta antes de cargar todo el documento html por lo que no consigue el elemento cuyo id es nombre, por eso en la consola daba el error de acceder a la propiedad addEventListener de null

//la solucion a esto es ejecutar este codigo en el evento load del window
//cuando LA VENTANA  (window) se haya terminado de cargar correctamente entonces se ejecutará la funcion asociar listeners
window.addEventListener('load',asociarListeners,false);
window.addEventListener('submit',asociarListeners,false);



//sin el addEventListener
// document.getElementById("nombre").onblur = mayusculas;

// function mayusculas(){
//     var x = document.getElementById("nombre");
//     x.value = x.value.toUpperCase();
// }
