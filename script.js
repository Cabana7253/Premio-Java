

//Ingresar el nombre - ingresar un numero de 1 a 1000 
var min = 1;
var max = 1000;
var aleatorio = Math.floor(Math.random() * max - min + 1) + min;
var intentos = 0;
var nombre = prompt('Bienvenido al Juego de Acertar el Premio, Cual es tu nombre?');
var numero;

for (intentos; intentos < 5; intentos++) {
    numero = parseInt(prompt(nombre + ' ,ingresa un numero entre ' + min + ' y el ' + max));

    if (numero >= min && numero <= max) {
        if (numero < aleatorio) {
            alert('El numero que ingreso es mas bajo');

        } else if (numero > aleatorio) {
            alert('El numero que ingreso es mas alto');

        } else if (numero == aleatorio) {
            break;
        }
    } else {
        alert('Debe ingresar un numero entre ' + min + ' y ' + max);
    }

}
if (numero == aleatorio) {
    alert('Felicidades adivinaste el numero en ' + intentos + '');
} else {
    alert('Agotaste el numero de intentos, suerte para la proxima!!!')
}
