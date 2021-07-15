function verificarInput(cursos) {
  if (cursos instanceof Array === false) return false;
  if (cursos.length === 0) return false;
  if (
    cursos.every(
      (curso) =>
        curso.hasOwnProperty("descricao") &&
        curso.hasOwnProperty("tipo") &&
        curso.hasOwnProperty("disciplinas")
    ) === false
  ) {
    return false;
  }
  return true;
}

module.exports = verificarInput;
