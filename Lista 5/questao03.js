const frequencia = [true, false,true,true,true,false,false,true,true,true,true,false,true,true,false,false,false,true,true,false]

function presencaAluno (frequencia) {

    presente = frequencia.filter(item => item === true);

    let percentual = (presente.length/frequencia.length)*100;

    percentual >= 75 ? console.log("Aluno regular") : console.log("Aluno irregular");

}

presencaAluno(frequencia);