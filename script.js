function calcular() {

    const n1 = parseFloat(document.getElementById("nota1").value) || 0;
    const p1 = parseFloat(document.getElementById("pond1").value) || 0;

    const n2 = parseFloat(document.getElementById("nota2").value) || 0;
    const p2 = parseFloat(document.getElementById("pond2").value) || 0;

    const n3 = parseFloat(document.getElementById("nota3").value) || 0;
    const p3 = parseFloat(document.getElementById("pond3").value) || 0;

    const resultado =
        (n1 * p1 + n2 * p2 + n3 * p3) / 100;

    document.getElementById("resultado").innerHTML =
        "Nota Final: " + resultado.toFixed(1);
}
