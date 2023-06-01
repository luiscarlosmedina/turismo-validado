let data = 0;
function validar() {
    let nombre = document.getElementById("nom");
    let apellido = document.getElementById("ape");
    let direccion = document.getElementById("dir");
    let correo = document.getElementById("cor");
    let edad = document.getElementById("eda");
    let peso = document.getElementById("pes");
    let genero = document.getElementById("gen");
    let origen = document.getElementById("ori");
    let destino = document.getElementById("des");

    let informacion = [nombre.value, apellido.value, direccion.value, correo.value, edad.value, peso.value, genero.value, origen.value, destino.value]


    let val = [];
    for (let i = 0; i < informacion.length; i++) {
        if (informacion[i] == "" || informacion[i] == null || informacion[i] == "0") {
            val.push(false);
        } else {
            val.push(true);
        }
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
function resultado() {
    let info = data;
    let vist1 = document.getElementById("v1");
    let vist2 = document.getElementById("v2");
    let nombre = document.getElementById("nombre");
    let tiquete = document.getElementById("tiquete");
    let impuesto = document.getElementById("ipto");
    let equipaje = document.getElementById("equi");
    let total = document.getElementById("total");


    vist1.style.display = "none";
    vist2.style.display = "flex";

    nombre.innerText = info[0] + " " + info[1];

    if (info[7] == "1" && info[8] == "2" || info[7] == "2" && info[8] == "1") {
        console.log("ta");
    } else if (info[7] == "1" && info[8] == "3" || info[7] == "3" && info[8] == "1") {
        console.log("tb");
    } else if (info[7] == "1" && info[8] == "4" || info[7] == "4" && info[8] == "1") {
        console.log("tc");
    } else if (info[7] == "1" && info[8] == "5" || info[7] == "5" && info[8] == "1") {
        console.log("td");
    } else{
        alert("No existe la ruta");
        salir();
    }

    if (parseInt(info[5]) < 60) {
        console.log("paga el 5%");
    }
    if (parseInt(info[5]) < 70 && parseInt(info[6])>20){
        let extra = parseInt(info[6])-20;
        let tfpeso = extra * 20000;
        console.log(tfpeso);
    }else{
        console.log(0);
    }
}
function imprime() {
    print()
}
function salir() {
    location.reload();
}