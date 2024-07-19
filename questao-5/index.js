function sorteio() {
  const cartela = [11, 28, 35, 74, 26, 17];
  const sorteados = [];

  while (sorteados.length !== cartela.length) {
    const num = Math.floor(Math.random() * 75) + 1;

    if (cartela.includes(num) && !sorteados.includes(num)) {
      sorteados.push(num);
    }
  }

  console.log("Parabéns, você ganhou!");
}

sorteio();
