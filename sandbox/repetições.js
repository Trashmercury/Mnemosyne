function exercicioRep01 () {

  for (let contador = 1; contador <= 10; contador++) {
   
    console.log(`contagem: ${contador}`);

}

    let divDeLogs = document.querySelector(".logs");
    let paragrafo = document.createElement("p");

    paragrafo.innerHTML = "Exercicio 01 de repetições executado, confira o console";

    divDeLogs.appendChild(paragrafo);

}

function exercicioRep02 () {
let num = prompt("Digite um numero para tabuada:")
for (let contador = 1; contador <= 10; contador++) {

let valorCaculado = num * contador;

console.log("Valor calculadora" , valorCaculado);

}

}

//exercicio3
//let num = prompt("Digite um numero:")
//let valorTotal = 0;
//for (let contador = 1; contador <= num; contador++) {
//   valorTotal = valorTotal + contador
//} console.log("A soma dos numeros 1 ate" , num, "e:" ,valorTotal)

//exercicio1 intermediario
//for (let num  = 1; num <= 50; num++) {

//if (num % 2 == 0) { 

//console.log(num);

// }

//}
//exercicio3 intermediario
//let num = prompt("Digite um numero para contagem regressiva:");
//while (num >= 0) {
// console.log(num);
//num--;
//}

//exercicio2 intermediario
//let numeroAleatorio = Math.floor(Math.random() * 100);

//let chute = null;

//while (chute != numeroAleatorio) {

 //   chute = parseInt(prompt("Chute um número:"));

//    if (chute != numeroAleatorio) {

    //    if (chute > numeroAleatorio) {
    
    //        alert("Chutou alto.");
    
  //      } else {
    
    //        alert("Chutou baixo.");
    
  //      }

  //  }

//}

//alert("Você acertou!");

//exercicio1 avanc
// let num = prompt("Digite um numero inteiro positivo:");
// let valorTotal = 0;

// for (let contador = 0; contador < num.length; contador++) {

//   let digito = num[contador];

//   console.log(digito);

//   valorTotal = valorTotal + digito

//   console.log(valorTotal)
//   // num = "12";
//   // num[0] = "1";
//   // num[1] = "2";



// }