const criarCurso = require("./utility/criarCurso");
const criarDisciplina = require("./utility/criarDisciplina");

const cursos = [
  criarCurso("Ciência da Computação", "Graduação", [
    criarDisciplina("Algoritmos e Programação", 6, true),
    criarDisciplina("Matemática Computacional", 4, true),
    criarDisciplina("Estatística", 2, false),
    criarDisciplina("Tópicos Avançados em Bancos de Dados", 6, true),
    criarDisciplina("Metodologia Científica", 4, true),
    criarDisciplina("Tópicos Avançados em Linguagens de Programação", 6, false),
  ]),
  criarCurso("Sistemas de Informação", "Graduação", [
    criarDisciplina("Algoritmos e Programação", 4, false),
    criarDisciplina("Estatística", 4, true),
    criarDisciplina("Empreendedorismo e Inovação", 4, true),
    criarDisciplina("Tópicos Avançados em Bancos de Dados", 6, true),
    criarDisciplina("Metodologia Científica", 4, true),
    criarDisciplina("Tópicos Avançados em Linguagens de Programação", 4, true),
  ]),
  criarCurso("Engenharia de Software", "Mestrado", [
    criarDisciplina("Algoritmos e Programação", 4, true),
    criarDisciplina("Matemática Computacional", 6, false),
    criarDisciplina("Estatística", 6, true),
    criarDisciplina("Tópicos Avançados em Bancos de Dados", 4, true),
    criarDisciplina("Metodologia Científica", 6, true),
    criarDisciplina("Tópicos Avançados em Linguagens de Programação", 6, true),
  ]),
  criarCurso("Inteligência Computacional", "Mestrado", [
    criarDisciplina("Algoritmos e Programação", 4, false),
    criarDisciplina("Matemática Computacional", 4, false),
    criarDisciplina("Estatística", 6, true),
    criarDisciplina("Empreendedorismo e Inovação", 6, false),
    criarDisciplina("Metodologia Científica", 6, true),
    criarDisciplina("Tópicos Avançados em Linguagens de Programação", 6, true),
  ]),
  criarCurso("Ciência da Computação", "Doutorado", [
    criarDisciplina("Algoritmos e Programação", 6, true),
    criarDisciplina("Matemática Computacional", 6, true),
    criarDisciplina("Estatística", 4, false),
    criarDisciplina("Tópicos Avançados em Bancos de Dados", 4, false),
    criarDisciplina("Metodologia Científica", 6, true),
    criarDisciplina("Tópicos Avançados em Linguagens de Programação", 4, true),
  ]),
  criarCurso("Inteligência Artificial", "Doutorado", [
    criarDisciplina("Algoritmos e Programação", 6, true),
    criarDisciplina("Matemática Computacional", 4, false),
    criarDisciplina("Estatística", 6, false),
    criarDisciplina("Empreendedorismo e Inovação", 2, true),
    criarDisciplina("Tópicos Avançados em Bancos de Dados", 2, false),
    criarDisciplina("Metodologia Científica", 6, true),
  ]),
];

module.exports = cursos;
