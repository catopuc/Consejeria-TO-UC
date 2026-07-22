// CALCULADORA

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


// AVANCE CURRICULAR

document.addEventListener("DOMContentLoaded", () => {

    const ramos =
    document.querySelectorAll(".ramo");

    function actualizarAvance(){

        const total =
        ramos.length;

        const aprobados =
        document.querySelectorAll(
            ".ramo:checked"
        ).length;

        const porcentaje =
        total > 0
        ? Math.round((aprobados / total) * 100)
        : 0;

        const barra =
        document.getElementById("progreso");

        const texto =
        document.getElementById("porcentaje");

        if(barra){
            barra.style.width =
            porcentaje + "%";
        }

        if(texto){
            texto.innerText =
            porcentaje + "%";
        }
    }

    ramos.forEach(ramo => {
        ramo.addEventListener(
            "change",
            actualizarAvance
        );
    });
    document.addEventListener("DOMContentLoaded", () => {

    const checkboxes =
    document.querySelectorAll(".ramo");

    checkboxes.forEach(caja => {

        caja.addEventListener("change", () => {

            const item =
            caja.closest(".ramo-item");

            if(caja.checked){

                item.classList.add(
                    "aprobado"
                );

            }else{

                item.classList.remove(
                    "aprobado"
                );
            }

        });

    });

});

    actualizarAvance();
});

document.addEventListener("DOMContentLoaded", () => {

    const biologia =
    document.getElementById("biologia");

    const fisio =
    document.getElementById("fisio-item");

    function revisarPrerrequisitos(){

        if(!biologia || !fisio){
            return;
        }

        if(biologia.checked){

            fisio.classList.remove(
                "bloqueado"
            );

        }else{

            fisio.classList.add(
                "bloqueado"
            );
        }

    }

    biologia.addEventListener(
        "change",
        revisarPrerrequisitos
    );

    revisarPrerrequisitos();

});
