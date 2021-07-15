const calcularQtdCreditosObrigatorios = require("../utility/calcularQtdCreditosObrigatorios");

test("Calcular a quantidade de créditos de um curso", () => {
  const curso = {
    curso: "Curso01",
    tipo: "Graduação",
    disciplinas: [
      { descricao: "Disciplina01", creditos: 5, obrigatoria: true },
      { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
      { descricao: "Disciplina03", creditos: 4, obrigatoria: true },
    ],
  };

  expect(calcularQtdCreditosObrigatorios(curso)).toEqual(12);
});

test("Calcular a quantidade de créditos obrigatórios de um curso", () => {
  const curso = {
    curso: "Curso01",
    tipo: "Graduação",
    disciplinas: [
      { descricao: "Disciplina01", creditos: 5, obrigatoria: false },
      { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
      { descricao: "Disciplina03", creditos: 4, obrigatoria: true },
    ],
  };

  expect(calcularQtdCreditosObrigatorios(curso)).toEqual(7);
});
