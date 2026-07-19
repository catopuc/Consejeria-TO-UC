function calcular(){

    let n1 =
    parseFloat(
        document.getElementById("nota1").value
    ) || 0;

    let n2 =
    parseFloat(
        document.getElementById("nota2").value
    ) || 0;

    let promedio =
    (n1+n2)/2;

    document.getElementById(
        "resultado"
    ).innerText =
    "Promedio: " +
    promedio.toFixed(1);
}
