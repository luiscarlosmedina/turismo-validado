function Avisa() {
    let acepta = confirm("Atención se van a limpiar los datos del formulario");

    if (acepta)
        return true;
    else
        return false;
}
function Verifica() {

    //Inicio Validación Nombres y Apellidos
    if (document.miform.nombre.value == "" || document.miform.nombre.value == null) {
        alert("Debe Ingresar Nombres y Apellidos");
        document.miform.nombre.focus();
        return false;
    }
    let contador = 0;//La variable contador calcula los radios no chequeados
    let genero = document.getElementsByName("t2");
    for (i = 0; i < genero.length; i++) {
        if (genero.item(i).checked == false) {
            contador = contador + 1;
        }
    }
    if (contador == genero.length) {
        alert("Debe seleccionar Género");
        return false;
    }
    let lista = document.getElementsByName("t3");
    let valida = true;

    for(k=0;k < lista.length;k++){
        if(!lista.item(k).checked){
            valida = false;
        }
    }
    if (valida == false) {
        alert("Debe seleccionar un destino");
        return false;
    }
    
}
addEventListener("click",checkinput())