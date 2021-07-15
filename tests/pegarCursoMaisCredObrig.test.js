const pegarCursoMaisCredObrig = require("../pegarCursoMaisCredObrig");
const cursosExemplo = require("../data/cursos");

test("Resposta do exemplo", () => {
  expect(pegarCursoMaisCredObrig(cursosExemplo)).toEqual({
    curso: "Engenharia de Software",
    disciplinas: [
      { descricao: "Algoritmos e Programação", creditos: 4 },
      { descricao: "Matemática Computacional", creditos: 6 },
      { descricao: "Estatística", creditos: 6 },
      { descricao: "Tópicos Avançados em Bancos de Dados", creditos: 4 },
      { descricao: "Metodologia Científica", creditos: 6 },
      {
        descricao: "Tópicos Avançados em Linguagens de Programação",
        creditos: 6,
      },
    ],
    creditosObrig: 26,
  });
});
