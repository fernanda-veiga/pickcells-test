const criarCurso = require("./criarCurso");
const disciplinas = [
  { nome: "Algoritmos e Programação", creditos: 6, obrigatoria: true },
  { nome: "Estatística", creditos: 2, obrigatoria: false },
];

test("Criar um curso", () =>
  expect(criarCurso("Ciência da Computação", "Graduação", disciplinas)).toEqual(
    {
      nome: "Ciência da Computação",
      tipo: "Graduação",
      disciplinas: [
        { nome: "Algoritmos e Programação", creditos: 6, obrigatoria: true },
        { nome: "Estatística", creditos: 2, obrigatoria: false },
      ],
    }
  ));
