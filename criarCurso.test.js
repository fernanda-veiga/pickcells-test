const criarCurso = require("./criarCurso");

test("Criar um curso", () =>
  expect(
    criarCurso(
      "Ciência da Computação",
      "Graduação",
      [
        "Algoritmos e Programação",
        "Matemática Computacional",
        "Tópicos Avançados em Bancos de Dados",
        "Metodologia Científica",
      ],
      ["Estatística", "Tópicos Avançados em Linguagens de Programação"]
    )
  ).toEqual({
    nome: "Ciência da Computação",
    tipo: "Graduação",
    disciplinasObrigatórias: [
      "Algoritmos e Programação",
      "Matemática Computacional",
      "Tópicos Avançados em Bancos de Dados",
      "Metodologia Científica",
    ],
    disciplinasOpcionais: [
      "Estatística",
      "Tópicos Avançados em Linguagens de Programação",
    ],
  }));
