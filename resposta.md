1 - (c)

 O código irá imprimir como undefined tendo em vista que o console.log tenta imprimir as variáveis antes delas serem de fato criadas.
 Código correto:

``` javascript
var x = 5;
console.log(x);
let y = 10;
console.log(y);
```

2 - (b)

 Da maneira como está, o código retornará sempre a mensagem especificada dentro de if já que a condição para que isso ocorra está sendo atendida ("b" exatamente igual a zero e "a" sem nenhuma condição especificada). Para que o código faça sentido devemos alterar a condição dentro de "if" para que a mensagem ocorra somente quando o resultado da soma for igual a 0, e para que o código execute isso devemos muda-lo para:

``` javascript
  function soma(a, b) {
    if (a === 0 && b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
 }
 console.log(soma(2, 0));
```

3 - (b)
 Nesse caso, a intenção era que fosse imprimido "1000", mas é imprimido "200" em vista de que não foi colocado o "break" para definir o limite do caso "eletrônicos", sendo assim ele imprime o último valor dado até o "break". O código que imprime corretamente o preço de "eletrônico" seria:

``` javascript
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
```

4 - (d)
 O valor retornado é 24. Ocorre um passo a passo dentro do código:
 Primeiro é definida a array "numeros" que é [1, 2, 3, 4 , 5]
 Depois, é definida a variável "resultado", que é definido como uma sequência de operações:
 Em "numeros.map(x => x * 2)" todas os elementos de dentron da array "numeros" possuem seu valor dobrado, ficando [2, 4, 6, 8, 10];
 Depois disso ".filter(x => x > 5)" é responsável por filtrar a array para ela conter apenas números maiores que 5, assim a array se torna [6, 8, 10];
 Em seguida ".reduce((a, b) => a + b, 0);" é introduzido, reduzindo a array em um só número. Dentro dele "a" é o valor acumulativo e começa em 0 como definido e "b" percorre os itens da array somando em "a". No final as somas que acontecem é 0 + 6 = 6; 6 + 8 = 14 e 14 + 10 = 24. 

 ``` javascript
let numeros = [1, 2, 3, 4, 5];
let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);
console.log(resultado);
```

5 - (c)
 O conteúdo final será a array original sem os elementos "maçã" e "uva" e com a adição de "abacaxi" e "manga" no lugar desses antigos elementos respectivamente. Isso ocorre pois a função "lista.splice(1, 2, "abacaxi", "manga")" serve para modificar o conteúdo de uma array. O número "1" dentro de parenteses indica a partir de qual elemento começa a exclusão dos elementos da lista (nesse caso começa pelo segundo item que é "maçã"). O número "2" indica quantos itens serão removidos (nesse caso "maçã" e "uva" que estão em seguida um do outro). Por fim é colocado o nome, em string, dos elementos que serão adicionados no lugar daqueles removidos (nesse caso "abacaxi" e "manga").

 ``` javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

6 - (a)
 Ambas as afirmações estão certas. Dentro de javascript as classes podem apresentar heranças entre si de forma a herdar métodos e propriedades de outras classes e isso ocorre por meio da palavra-chave "extends" e por isso a segunda frase justifica a primeira. Por exemplo, caso quisermos criar a classe "cachorro" e ja temos a classe "animal", podemos herdar os métodos e atributos da classe geral "animal" para não termos que repetir as funções básicas de todos animais, e dentro de "cachorro" definimos então as suas peculiaridades.

7 - (a)
 A primeira afirmação está correta pois por meio da palavra-chave "extends" a classe "funcionario" herda da classe "pessoas" os atributos "nome" e "idade", que é comum a todas pessoas e por isso abrange uma classe mais geral. A segunda também está correta, caso o "apresentar" da classe pessoa não fosse chamado por meio do "super.apresentar" o console.log iria imprimir apenas o último apresentar, que se refere à classe "funcionario". Já a terceira é errada pois o Javascript suporta sim herança entre classes (como pode ver no exemplo) e o código funciona corretamente quando apresentado as informações de um funcionário novo.

 ``` javascript

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
```

8 - (b)
 A asserção está correta pois de fato o polimorfismo permite que diferentes objetos reajam de maneira diferentes a uma só mensagem. Já a segunda é falsa pois dentro de Javascript o método de sobrecarga não pode ocorrer, mas sim a de sobrescrita, tendo em vista que na linguagem Javascript, caso haja diversos métodos com nomes iguais, apenas o último método será lido.

9 - O código corrigido deve ficar da seguinte maneira:

``` javascript
 var soma = 0 //A variável soma é definida e inicia valendo 0. Sem isso, "soma" ficaria indefinido.
function somaArray(numeros) { //Adiciona a função chamada "somaArray" e abre as chaves para definir o que ela fará.

  for (i = 0; i < numeros.length; i++) { //"numeros.size" é substituído por "numeros.length", já que esse é o correto para percorrer listas. Para "i" começando no elemento 0, percorrendo por toda a lista e somando sempre mais um para percorre-la faça:
  
    soma += 2 * numeros[i]; //Define que a soma é igual aos números da lista vezes 2, e soma todos por meio de "+=". Caso seja apenas "=" apenas o ultimo número seria dobrado e não somaria todos valores.
  }
  return soma; //Retorna o valor da soma final.
}
console.log(somaArray([1, 2, 3, 4])); //Imprime a função para a array definida.
```

10 - Segue exemplo de código pedido:

``` javascript
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
```
 Dentro do código, a herança entre as classes é implementada tanto pela palavra-chave "extends" quanto pela palavra-chave "super", que herda da classe pai (produto) os atributos "nome", "preco" e o método "calcularDesconto()". Dessa forma, por o "calcularDesconto()" estar incluido dentro do super e ser herdado pela calsse "Livro" que é possível realizar a modificação do método para um novo desconto.
