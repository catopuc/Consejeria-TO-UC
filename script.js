function calcular(){

    let n1 =
    parseFloat(
    document.getElementById("nota1").value
    ) || 0;

    let p1 =
    parseFloat(
    document.getElementById("pond1").value
    ) || 0;

    let n2 =
    parseFloat(
    document.getElementById("nota2").value
    ) || 0;

    let p2 =
    parseFloat(
    document.getElementById("pond2").value
    ) || 0;

    let n3 =
    parseFloat(
    document.getElementById("nota3").value
    ) || 0;

    let p3 =
    parseFloat(
    document.getElementById("pond3").value
    ) || 0;

    let resultado =
    (n1*p1 + n2*p2 + n3*p3)/100;

    document.getElementById(
    "resultado"
    ).innerText =
    "Nota Final: " +
    resultado.toFixed(1);

}
