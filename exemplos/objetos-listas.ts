const person = {
    nome: 'Artur',
    idade: 34,
    profissao: 'Engenheiro Eletricista'
}

person.idade = 35;

const grazi: {nome: string, idade: number, profissao: string} = {
    nome: "Grazi",
    idade: 30,
    profissao: "Engenheira"
}

const simba: {nome: string, idade: number, profissao: string} = {
    nome: "Simba",
    idade: 2,
    profissao: "Gato"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
    Gata,
    Estudante
}

interface Pessoa {
    nome: string,
    idade: number,
    profissão?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const leia: Pessoa = {
    nome: 'Leia',
    idade: 1,
    profissão: Profissao.Gata
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 0,
    profissão: Profissao.Gata
}

const pedrinho: Estudante = {
    nome: 'Pedrinho',
    idade: 7,
    profissão: Profissao.Estudante,
    materias: ['Matemática', 'Português']
}

const sarinha: Estudante = {
    nome: 'Sarinha',
    idade: 11,
    materias: ['História', 'Geografia']
}

function listar(lista: string[]) {
    for (let item of lista) {
        console.log('- ', item)
    }
}

listar(pedrinho.materias);
listar(sarinha.materias);