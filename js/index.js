//funcoesBase();
// inicio4();
// fatorial(7);
// preco();
// mediaAluno();
// salario();
// tabuada();
// salarioComissao();
suco();

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

function inicio3() {
  let numero = 1, contEntreNumeros = 0, contForaNumeros = 0;

  // se numero for 0 para a execução
  while (numero != 0) {
    numero = prompt("Informe um número:");

    // verificação do número entre 100 e 200
    if (numero > 100 && numero <= 200) {
      contEntreNumeros++;
    } else {
      contForaNumeros++;
    }
  }
  document.write(`<p>A quantidade de numeros entre 100 e 200 é de: ${contEntreNumeros}</p>`);
  document.write(`<p>A quantidade de numeros fora dessa faixa é: ${contForaNumeros}</p>`);
}

function inicio4() {
  let numeros = [];
  let numero = 1;
  let maior = 0;

  // adiciona todos os numeros digitados no prompt para dentro do vetor
  while (numero != -1) {
    numero = parseInt(prompt("Informe um número:"));
    numeros.push(numero);
  }

  for (var iterator of numeros) {
    maior = iterator > maior ? iterator : maior;
  }
  document.write(`<p>O maior número do vetor é: ${maior}</p>`);

  document.write(`Vetor de Números:`);
  for (var iterator of numeros) {
    document.write(`${iterator}  `);
  }

}

function fatorial(numero) {
  let fat = 1;

  for (var cont = 1; cont <= numero; cont++) {
    fat *= cont;
  }
  document.write(`<p>O fatorial de ${numero} é: ${fat}</p>`);
}

function preco() {
  let precoFinal = 0, venda = {};
  let totalVenda = [];
  let codigoPreco = [
    { codigo: 'abcd', preco: 5.30 },
    { codigo: 'xypk', preco: 6.00 },
    { codigo: 'klmp', preco: 3.20 },
    { codigo: 'qrst', preco: 2.50 },
  ];
  let resposta = prompt(`Deseja colocar um item na compra: \nS para sim \n N para Não`);

  while (resposta == 's') {
    venda = {
      codigo: prompt("Informe o codigo"),
      quantidade: prompt("Informe a quantidade")
    };

    totalVenda.push(venda);

    resposta = prompt(`Deseja colocar um item na compra: \nS para sim \n N para Não`);
  }

  for (const contTotalVenda of totalVenda) {
    for (const contCodigoPreco of codigoPreco) {
      if (contTotalVenda.codigo == contCodigoPreco.codigo) {
        precoFinal += (contCodigoPreco.preco * contTotalVenda.quantidade);
      }
    }
  }
  document.write(`<p>Preço final: R$ ${precoFinal.toFixed(2).replace(".", ",")}</p>`);

}

function mediaAluno() {
  let contador = 0, vetorNotas = [];
  let soma = 0, media = 0;

  while (contador < 3) {
    var nota = parseInt(prompt("Informe a nota"));
    vetorNotas.push(nota);
    contador++;
  }

  for (const iterator of vetorNotas) {
    soma += iterator;
  }
  media = (soma / 3).toFixed(1);

  if (media >= 70) {
    document.write(`<p>Aprovado, com média: ${media}</p>`);
  } else if (media <= 40) {
    document.write(`<p>Reprovado, com média: ${media}</p>`);
  } else {
    document.write(`<p>Recuperação, com média: ${media}</p>`);
  }

}

function salario() {
  var valorHora = 10, valorHoraExtra = 15;
  var hora = parseInt(prompt("Informe a quantidade de hora trabalhada"));
  var horaExtra = parseInt(prompt("Informe a quantidade de hora Extra feita"));

  var salarioBruto = valorHora * hora + valorHoraExtra * horaExtra;
  document.write(`<p>Salario Bruto: R$ ${salarioBruto.toFixed(2).replace(".",",")}</p>`);

}

function tabuada(){
  var numero = parseInt(prompt("Informe um numero"));
  for (let index = 0; index < numero; index++) {
    var result = numero * index;
    document.write(`<p> ${index} * ${numero} = ${result}</p>`);
  }
}

function salarioComissao(){
  var salario = parseInt(prompt("Informe o seu salario"));
  var comissao = parseInt(prompt("Informe o valor total das vendas feitas"));

  var salarioFinal = salario + comissao*0.04;
  document.write(`<p> Salário Final com comissão: ${salarioFinal.toFixed(2).replace(".",",")}</p>`);
}

function suco() {
  var litros = parseInt(prompt("Informe quanto litro de suco quer fazer"));
  var parteSuco = 2*litros , parteAgua = 8*litros;

  document.write(`<p> Para fazer ${litros} de suco, será preciso ${parteAgua} partes de água e ${parteSuco} parte de suco.</p>`);

}