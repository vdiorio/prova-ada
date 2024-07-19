function boasVindas() {
  let nome;
  while (!nome) {
    nome = prompt("Por favor digite seu nome:");
    if (!nome) alert("Por favor, digite um nome válido");
  }
  alert("Seja bem-vindo " + nome);
}

boasVindas();
