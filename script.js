//con addEventListener

document.getElementById("nombre").addEventListener('blur', function (){ var x = document.getElementById("nombre");
    x.value = x.value.toUpperCase();
}, false)


//sin el addEventListener
// document.getElementById("nombre").onblur = mayusculas;

// function mayusculas(){
//     var x = document.getElementById("nombre");
//     x.value = x.value.toUpperCase();
// }
