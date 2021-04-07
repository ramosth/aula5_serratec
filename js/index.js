//funcoesBase();
// inicio();
// inicio1();
inicio2();

// FUNÇÕES

function funcoesBase() {
  let a = 10, b = 11, c = 12;
  let soma = a * b * c;
  let multiplica = a + b + c;
  let divisao = a / b / c;
  let subtracao = a - b - c;
  document.write(`A soma será ${soma} <br>`);
  document.write(`A subtracao será ${multiplica} <br>`);
  document.write(`A divisão será ${divisao} <br>`);
  document.write(`A subtração será ${subtracao} <br>`);
}

function inicio() {
  let numero, soma = 0;
  let saida = true;

  while (saida) {

    numero = prompt("Informe um número:");

    if (numero < 0) {
      saida = false;
    } else {
      soma += numero;
    }
  }

  document.write(`A soma dos números é: ${soma}`);
}

function inicio1() {
  let nome, nomeMaisNovo = "", nomeMaisVelho = "";
  let idade, idadeMaxima = 0, idadeMinima = 99999;

  for (var cont = 0; cont < 3; cont++) {
    nome = prompt("Informe o nome da pessoa:");
    idade = prompt("Informe o idade:");

    if (idade < idadeMinima) {
      idadeMinima = idade;
      nomeMaisNovo = nome;
    }

    if (idade > idadeMaxima) {
      idadeMaxima = idade;
      nomeMaisVelho = nome;
    }

  }

  document.write(`<p>A pessoa mais velha é: ${nomeMaisVelho} com idade de: ${idadeMaxima} </p>`);

  document.write(`<p>A pessoa mais nova é: ${nomeMaisNovo} com idade de: ${idadeMinima} </p>`);
}

function inicio2() {
  let numero, contMenorCem = 0, contMenorDoz = 0, contMaiorDoz = 0, contador = 1;

  // para perguntar só 5 vezes
  while (contador <= 5) {
    numero = prompt("Informe um número:");

    // verificação do número entre 0 e 100
    if (numero <= 100) {
      contMenorCem++;
    } else if (numero > 100 && numero <= 200) {
      contMenorDoz++;
    } else {
      contMaiorDoz++;
    }

    contador++;
  }
  document.write(`<p>A quantidade de numeros entre 0 e 100 é de: ${contMenorCem}</p>`);
  document.write(`<p>A quantidade de numeros entre 101 e 200 é de: ${contMenorDoz}</p>`);
  document.write(`<p>A quantidade de numeros maior que 200 é de: ${contMaiorDoz}</p>`);
}