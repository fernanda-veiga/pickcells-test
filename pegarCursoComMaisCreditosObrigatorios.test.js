const pegarCursoComMaisCreditosObrigatorios = require("./pegarCursoComMaisCreditosObrigatorios");

test("Pegar curso com mais créditos", () => {
  const cursos = [
    {
      nome: "Curso01",
      tipo: "Graduação",
      disciplinas: [
        { nome: "Disciplina01", creditos: 5, obrigatoria: true },
        { nome: "Disciplina02", creditos: 3, obrigatoria: true },
        { nome: "Disciplina03", creditos: 4, obrigatoria: true },
      ],
    },
    {
      nome: "Curso02",
      tipo: "Mestrado",
      disciplinas: [
        { nome: "Disciplina01", creditos: 6, obrigatoria: true },
        { nome: "Disciplina02", creditos: 4, obrigatoria: true },
        { nome: "Disciplina03", creditos: 5, obrigatoria: true },
      ],
    },
    {
      nome: "Curso03",
      tipo: "Doutorado",
      disciplinas: [
        { nome: "Disciplina01", creditos: 4, obrigatoria: true },
        { nome: "Disciplina02", creditos: 2, obrigatoria: true },
        { nome: "Disciplina03", creditos: 3, obrigatoria: true },
      ],
    },
  ];

  expect(pegarCursoComMaisCreditosObrigatorios(cursos)).toEqual({
    nome: "Curso02",
    tipo: "Mestrado",
    disciplinas: [
      { nome: "Disciplina01", creditos: 6, obrigatoria: true },
      { nome: "Disciplina02", creditos: 4, obrigatoria: true },
      { nome: "Disciplina03", creditos: 5, obrigatoria: true },
    ],
  });
});

test("Pegar curso com mais créditos obrigatórios", () => {
  const cursos = [
    {
      nome: "Curso01",
      tipo: "Graduação",
      disciplinas: [
        { nome: "Disciplina01", creditos: 5, obrigatoria: false },
        { nome: "Disciplina02", creditos: 3, obrigatoria: false },
        { nome: "Disciplina03", creditos: 4, obrigatoria: true },
      ],
    },
    {
      nome: "Curso02",
      tipo: "Mestrado",
      disciplinas: [
        { nome: "Disciplina01", creditos: 6, obrigatoria: false },
        { nome: "Disciplina02", creditos: 4, obrigatoria: false },
        { nome: "Disciplina03", creditos: 5, obrigatoria: true },
      ],
    },
    {
      nome: "Curso03",
      tipo: "Doutorado",
      disciplinas: [
        { nome: "Disciplina01", creditos: 4, obrigatoria: true },
        { nome: "Disciplina02", creditos: 2, obrigatoria: false },
        { nome: "Disciplina03", creditos: 3, obrigatoria: true },
      ],
    },
  ];

  expect(pegarCursoComMaisCreditosObrigatorios(cursos)).toEqual({
    nome: "Curso03",
    tipo: "Doutorado",
    disciplinas: [
      { nome: "Disciplina01", creditos: 4, obrigatoria: true },
      { nome: "Disciplina02", creditos: 2, obrigatoria: false },
      { nome: "Disciplina03", creditos: 3, obrigatoria: true },
    ],
  });
});

/*test("Pegar curso com mais créditos obrigatórios com desempate por tipo", () =>
  expect(criarDisciplina("Algoritmos e Programação", 6, true)).toEqual({
    nome: "Algoritmos e Programação",
    creditos: 6,
    obrigatoria: true,
  }));*/
