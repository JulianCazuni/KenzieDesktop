let listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [6, 8, 10, 8]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ]
    }
]

let materiasAprovadas = 0;

let listaDeMatérias = listaAlunos[0].materias;

for (let i = 0; i < listaDeMatérias.length; i++) {
    let notaTotal = 0;
    for (let j = 0; j < listaDeMatérias[i].avaliacoes.length; j++) {
        notaTotal += listaDeMatérias[i].avaliacoes[j];
    }
    if (notaTotal / listaDeMatérias[i].avaliacoes.length >= 6) {
        materiasAprovadas++;
    }
}

console.log(materiasAprovadas);