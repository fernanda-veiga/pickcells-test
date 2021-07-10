const criarDisciplina = require("../utility/criarDisciplina");

test("Criar uma discplina", () =>
  expect(criarDisciplina("Algoritmos e Programação", 6, true)).toEqual({
    nome: "Algoritmos e Programação",
    creditos: 6,
    obrigatoria: true,
  }));
