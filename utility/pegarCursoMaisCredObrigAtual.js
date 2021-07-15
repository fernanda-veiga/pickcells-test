const tratarCredIguais = require("../utility/tratarCredIguais");

function pegarCursoMaisCredObrigAtual(cursoAtual, cursoComparar) {
  if (cursoAtual.creditos === cursoComparar.creditos) {
    return tratarCredIguais(cursoAtual, cursoComparar);
  }

  if (cursoAtual.creditos > cursoComparar.creditos) {
    return cursoAtual;
  }

  return cursoComparar;
}

module.exports = pegarCursoMaisCredObrigAtual;
