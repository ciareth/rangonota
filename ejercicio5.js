//Determinar el rango de una persona
let n = parseFloat(prompt("Ingrese su promedio total a evaluar:"));
if (n >= 91){
    document.write('Su promedio esta en "Excelencia academica"');
}
else if (n >=80){
    document.write('Su promedio esta en "Muy Bueno"');
}
else if (n >=75){
    document.write('Su promedio esta en "Bueno"');
}
else if (n <=74){
    document.write('Su promedio esta en "Necesita mejorar"');
}
else {
    document.write("Su promedio esta fuera de rango");
}