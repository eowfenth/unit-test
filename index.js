// Função pura e função impura

const soma = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Você precisa passar dois números");
  }

  return a + b;
};

const divisao = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Você precisa passar dois números");
  } else if (b === 0) {
	throw new Error("O denominador precisa ser diferente de 0");
  }

  return a / b;
};

module.exports = { soma, divisao };
