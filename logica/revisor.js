let data = 0;
function validar() {
    //llamada de datos
    let nombre = document.getElementById("nom");
    let apellido = document.getElementById("ape");
    let direccion = document.getElementById("dir");
    let correo = document.getElementById("cor");
    let edad = document.getElementById("eda");
    let peso = document.getElementById("pes");
    let genero = document.getElementById("gen");
    let origen = document.getElementById("ori");
    let destino = document.getElementById("des");

    //validadores regex
    let ValidaCorreos = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let ValidaNombres = /^[A-Za-záéíóúñÁÉÍÓÚÑ\s]+$/;
    let ValidaDireccion = /^[A-Za-z0-9\s\-\.,#]+$/;
    let ValidaEdad = /^(0|[1-9][0-9]?|1[01][0-9]|120)$/;


    //concatenar los datos en un array
    let informacion = [nombre.value, apellido.value, direccion.value, correo.value, edad.value, peso.value, genero.value, origen.value, destino.value]

    //realizar validaciones y otorgarles un estado
    let val = [];
    for (let i = 0; i < informacion.length; i++) {
        if (informacion[i] == "" || informacion[i] == null || informacion[i] == "0") {
            val.push(false);
        } else {
            val.push(true);
        }
    }
    if (!ValidaNombres.test(informacion[0])) {
        val[0] = false;
    }
    if (!ValidaNombres.test(informacion[1])) {
        val[1] = false;
    }
    if (!ValidaDireccion.test(informacion[2])) {
        val[2] = false;
    }
    if (!ValidaCorreos.test(informacion[3])) {
        val[3] = false;
    }
    if (!ValidaEdad.test(parseFloat(informacion[4])) || parseFloat(informacion[4]) < 0) {
        val[4] = false;
    }
    if (parseFloat(informacion[5]) < 0 || parseFloat(informacion[5]) > 70) {
        val[5] = false;
    }
    if (informacion[7] == informacion[8]) {
        val[7] = false;
        val[8] = false;
    } else if (informacion[7] == "0" || informacion[8] == "0") {
        val[7] = false;
        val[8] = false;
    } else {
        val[7] = true;
        val[8] = true;
    }

    //actuar segun el estado
    let cont = 0;
    for (let j = 0; j < val.length; j++) {
        if (val[j] == false) {
            switch (j) {
                case 0:
                    nombre.style.border = "red 2px solid";
                    cont++;
                    break;
                case 1:
                    apellido.style.border = "red 2px solid";
                    cont++;
                    break;
                case 2:
                    direccion.style.border = "red 2px solid";
                    cont++;
                    break;
                case 3:
                    correo.style.border = "red 2px solid";
                    cont++;
                    break;
                case 4:
                    edad.style.border = "red 2px solid";
                    cont++;
                    break;
                case 5:
                    peso.style.border = "red 2px solid";
                    cont++;
                    break;
                case 6:
                    genero.style.border = "red 2px solid";
                    cont++;
                    break;
                case 7:
                    origen.style.border = "red 2px solid";
                    cont++;
                    break;
                case 8:
                    destino.style.border = "red 2px solid";
                    cont++;
                    break;
            }
        }
    }
    if (cont == 0) {
        data = informacion;
        resultado();
    }
}

//se ejecuta hasta que la primera funcion este true
function resultado() {
    let info = data;
    console.log(info);
    let vist1 = document.getElementById("v1");
    let vist2 = document.getElementById("v2");
    let nombre = document.getElementById("nombre");
    let tiquete = document.getElementById("tiquete");
    let impuesto = document.getElementById("ipto");
    let equipaje = document.getElementById("equi");
    let total = document.getElementById("total");


    vist1.style.display = "none";
    vist2.style.display = "flex";

    //mostrar los datos al usuario nombre y apellido
    nombre.innerText = info[0] + " " + info[1];

    //mostrar valor del tiquete
    let tq = 0;
    if (info[7] == "1" && info[8] == "2" || info[7] == "2" && info[8] == "1") {
        tiquete.innerHTML = " $ 190000"
        tq += 190000;
    } else if (info[7] == "1" && info[8] == "3" || info[7] == "3" && info[8] == "1") {
        tiquete.innerHTML = "$ 165000"
        tq += 165000;
    } else if (info[7] == "1" && info[8] == "4" || info[7] == "4" && info[8] == "1") {
        tiquete.innerHTML = "$ 135000"
        tq += 135000
    } else if (info[7] == "1" && info[8] == "5" || info[7] == "5" && info[8] == "1") {
        tiquete.innerHTML = "$ 245000"
        tq += 245000
    } else {
        alert("No existe la ruta");
        salir();
    }

    //mostrar impuesto aeroportuario
    let imp = 0;
    if (parseInt(info[4]) < 60) {
        imp += tq * (5 / 100)
        impuesto.innerHTML = "$ " + imp;
    } else {
        impuesto.innerHTML = "$ " + imp;
    }

    //mostrar equipaje extra
    let teq = 0;
    if (parseInt(info[4]) < 70 && parseFloat(info[5]) > 20) {
        let extra = parseFloat(info[5]) - 20.0;
        teq += extra * 20000;
        equipaje.innerHTML = "$ " + teq;
    } else {
        equipaje.innerHTML = "$ " + teq;
    }

    //mostrar total
    total.innerHTML = "$ " + (tq + imp + teq);
}
function imprime() {
    print()
}
function salir() {
    location.reload();
}