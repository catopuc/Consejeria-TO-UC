function calcularPromedio(){

    let n1 = parseFloat(
        document.getElementById("nota1").value
    );

    let n2 = parseFloat(
        document.getElementById("nota2").value
    );

    let promedio = (n1 + n2) / 2;

    document.getElementById("resultado").innerHTML =
        "Promedio: " + promedio.toFixed(1);

}
