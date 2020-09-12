function init() {

    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var ingreso = "";
    var numeroA = "";
    var numeroB = "";
    var numeroT = 0;
    var operador = 0;
    var total = 0;

    // Se define que los valores de cada número se almacenarán en una variable al ser clickeados
    // Por su parte, las operaciones básicas son asignadas a un código con el cual se ejecutan 
    // posteriormente
    uno.onclick = function () {
        ingreso = ingreso + "1";
        resultado.innerHTML = ingreso;
    }
    dos.onclick = function () {
        ingreso = ingreso + "2";
        resultado.innerHTML = ingreso;
    }
    tres.onclick = function () {
        ingreso = ingreso + "3";
        resultado.innerHTML = ingreso;
    }
    cuatro.onclick = function () {
        ingreso = ingreso + "4";
        resultado.innerHTML = ingreso;
    }
    cinco.onclick = function () {
        ingreso = ingreso + "5";
        resultado.innerHTML = ingreso;
    }
    seis.onclick = function () {
        ingreso = ingreso + "6";
        resultado.innerHTML = ingreso;
    }
    siete.onclick = function () {
        ingreso = ingreso + "7";
        resultado.innerHTML = ingreso;
    }
    ocho.onclick = function () {
        ingreso = ingreso + "8";
        resultado.innerHTML = ingreso;
    }
    nueve.onclick = function () {
        ingreso = ingreso + "9";
        resultado.innerHTML = ingreso;
    }
    cero.onclick = function () {
        ingreso = ingreso + "0";
        resultado.innerHTML = ingreso;
    }

    suma.onclick = function () {
        numeroA = ingreso;
        operador = 1;
        ingreso = "";
    }

    resta.onclick = function () {
        numeroA = ingreso;
        operador = 2;
        ingreso = "";
    }

    multiplicacion.onclick = function () {
        numeroA = ingreso;
        operador = 3;
        ingreso = "";
    }

    division.onclick = function () {
        numeroA = ingreso;
        operador = 4;
        ingreso = "";
    }

    reset.onclick = function () {
        total = 0;
        ingreso = "";
        numeroA = "";
        numeroB = "";
        resultado.innerHTML = "";
    }

    // Se elaboró la calculadora siguiendo la lógica de operaciones contínuas. Ej, se puede sumar, restar, 
    // dividir o multiplicar, sin necesidad de limpiar. Se sugiere limpiar cuando se quiera empezar un 
    // nuevo set de operaciones.
    
    igual.onclick = function () {
        numeroB = ingreso;

        if (operador === 1) {

            if (total === 0) {

                total = parseInt(numeroA) + parseInt(numeroB);
                resultado.innerHTML = total;

            }
            else if (total > 0 || total < 0) {

                total = total + parseInt(numeroB);
                resultado.innerHTML = total;

            }

        }

        if (operador === 2) {

            if (total === 0) {

                total = parseInt(numeroA) - parseInt(numeroB);
                resultado.innerHTML = total;

            }
            else if (total > 0 || total < 0) {

                total = total - parseInt(numeroB);
                resultado.innerHTML = total;

            }

        }

        if (operador === 3) {

            if (total === 0) {

                total = parseInt(numeroA) * parseInt(numeroB);
                resultado.innerHTML = total;

            }

            else if (total > 0 || total < 0) {

                total = total * parseInt(numeroB);
                resultado.innerHTML = total;

            }

        }

        if (operador === 4) {

            if (total === 0) {

                total = parseInt(numeroA) / parseInt(numeroB);
                resultado.innerHTML = total;

            }
            else if (total > 0 || total < 0) {

                total = total / parseInt(numeroB);
                resultado.innerHTML = total;

            }

        }

    }
}

