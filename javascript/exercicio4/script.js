function validaFormulário(){
    alert('entrei');

    //guardar numa variavel o que estiver no nome
nome_inserido= document.getElementById('nome').value ;
    //guardar numa variavel o que estiver na morada
morada_inserida = document.getElementById('morada').value;
console.log(nome_inserido);
console.log(morada_inserida);

//alert('ja li os valores');
    //se estiver alguma coisa no nome e estiver com morada
        //submete
if(nome_inserido !='' && morada_inserida !=''){
    //alert('dados correctos');

    return true;
}else{
    document.getElementById('zona-de-erro').innertext='dados incorrectos'
    //alert('DADOS INCORRECTOS!!')
    return false;

}

}

function validaFormularioMelhor(){
    document.getElementById('obrigatorio_nome').style.display='none';
    document.getElementById('obrigatorio_morada').style.display='none';
    document.getElementById('zona-de-erro').innertext='';
    //guardar numa variavel o que estiver no nome
nome_inserido= document.getElementById('nome').value ;
//guardar numa variavel o que estiver na morada
morada_inserida = document.getElementById('morada').value;

//se nome vazio
if(nome_inserido==''){
    //mostra * do nome
    document.getElementById('obrigatorio_nome').style.display='block';
}

//se morada vazia
if(morada_inserida==''){
    //mostra * da morada
    document.getElementById('obrigatorio_morada').style.display='block';
}

if(nome_inserido=='' || morada_inserida==''){
    document.getElementById('zona-de-erro').innerText='preencha os campos assinalados';
    return false;
} else{
    return true;
}



}