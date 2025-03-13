
Correto
var x = 5;
console.log(x);
let y = 10;
console.log(y);

____________________

Correto
function soma(a, b) {
    if (a === 0 && b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0)); 

____________________

Correto
function calcularPreco(tipo) {
    let preco;
    switch(tipo) {
        case "eletrônico":
            preco = 1000;
            break;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }
    return preco;
}
console.log(calcularPreco("eletrônico"));

____________________

let numeros = [1, 2, 3, 4, 5];
let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);
console.log(resultado); 

____________________

let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista); 

____________________

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }
  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
const funcionario = new Funcionario ("Rafael", 18, 1000)
funcionario.apresentar();

____________________

var soma = 0
function somaArray(numeros) {

  for (i = 0; i < numeros.length; i++) {
    soma += 2 * numeros[i];
  }
  return soma;
}
console.log(somaArray([1, 2, 3, 4]));

_________________

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  calcularDesconto() {
    let desconto = this.preco * 0.9
    console.log("O produto", this.nome, "está com desconto de 10% e está custando R$", desconto.toFixed(2))
  }
}

class Livro extends Produto{
  constructor(nome, preco, calcularDesconto) {
  super(nome, preco, calcularDesconto)
  }
  calcularDesconto() {
    let desconto = this.preco * 0.8
    console.log("O livro", this.nome, "está com desconto de 20% e está custando R$", desconto.toFixed(2))
  }
}

const produto = new Livro ("O Pequeno Príncipe", 100)
produto.calcularDesconto();




