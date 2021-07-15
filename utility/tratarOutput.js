function tratarOutput(cursoMaisCredObrig) {
  const disciplinasTratadas = cursoMaisCredObrig.curso.disciplinas.map(
    (disciplina) => {
      return { descricao: disciplina.descricao, creditos: disciplina.creditos };
    }
  );

  return {
    curso: cursoMaisCredObrig.curso.descricao,
    disciplinas: disciplinasTratadas,
    creditosObrig: cursoMaisCredObrig.creditos,
  };
}

module.exports = tratarOutput;
