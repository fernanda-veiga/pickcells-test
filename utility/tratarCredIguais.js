function tratarCredIguais(cursoAtual, cursoComparar) {
  if (
    cursoComparar.curso.tipo === "Graduação" ||
    (cursoComparar.curso.tipo === "Mestrado" &&
      cursoAtual.curso.tipo !== "Graduação") ||
    cursoAtual.curso.tipo === "Doutorado"
  ) {
    return cursoAtual;
  }
  return cursoComparar;
}

module.exports = tratarCredIguais;
