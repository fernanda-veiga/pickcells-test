function processarOutput(
  cursoMaisCreditosObrig,
  creditosObrigCursoMaisCreditos
) {
  const output = cursoMaisCreditosObrig.map((curso) => {
    return {
      Curso: curso.nome,
      Disciplinas: curso.disciplinas
        .filter((disciplina) => {
          return disciplina.obrigatoria;
        })
        .map((disciplina) => {
          return { Descrição: disciplina.nome, Créditos: disciplina.creditos };
        }),
      ["Créditos Obrigatórios"]: creditosObrigCursoMaisCreditos,
    };
  });

  return output;
}

module.exports = processarOutput;
