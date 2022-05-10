/*
*/


const PreguntaOperaciones = prompt("Que se operación desea realizar: Suma o Multiplicacion ");





if (PreguntaOperaciones === "SUMA" || PreguntaOperaciones === "suma" ||  PreguntaOperaciones === "Suma")
{
    let DatoUsuario1 = Number(prompt("Ingrese una Numero 1"));
    let DatoUsuario2 = Number(prompt("Ingrese una Numero 2"));
    let resultado = DatoUsuario1+DatoUsuario2
    console.log("La suma es:"+ resultado)
}

else if (PreguntaOperaciones === "multiplicacion" || PreguntaOperaciones === "MULTIPLICACION" ||  PreguntaOperaciones === "Multiplicacion")
{
    let DatoUsuario1 = Number(prompt("Ingrese una Numero 1"));
    let DatoUsuario2 = Number(prompt("Ingrese una Numero 2"));
    let resultado = DatoUsuario1*DatoUsuario2
    console.log("La multiplicación es:"+ resultado)
}
else{
    console.log("Valor invalido");
}