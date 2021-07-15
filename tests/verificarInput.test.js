const verificarInput = require("../utility/verificarInput");

test("Input nao é array", () => {
  expect(verificarInput(1)).toEqual(false);
});

test("Input é array vazia", () => {
  expect(verificarInput([])).toEqual(false);
});

test("Input é array com um objeto vazio", () => {
  expect(verificarInput([{}])).toEqual(false);
});

test("Input é array com um objeto que não possui as propriedades necessarias", () => {
  expect(verificarInput([{ prop: 1 }])).toEqual(false);
});

test("Input esta correto", () => {
  expect(
    verificarInput([
      {
        descricao: "Curso01",
        tipo: "Doutorado",
        disciplinas: [
          { descricao: "Disciplina01", creditos: 6, obrigatoria: true },
          { descricao: "Disciplina02", creditos: 4, obrigatoria: false },
        ],
      },
    ])
  ).toEqual(true);
});
