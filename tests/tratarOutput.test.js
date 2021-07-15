const tratarOutput = require("../utility/tratarOutput");

test("Tratar output", () => {
  const cursoExemplo = {
    curso: {
      descricao: "Curso01",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: false },
      ],
    },
    creditos: 6,
  };

  expect(tratarOutput(cursoExemplo)).toEqual({
    curso: "Curso01",
    disciplinas: [
      { descricao: "Disciplina01", creditos: 6 },
      { descricao: "Disciplina02", creditos: 4 },
    ],
    creditosObrig: 6,
  });
});
