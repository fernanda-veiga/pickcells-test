const pegarCursoComMaisCreditosObrigatorios = require("../pegarCursoComMaisCreditosObrigatorios");
const cursosExemplo = require("../cursos.js");

test("Input é vazio", () => {
  expect(pegarCursoComMaisCreditosObrigatorios()).toEqual();
});

test("Input nao é array", () => {
  expect(pegarCursoComMaisCreditosObrigatorios(1)).toEqual();
});

test("Input é array vazia", () => {
  expect(pegarCursoComMaisCreditosObrigatorios([])).toEqual();
});

test("Pegar curso com mais créditos", () => {
  const cursos = [
    {
      curso: "Curso01",
      tipo: "Graduação",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 5, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: true },
        { descricao: "Disciplina03", creditos: 4, obrigatoria: true },
      ],
    },
    {
      curso: "Curso02",
      tipo: "Mestrado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: true },
        { descricao: "Disciplina03", creditos: 5, obrigatoria: true },
      ],
    },
    {
      curso: "Curso03",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 4, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 2, obrigatoria: true },
        { descricao: "Disciplina03", creditos: 3, obrigatoria: true },
      ],
    },
  ];

  expect(pegarCursoComMaisCreditosObrigatorios(cursos)).toEqual([
    {
      Curso: "Curso02",
      Disciplinas: [
        { Descrição: "Disciplina01", Créditos: 6 },
        { Descrição: "Disciplina02", Créditos: 4 },
        { Descrição: "Disciplina03", Créditos: 5 },
      ],
      ["Créditos Obrigatórios"]: 15,
    },
  ]);
});

test("Pegar curso com mais créditos obrigatórios", () => {
  const cursos = [
    {
      curso: "Curso01",
      tipo: "Graduação",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 5, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 4, obrigatoria: true },
      ],
    },
    {
      curso: "Curso02",
      tipo: "Mestrado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 5, obrigatoria: true },
      ],
    },
    {
      curso: "Curso03",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 4, obrigatoria: true },
        { descricao: "Disciplina02", creditos: 2, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 3, obrigatoria: true },
      ],
    },
  ];

  expect(pegarCursoComMaisCreditosObrigatorios(cursos)).toEqual([
    {
      Curso: "Curso03",
      Disciplinas: [
        { Descrição: "Disciplina01", Créditos: 4 },
        { Descrição: "Disciplina03", Créditos: 3 },
      ],
      ["Créditos Obrigatórios"]: 7,
    },
  ]);
});

test("Pegar curso com mais créditos obrigatórios: empatados por crédito e desempatados por tipo", () => {
  const cursos = [
    {
      curso: "Curso01",
      tipo: "Graduação",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 5, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 4, obrigatoria: true },
      ],
    },
    {
      curso: "Curso02",
      tipo: "Mestrado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 5, obrigatoria: true },
      ],
    },
    {
      curso: "Curso03",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 4, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 2, obrigatoria: true },
        { descricao: "Disciplina03", creditos: 3, obrigatoria: true },
      ],
    },
  ];

  expect(pegarCursoComMaisCreditosObrigatorios(cursos)).toEqual([
    {
      Curso: "Curso03",
      Disciplinas: [
        { Descrição: "Disciplina02", Créditos: 2 },
        { Descrição: "Disciplina03", Créditos: 3 },
      ],
      ["Créditos Obrigatórios"]: 5,
    },
  ]);
});

test("Pegar curso com mais créditos obrigatórios: empatados por crédito e tipo", () => {
  const cursos = [
    {
      curso: "Curso01",
      tipo: "Graduação",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 5, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 3, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 4, obrigatoria: true },
      ],
    },
    {
      curso: "Curso02",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 6, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 4, obrigatoria: false },
        { descricao: "Disciplina03", creditos: 5, obrigatoria: true },
      ],
    },
    {
      curso: "Curso03",
      tipo: "Doutorado",
      disciplinas: [
        { descricao: "Disciplina01", creditos: 4, obrigatoria: false },
        { descricao: "Disciplina02", creditos: 2, obrigatoria: true },
        { descricao: "Disciplina03", creditos: 3, obrigatoria: true },
      ],
    },
  ];

  expect(pegarCursoComMaisCreditosObrigatorios(cursos)).toEqual([
    {
      Curso: "Curso02",
      Disciplinas: [{ Descrição: "Disciplina03", Créditos: 5 }],
      ["Créditos Obrigatórios"]: 5,
    },
    {
      Curso: "Curso03",
      Disciplinas: [
        { Descrição: "Disciplina02", Créditos: 2 },
        { Descrição: "Disciplina03", Créditos: 3 },
      ],
      ["Créditos Obrigatórios"]: 5,
    },
  ]);
});

test("Resposta do exemplo", () => {
  expect(pegarCursoComMaisCreditosObrigatorios(cursosExemplo)).toEqual([
    {
      Curso: "Engenharia de Software",
      Disciplinas: [
        { Descrição: "Algoritmos e Programação", Créditos: 4 },
        { Descrição: "Estatística", Créditos: 6 },
        { Descrição: "Tópicos Avançados em Bancos de Dados", Créditos: 4 },
        { Descrição: "Metodologia Científica", Créditos: 6 },
        {
          Descrição: "Tópicos Avançados em Linguagens de Programação",
          Créditos: 6,
        },
      ],
      ["Créditos Obrigatórios"]: 26,
    },
  ]);
});
