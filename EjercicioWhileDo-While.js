//Ejercicio While do, While
function mostrarMenu() {
    
    console.log("Bienvenido a la calculadora");
    console.log("Seleccione una opción:");
    console.log("1. Cálculo de promedio de notas (4 notas)");
    console.log("2. Cálculo de área de un rectángulo");
    console.log("3. Suma de dos números");
    console.log("4. Retorno del nombre del día según número de día (1-7)");

    
    let opcion = parseInt(prompt("Ingrese el número de la opción que desea realizar:"));

    switch (opcion) {
        case 1:
            function calcularPromedioNotas() {
            let notas = [];
            for (let i = 1; i <= 4; i++) {
            notas.push(parseFloat(prompt("Ingrese la nota " + i + ":")));
     }
     let promedio = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
     console.log("El promedio de las notas es: " + promedio.toFixed(2));
            break;
        case 2:
            function calcularAreaRectangulo() {
            let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
            let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
            let area = largo * ancho;
            console.log("El área del rectángulo es: " + area);
            }
            break;
        case 3:
            function sumaDeNumeros() {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            let suma = num1 + num2;
            console.log("La suma de los dos números es: " + suma);
           }
            break;
        case 4:
            function obtenerNombreDia() {
    let numeroDia = parseInt(prompt("Ingrese el número del día de la semana (1-7):"));
    let dia;
    switch (numeroDia) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Número de día inválido";
            break;
    }
    console.log("El día correspondiente al número " + numeroDia + " es: " + dia);
}
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }
}