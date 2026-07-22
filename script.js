// CALCULADORA

function calcular() {

    const n1 = parseFloat(document.getElementById("nota1")?.value) || 0;
    const p1 = parseFloat(document.getElementById("pond1")?.value) || 0;

    const n2 = parseFloat(document.getElementById("nota2")?.value) || 0;
    const p2 = parseFloat(document.getElementById("pond2")?.value) || 0;

    const n3 = parseFloat(document.getElementById("nota3")?.value) || 0;
    const p3 = parseFloat(document.getElementById("pond3")?.value) || 0;

    const resultado =
        (n1 * p1 + n2 * p2 + n3 * p3) / 100;

    const resultadoHTML =
        document.getElementById("resultado");

    if(resultadoHTML){
        resultadoHTML.innerHTML =
            "Nota Final: " + resultado.toFixed(1);
    }
}



// TODO LO DEMÁS

document.addEventListener("DOMContentLoaded", function(){

    // CHECKBOX VERDE

    const checkboxes =
    document.querySelectorAll(".ramo");

    checkboxes.forEach(function(caja){

        caja.addEventListener("change", function(){

            const item =
            caja.closest(".ramo-item");

            if(!item) return;

            if(caja.checked){

                item.classList.add("aprobado");

            }else{

                item.classList.remove("aprobado");
            }

        });

    });



    // AVANCE CURRICULAR

    function actualizarAvance(){

        const total =
        document.querySelectorAll(".ramo").length;

        const aprobados =
        document.querySelectorAll(".ramo:checked").length;

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

    checkboxes.forEach(function(caja){

        caja.addEventListener(
            "change",
            actualizarAvance
        );

    });

    actualizarAvance();



    // PRERREQUISITO PILOTO

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

    if(biologia){

        biologia.addEventListener(
            "change",
            revisarPrerrequisitos
        );

        revisarPrerrequisitos();
    }

});
