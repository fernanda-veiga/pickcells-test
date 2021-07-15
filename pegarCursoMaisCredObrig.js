const verificarInput = require("./utility/verificarInput");
const calcularQtdCredObrig = require("./utility/calcularQtdCredObrig");
const pegarCursoMaisCredObrigAtual = require("./utility/pegarCursoMaisCredObrigAtual");
const tratarOutput = require("./utility/tratarOutput");

function pegarCursoMaisCredObrig(cursos) {
  if (verificarInput(cursos) === false) return;

  let cursoMaisCredObrig = { curso: {}, creditos: 0 };

  for (let i = 0; i < cursos.length; i++) {
    let cursoAtual = {
      curso: cursos[i],
      creditos: calcularQtdCredObrig(cursos[i]),
    };

    let cursoComparar = {
      curso: cursoMaisCredObrig.curso,
      creditos: cursoMaisCredObrig.creditos,
    };

    cursoMaisCredObrig = pegarCursoMaisCredObrigAtual(
      cursoAtual,
      cursoComparar
    );
  }

  return tratarOutput(cursoMaisCredObrig);
}

module.exports = pegarCursoMaisCredObrig;
