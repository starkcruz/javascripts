/*
*/


const PreguntaOperaciones = prompt("Que se operación desea realizar: Suma, Multiplicacion, Resta o División ");
let DatoUsuario1 = Number(prompt("Ingrese una Numero 1"));
let DatoUsuario2 = Number(prompt("Ingrese una Numero 2"));


if (isNaN(DatoUsuario1) || isNaN(DatoUsuario2))
{
    console.log("numeros no validaos");
}
else{
    
if (PreguntaOperaciones === "SUMA" || PreguntaOperaciones === "suma" ||  PreguntaOperaciones === "Suma")
{

    let resultado = DatoUsuario1+DatoUsuario2
    console.log("La suma es:"+ resultado)
}

else if (PreguntaOperaciones === "multiplicacion" || PreguntaOperaciones === "MULTIPLICACION" ||  PreguntaOperaciones === "Multiplicacion")
{
    let resultado = DatoUsuario1*DatoUsuario2
    console.log("La multiplicación es:"+ resultado)
}

else if (PreguntaOperaciones === "division" || PreguntaOperaciones === "DIVISION" ||  PreguntaOperaciones === "Division")
{
    if (DatoUsuario1=== 0 || DatoUsuario2=== 0 ){
        console.log("No se puede hacer división por cero")
    }
    else {
    let resultado = DatoUsuario1/DatoUsuario2

    console.log("La Division es:"+ resultado)
}
}


else if (PreguntaOperaciones === "RESTA" || PreguntaOperaciones === "resta" ||  PreguntaOperaciones === "Resta")
{
    
    let resultado = DatoUsuario1-DatoUsuario2
    console.log("La resta es:"+ resultado)
}


else{
    console.log("Valor invalido");
}

}

