"use strict";
const alunos = [
    { nome: 'carlos',
        cursos: ['front-end', 'UX/UI'],
        idade: 25,
    },
    { nome: 'Ana',
        cursos: ['front-end', 'Python'],
        idade: 23,
    }
];
alunos.push({
    nome: 'Julia',
    cursos: ['arquitetura'],
    idade: 29,
});
const novoAluno = {
    nome: 'Lucas',
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
