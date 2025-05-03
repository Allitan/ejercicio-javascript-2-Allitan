function calcular(){
    let N1 = document.getElementById("valorN1").value
    let N2 = document.getElementById("valorN2").value
    let N3 = document.getElementById("valorN3").value

    if(N1 === ""){
        alerta("Nota primer parcial vacia")
    }else if(N2 === ""){
        alerta("Nota segundo parcial vacia")
    }else if(N3 === ""){
        alerta("Nota tercer parcial vacia")
    }else{
        let a = parseFloat(N1)
        let b = parseFloat(N2)
        let c = parseFloat(N3)

        if(a < 0 || a > 30){
            alerta("No puede ingresar valores negativos ni mayores a 30")
        }else if(b < 0 || b > 30){
            alerta("No puede ingresar valores negativos ni mayores a 30")
        }else if(c < 0 || c > 40){
            alerta("No puede ingresar valores negativos ni mayores a 40")
        }else{
            let notaFinal = a + b + c

            document.getElementById("valorNotaFinal").value = notaFinal

            if(notaFinal>=0 && notaFinal<=59){
                alertaNota("Reprobado")
            }else if(notaFinal>=60 && notaFinal<=79){
                alertaNota("Bueno")
            }else if(notaFinal>=80 && notaFinal<=89){
                alertaNota("Muy Bueno")
            }else if(notaFinal>=90 && notaFinal<=100){
                alertaNota("Sobresaliente")
            }
        }
    }
}

function limpiar(){
    document.getElementById("valorN1").value = ""
    document.getElementById("valorN2").value = ""
    document.getElementById("valorN3").value = ""
    document.getElementById("valorNotaFinal").value = ""
}

function alerta(mensaje){
    Swal.fire({
        title: mensaje,
        icon: "warning"
    })
}

function alertaNota(mensaje){
    Swal.fire({
        title: mensaje,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}