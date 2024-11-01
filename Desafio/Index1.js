const nome_do_heroi = "PH"
let xp = 1000
let nivel = "bronze"


if (xp < 1000 ) {
   nivel = "ferro"
}
else if (xp <= 2000){
    nivel = "bronze"
}
else if(xp <= 5000){
    nivel = "prata"
}
else if(xp <= 7000){
    nivel = "Ouro"
}
else if(xp <= 8000){
    nivel = "Platina"
}
else if(xp <= 9000){
    nivel = "Ascendente"
}
else if(xp <= 10000){
    nivel = "Imortal"

}
else if (xp => 10000) {
    nivel = "Radiante"
}

console.log("Com " + xp + " De xp")
console.log("O herói de nome " + nome_do_heroi + " está no nível de " + nivel) 