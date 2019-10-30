function somar() {
    let soma1 = parseInt(document.getElementById("soma1").value);
    let soma2 = parseInt(document.getElementById("soma2").value);

    let soma = soma1 + soma2;
    alert ("A soma é " + soma);

}
function subtrair() {
    let subtracao1 = parseInt(document.getElementById("subtracao1").value);
    let subtracao2 = parseInt(document.getElementById("subtracao2").value);

    let sub = subtracao1 - subtracao2;
    alert ("A subtração é "+sub);
}
function multiplicar() {
    let multiplicar1 = parseInt(document.getElementById("multiplicar1").value);
    let multiplicar2 = parseInt(document.getElementById("multiplicar2").value);

    let mult = multiplicar1 * multiplicar2;
    alert ("A multiplicação é " +mult);
}
function divisao() {
    let dividir1 = parseInt(document.getElementById("dividir1").value);
    let dividir2 = parseInt(document.getElementById("dividir2").value);

    let div = dividir1 / dividir2;
    alert ("A divisão é " +div);
}