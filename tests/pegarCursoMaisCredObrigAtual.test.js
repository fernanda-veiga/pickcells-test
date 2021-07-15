const pegarCursoMaisCredObrigAtual = require("../utility/pegarCursoMaisCredObrigAtual");

test("Créditos iguais", () => {
  const cursoAtual = {
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

  const cursoComparar = {
    curso: {
      descricao: "Curso02",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 3, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
      ],
    },
    creditos: 6,
  };

  expect(pegarCursoMaisCredObrigAtual(cursoAtual, cursoComparar)).toEqual(
    cursoAtual
  );
});

test("Curso atual com mais créditos", () => {
  const cursoAtual = {
    curso: {
      descricao: "Curso01",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: true },
      ],
    },
    creditos: 10,
  };

  const cursoComparar = {
    curso: {
      descricao: "Curso02",
      tipo: "Mestrado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 3, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
      ],
    },
    creditos: 6,
  };

  expect(pegarCursoMaisCredObrigAtual(cursoAtual, cursoComparar)).toEqual(
    cursoAtual
  );
});

test("Curso para comparar com mais créditos", () => {
  const cursoAtual = {
    curso: {
      descricao: "Curso01",
      tipo: "Mestrado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: false },
      ],
    },
    creditos: 6,
  };

  const cursoComparar = {
    curso: {
      descricao: "Curso02",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 3, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 5, obrigatoria: true },
      ],
    },
    creditos: 8,
  };

  expect(pegarCursoMaisCredObrigAtual(cursoAtual, cursoComparar)).toEqual(
    cursoComparar
  );
});
