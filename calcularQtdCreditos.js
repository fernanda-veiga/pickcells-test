function calcularQtdCreditos(curso) {
  let creditos = 0;

  for (let i = 0; i < curso.disciplinas.length; i++) {
    creditos = creditos + curso.disciplinas[i].creditos;
  }

  return creditos;
}

module.exports = calcularQtdCreditos;
