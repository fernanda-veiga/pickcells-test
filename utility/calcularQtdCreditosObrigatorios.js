function calcularQtdCreditosObrigatorios(curso) {
  let creditos = 0;

  for (let i = 0; i < curso.disciplinas.length; i++) {
    if (curso.disciplinas[i].obrigatoria) {
      creditos = creditos + curso.disciplinas[i].creditos;
    }
  }

  return creditos;
}

module.exports = calcularQtdCreditosObrigatorios;
