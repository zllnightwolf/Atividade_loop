let jogador_1 = Number(prompt("Escolha um número entre 1 e 10"));
let jogador_2 = Number(prompt("Tente adivinhar o número do primeiro jogador"))
let texto = "";
let tentativas = 1;

while(jogador_1 != jogador_2){
    jogador_2 = prompt("errou tente de novo Jogador 2")
    tentativas++;
    if(jogador_1 == jogador_2){
        texto = "Jogador 2 acertou o numero " + jogador_1 + " em" + tentativas + " tentativas";
        document.getElementById("resul").innerHTML = texto;
    }
}
if(jogador_2 = jogador_1){
    texto = "Jogador 2 acertou o número " + jogador_1 + " em " + tentativas + " tentativas";
    document.getElementById("resul").innerHTML = texto;
}