function procuraNumero(){
    alert("entre")

    //ir buscar a lista inserida
    lista = document.getElementById('lista').value;
    //lista = document.querySelector('input[name="lista"]').value;

    //ir buscar o numero a pesquisar
    numero = document.getElementById('numero').value;

    //converter a string recebida para array
    listaConvertida = lista.split(';');

    tantoFaz = listaConvertida.length;
    numero_encontrado = 0;
/*
    for(i=0;i<tantoFaz;i=i+1) //i = i+1 é igual a ter i++
    {
        numeroLido= listaConvertida[i];
        if(numeroLido == numero ){
            numero_encontrado = numero_encontrado + 1;
        } 
    }*/

    i=0;
    while(numero_encontrado == 0 && i < tantoFaz ){
        numeroLido = listaConvertida[i];
        if(numeroLido == numero){
            numero_encontrado = numero_encontrado + 1;
    }
    console.log(i);
    i=i+1;

    }

    if(numero_encontrado >=1){
        document.getElementById('resultado').innerText="o numero aparece na lista";
    } else{
        document.getElementById('resultado').innerText="o numero NAO aparece na lista";
    }

}