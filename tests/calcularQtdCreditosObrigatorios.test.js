const calcularQtdCreditosObrigatorios = require("../utility/calcularQtdCreditosObrigatorios");

test("Calcular a quantidade de créditos de um curso", () => {
  const curso = {
    nome: "Curso01",
    tipo: "Graduação",
    disciplinas: [
      { nome: "Disciplina01", creditos: 5, obrigatoria: true },
      { nome: "Disciplina02", creditos: 3, obrigatoria: true },
      { nome: "Disciplina03", creditos: 4, obrigatoria: true },
    ],
  };

  expect(calcularQtdCreditosObrigatorios(curso)).toEqual(12);
});

test("Calcular a quantidade de créditos obrigatórios de um curso", () => {
  const curso = {
    nome: "Curso01",
    tipo: "Graduação",
    disciplinas: [
      { nome: "Disciplina01", creditos: 5, obrigatoria: false },
      { nome: "Disciplina02", creditos: 3, obrigatoria: true },
      { nome: "Disciplina03", creditos: 4, obrigatoria: true },
    ],
  };

  expect(calcularQtdCreditosObrigatorios(curso)).toEqual(7);
});
