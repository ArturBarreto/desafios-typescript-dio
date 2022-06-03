"use strict";
const person = {
    nome: 'Artur',
    idade: 34,
    profissao: 'Engenheiro Eletricista'
};
person.idade = 35;
const grazi = {
    nome: "Grazi",
    idade: 30,
    profissao: "Engenheira"
};
const simba = {
    nome: "Simba",
    idade: 2,
    profissao: "Gato"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
    Profissao[Profissao["Gata"] = 4] = "Gata";
    Profissao[Profissao["Estudante"] = 5] = "Estudante";
})(Profissao || (Profissao = {}));
const leia = {
    nome: 'Leia',
    idade: 1,
    profissão: Profissao.Gata
};
const maria = {
    nome: 'Maria',
    idade: 0,
    profissão: Profissao.Gata
};
const pedrinho = {
    nome: 'Pedrinho',
    idade: 7,
    profissão: Profissao.Estudante,
    materias: ['Matemática', 'Português']
};
const sarinha = {
    nome: 'Sarinha',
    idade: 11,
    materias: ['História', 'Geografia']
};
function listar(lista) {
    for (let item of lista) {
        console.log('- ', item);
    }
}
listar(pedrinho.materias);
listar(sarinha.materias);
