const calcularQtdCreditosObrigatorios = require("./utility/calcularQtdCreditosObrigatorios");
const processarOutput = require("./utility/processarOutput");

function pegarCursoComMaisCreditosObrigatorios(cursos) {
  let cursoMaisCreditosObrig = [];
  let creditosObrigCursoMaisCreditos = 0;

  for (let i = 0; i < cursos.length; i++) {
    let creditosObrigAtual = calcularQtdCreditosObrigatorios(cursos[i]);

    //Créditos empatados
    if (creditosObrigAtual === creditosObrigCursoMaisCreditos) {
      //Mesmo tipo
      if (cursos[i].tipo === cursoMaisCreditosObrig[0].tipo) {
        cursoMaisCreditosObrig.push(cursos[i]);
      }
      //Tipo diferente
      else if (
        cursoMaisCreditosObrig[0].tipo === "Graduação" ||
        (cursoMaisCreditosObrig[0].tipo === "Mestrado" &&
          cursos[i].tipo === "Doutorado")
      ) {
        cursoMaisCreditosObrig = [cursos[i]];
        creditosObrigCursoMaisCreditos = creditosObrigAtual;
      }
    }

    //Créditos atuais maiores
    if (creditosObrigAtual > creditosObrigCursoMaisCreditos) {
      cursoMaisCreditosObrig = [cursos[i]];
      creditosObrigCursoMaisCreditos = creditosObrigAtual;
    }
  }

  return processarOutput(
    cursoMaisCreditosObrig,
    creditosObrigCursoMaisCreditos
  );
}

module.exports = pegarCursoComMaisCreditosObrigatorios;
