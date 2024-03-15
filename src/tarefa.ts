// Função de multiplicação
function multiplicação(x: number, y: number): number {
    return x * y;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Exemplos do uso das funções
const resultadoMultiplicação = multiplicação(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicação);

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao);