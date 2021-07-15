const tratarCredIguais = require("../utility/tratarCredIguais");

test("Cursos de mesmo tipo", () => {
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

  expect(tratarCredIguais(cursoAtual, cursoComparar)).toEqual(cursoAtual);
});

test("Curso atual com tipo que vale mais", () => {
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
      tipo: "Mestrado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 3, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
      ],
    },
    creditos: 6,
  };

  expect(tratarCredIguais(cursoAtual, cursoComparar)).toEqual(cursoAtual);
});

test("Curso para comparar com tipo que vale mais", () => {
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
        { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
      ],
    },
    creditos: 6,
  };

  expect(tratarCredIguais(cursoAtual, cursoComparar)).toEqual(cursoComparar);
});
