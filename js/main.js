let nota = parseInt(prompt("Qué nota has sacado?"))

if (nota < 0) {
    console.log ("Por muy cazurro que seas, no puedes sacar menos de un cero")
} else if (nota > 0 && nota < 5) {
    console.log ("Tu nota es insuficiente")
} else if (nota >= 5 && nota <= 6) {
    console.log ("Tu nota es suficiente")
} else if (nota >= 7 && nota <= 8) {
    console.log ("Tu nota es notable")
} else if (nota >= 9 && nota <= 10) {
    console.log ("Tu nota es sobresaliente")
} else {
    console.log ("Introduce un valor de nota válido")
}