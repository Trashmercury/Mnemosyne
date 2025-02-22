//exercicio1 basic
// const numeros = [5, 8, 12, 15, 3, 20, 7];

// const maioresQueDez = numeros.filter(numero => numero > 10);

// console.log(maioresQueDez);

//exercicio2 basic
// const nomes = ["Ana", "Luiz", "Arthur", "Fernanda", "Carlos", "Azazel"];

// const nomesComA = nomes.filter(nome => nome.startsWith("A"));

// console.log(nomesComA)

//exercicio3 intermediario
// const produtos = [

//     { id: 1, nome: "Teclado", preço: 120 },
//     { id: 2, nome: "Mouse", preço: 40 },
//     { id: 3, nome: "Fone de ouvido", preço: 80 },
//     { id: 4, nome: "Caderno", preço: 30}

// ]; 

// const produtosBaratos = produtos.filter(produto => produto.preço <= 40);
// console.log(produtosBaratos);

//exercicio4 intermediario
// const pessoas = [

//     { nomes: "Carlos", idade: 17 },
//     { nomes: "Mariana", idade: 22 },
//     { nomes: "João", idade: 15 },
//     { nomes: "Fernanda", idade: 30 },

// ];

// const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade > 18);
// console.log(maioresDeIdade);

//exercicio5 intermediario
// const palavras = ["sol", "mar", "montanha", "rio", "cachoeira", "nuvem"];

// const palavrasLongas = palavras.filter(palavra => palavra.length > 5);
// console.log(palavrasLongas);

//exercicio6 avanc
// const usuarios = [

//     { nomes: "Ana", ativo: true},
//     { nomes: "Ana", ativo: false},
//     { nomes: "Beatriz", ativo: true},
//     { nomes: "João", ativo: false},

// ]; 

// const usuariosAtivos = usuarios.filter(usuario => usuario.ativo == true);
// console.log(usuariosAtivos);

//exercicio7 avan
// const pedidos = [

//     { id: 1, status: "pendente" },
//     { id: 2, status: "entregue" },
//     { id: 3, status: "cancelado" },
//     { ìd: 4, status: "entregue" },

// ];

// const pedidosEntregues = pedidos.filter(pedido => pedido.status == `entregue`);
// console.log(pedidosEntregues);

//exercicio8 avan
// const alunos = [

//     { nome: "Paula", nota: "8" },
//     { nome: "Miguel", nota: "5"}, 
//     { nome: "Camila", nota: "9"},
//     { nome: "Lucas", nota: "6"},

// ];

// const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
// console.log(alunosAprovados);

//exemplo map
// const numeros = [1, 2, 3, 4, 5]

// const numerosDobrados = numeros.map(numero => numero * 2)

// function dobrarNumero(numero) {

//     return numero * 2

// }

//exercicio map basic1
// const palavras = ["Ola", "Mundo", "JavaScript"];

// const enfatizadas = palavras.map(palavra => palavra + "!!!");
// console.log(enfatizadas);

//exercicio2 map basic
// const nomes = ["ana", "bruno", "carla"];

// const nomesMaiusculos = nomes.map(nome => "Colaborador:" + nome);
// console.log(nomesMaiusculos);

//exercicio3 map intermediario
