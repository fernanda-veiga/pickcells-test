const calcularQtdCreditosObrigatorios = require("./calcularQtdCreditosObrigatorios");

function pegarCursoComMaisCreditosObrigatorios(cursos) {
  let cursoComMaisCreditosObrigatorios = {};
  let creditosObrigatoriosDoCursoComMaisCreditos = 0;

  for (let i = 0; i < cursos.length; i++) {
    let creditosObrigatoriosDoCursoAtual = calcularQtdCreditosObrigatorios(
      cursos[i]
    );

    if (
      creditosObrigatoriosDoCursoAtual >
      creditosObrigatoriosDoCursoComMaisCreditos
    ) {
      cursoComMaisCreditosObrigatorios = cursos[i];
      creditosObrigatoriosDoCursoComMaisCreditos =
        creditosObrigatoriosDoCursoAtual;
    }
  }

  return cursoComMaisCreditosObrigatorios;
}

module.exports = pegarCursoComMaisCreditosObrigatorios;
