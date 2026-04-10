// EX1
// Declare uma variável nome usando let e atribua a ela o seu nome.
let nome = "Leticia";

// Declare uma constante anoNascimento usando const e atribua a ela o seu ano de nascimento.
const anoNascimento = 1995;

// Calcule a sua idade e armazene-a em uma variável idade usando let.
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

// Declare uma variável isEstudante e atribua a ela um valor booleano (true ou false).
let isEstudante = true;

// Imprima no console o valor e o tipo de cada uma dessas variáveis usando console.log() e o operador typeof.
console.log(`Nome: [${nome}] (${typeof(nome)})`);
console.log(`Ano de Nascimento: [${anoNascimento}] (${typeof(anoNascimento)})`);
console.log(`Idade: [${idade}] (${typeof(idade)})`);
console.log(`É estudante?: [${isEstudante}] (${typeof(isEstudante)})`);


//EX2
// Crie duas variáveis num1 e num2 com valores numéricos de sua escolha.
let num1 = 9;
let num2 = 3;

// Realize as quatro operações aritméticas básicas (+, -, *, /) entre num1 e num2 e imprima os resultados.
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Verifique se num1 é maior que num2 e imprima o resultado.
console.log(num1 > num2);

// Verifique se num1 é igual a num2 usando o operador de igualdade estrita (===) e imprima o resultado.
console.log(num1 === num2);

// Crie uma variável nota e atribua a ela um valor entre 0 e 100.
// Usando if/else, imprima a classificação da nota:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Abaixo de 60: "F"
let nota = 9.99;

if (nota >= 90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
} else if (nota >= 60){
    console.log("D");
} else {
    console.log("E");
}

//EX3
// Use um loop for para imprimir os números de 1 a 10.
for (let i = 1; i <= 10; i++){
    console.log(i);    
}

// Use um loop while para imprimir os números pares de 0 a 20.
let num = 0;
while (num < 21){
    if (num % 2 === 0){
        console.log(num);        
    }
    num++;
}

// Crie um array de nomes. Use um loop for...of para imprimir cada nome no console.
let nomes = ["Luca", "Henrique", "Leticia"]
for (let nome of nomes){
    console.log(nome);
}

// Crie um objeto com algumas propriedades (nome, idade, cidade).
const pessoa = {
    nome: 'Leticia',
    idade: 31,
    cidade: "Joinville"
}

// Use um loop for...in para imprimir cada chave e seu respectivo valor.
for (let chave in pessoa){
    console.log(`${chave} - ${pessoa[chave]}`)
}

for (let [chave, valor] of Object.entries(pessoa)){
    console.log(`${chave} - ${valor}`)
}

//EX4
// Crie uma função chamada somar que receba dois números como parâmetros e retorne a soma deles.
function somar(v1, v2){
    return v1 + v2
}
console.log(somar(2,2));

// Crie uma função chamada saudacao que receba um nome como parâmetro e imprima "Olá, [nome]!" no console. Use um parâmetro padrão para o nome caso nenhum seja fornecido.
const saudacao = (nome="Pessoal") => {
    console.log(`Olá, ${nome}!`);
}
saudacao()
saudacao("3info")

// Crie uma função ehPar que receba um número e retorne true se for par e false se for ímpar.
const ehPar = (num) => num % 2 === 0;
console.log(ehPar(7));
console.log(ehPar(8));
console.log(ehPar(-24));

// Crie uma função de alta ordem aplicarOperacao que receba uma função (callback) e dois números. Ela deve executar a função callback com os dois números e retornar o resultado.
const aplicarOperacao = (callback, v1, v2) => {
    return callback(v1, v2)
}
console.log(aplicarOperacao(somar, 3, 6));

//EX5
// Crie um array chamado cores com pelo menos 3 cores.
let cores = ['Azul', 'Cinza', 'Branco']

// Adicione uma nova cor ao final do array.
cores.push('Preto')

// Remova a primeira cor do array.
cores.shift()

// Imprima o array resultante.
console.log(cores);

// Crie um objeto livro com as propriedades titulo, autor e anoPublicacao.
const livro = {
    titulo: "1984",
    autor: ["Eric Arthur Blair", "George Orwell"],
    anoPublicacao: 1949
}

// Adicione uma nova propriedade genero ao objeto livro.
// livro["genero"] = "Ficção distópica"
livro.genero = "Ficção"
// console.log(livro);

// Imprima o titulo e o autor do livro.
console.log(`Titulo: ${livro.titulo}\nAutor: ${livro.autor[1]}`);

// Use Object.keys() e Object.values() para imprimir as chaves e os valores do objeto livro.
console.log(Object.keys(livro));
console.log(Object.values(livro));
console.log(Object.entries(livro));