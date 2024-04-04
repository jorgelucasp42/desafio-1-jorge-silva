// Questão 1
function calcularMedia() {
    let nota1 = 8;
    let nota2 = 9;
    let nota3 = 7;
    let media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado1").innerHTML = "Resposta da questão 1: A média final da Aline é: " + media.toFixed(2)+".";
}

// Questão 2
function encontrarMenorEMaior() {
    let numeros = [15, 8, 90, 75, 102, 6, 2];
    let menorNumero = numeros[0];
    let maiorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    document.getElementById("resultado2").innerHTML = "Resposta da questão 2: O menor número é: " + menorNumero + ". O maior número é: " + maiorNumero+".";
}

// Questão 3
function ordenarFrascos() {
    let frascos = [12, 5, 23, 17, 8, 14, 3, 19];
    frascos.sort(function(a, b) {
      return a - b;
    });
    document.getElementById("resultado3").innerHTML = "Resposta da questão 3: Frascos ordenados em ordem crescente: " + frascos.join(", ")+".";
}

// Questão 4
function filtrarNumerosPrimos() {
    function ehPrimo(numero) {
        if (numero <= 1) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }
    let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
    let numerosPrimos = numeros.filter(n => ehPrimo(n));
    document.getElementById("resultado4").innerHTML = "Resposta da questão 4: Números primos: " + numerosPrimos.join(", ")+".";
}

// Questão 5
function contarPalavras() {
    let frase = "What is Lorem Ipsum?";
    // Dividindo a frase e contando 
    let numeroDePalavras = frase.split(" ").length;
    document.getElementById("resultado5").innerHTML = "Resposta da questão 5: O número de palavras na frase é: " + numeroDePalavras+".";
}

// Questão 6
function calcularFatorial() {
    let numero = 12;
    let fatorial = 1; 

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById("resultado6").innerHTML = "Resposta da questão 6: O fatorial de 12 é: " + fatorial;
}

// Questão 7
function calcularTotalCompra() {
    let precoItem1 = 2.50;
    let precoItem2 = 3.75;
    let precoItem3 = 1.99;
    let totalCompra = precoItem1 + precoItem2 + precoItem3;
    document.getElementById("resultado7").innerHTML = "Resposta da questão 7: O total da compra é: R$ " + totalCompra.toFixed(2) + ".";
}

// Questão 8
function calcularMultaAtraso() {
    let diasAtraso = 7;
    let taxaMultaPorDia = 0.50;
    let totalMulta = diasAtraso * taxaMultaPorDia;
    document.getElementById("resultado8").innerHTML = "Resposta da questão 8: O total da multa por atraso é: R$ " + totalMulta.toFixed(2) + ".";
}

// Questão 9
function calcularVidaRestante() {
    let pontosDeVidaInicial = 100;
    let danoPorAtaque = 20;
    let numeroDeAtaques = 3;
    let pontosDeVidaRestantes = pontosDeVidaInicial - (danoPorAtaque * numeroDeAtaques);
    document.getElementById("resultado9").innerHTML = "Resposta da questão 9: Após três ataques, os pontos de vida restantes são: " + pontosDeVidaRestantes + ".";
}

function contarLetrasMaiusculas() {
    let frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === frase[i].toUpperCase() && frase[i] !== ' ' && frase[i].match(/[A-Z]/i)) {
            contador++;
        }
    }
    document.getElementById("resultado10").innerHTML = "Resposta da questão 10: O número de letras maiúsculas na string é: " + contador + ".";
}

// Questão 11
function calcularIdade() {
    let dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
        document.getElementById("resultado11").innerHTML = "Por favor, insira a data de nascimento.";
        return;
    }
    let hoje = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    let m = hoje.getMonth() - dataNasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    document.getElementById("resultado11").innerHTML = "A idade da pessoa é: " + idade + " anos.";
}
// Chamando as funções para a página
window.onload = function() {
    calcularMedia();
    encontrarMenorEMaior();
    ordenarFrascos();
    filtrarNumerosPrimos();
    contarPalavras();
    calcularFatorial();
    calcularTotalCompra(); 
    calcularMultaAtraso();
    calcularVidaRestante();
    contarLetrasMaiusculas();
}


