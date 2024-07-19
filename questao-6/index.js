const alunosTurmaA = [
  { nome: "Pedro", turma: "A", idade: 14 },
  { nome: "Maria", turma: "A", idade: 12 },
  { nome: "Michel", turma: "A", idade: 13 },
];

const alunosTurmaB = [
  { nome: "Marcos", turma: "B", idade: 15 },
  { nome: "Ana", turma: "B", idade: 11 },
  { nome: "Bruno", turma: "B", idade: 10 },
];

function alunoMaisVelhoTurmaA() {
  let maisVelho = alunosTurmaA[0];

  alunosTurmaA.forEach((aluno) => {
    if (aluno.idade > maisVelho.idade) {
      maisVelho = aluno;
    }
  });

  console.log(`Nome: ${maisVelho.nome}, Idade: ${maisVelho.idade}`);
  return maisVelho;
}

function mediaIdadeAlunos() {
  const alunos = alunosTurmaA.concat(alunosTurmaB);
  let totalIdade = 0;

  alunos.forEach((aluno) => {
    totalIdade += aluno.idade;
  });

  const media = totalIdade / alunos.length;

  console.log(`Média de idade: ${media}`);

  return totalIdade / alunos.length;
}

alunoMaisVelhoTurmaA();
mediaIdadeAlunos();
