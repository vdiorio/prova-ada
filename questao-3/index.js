function checarAlunoAprovado(nome, nota) {
  if (typeof nota !== "number") {
    console.log("Por favor " + nome + ", digite um numero!");
    return;
  }

  if (nota >= 8) {
    console.log("Parabéns " + nome + ", você foi aprovado(a)!");
  } else {
    console.log("Olá " + nome + ", infelizmente você foi reprovado(a)!");
  }
}

checarAlunoAprovado("João", 7);
checarAlunoAprovado("Maria", 9);
checarAlunoAprovado("Cleitin", "Cleitin é um pateta");
