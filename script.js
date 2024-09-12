function descobrirPrimo()
{
    var numero = document.getElementById("userInput_1").value;
    if(numero < 0)
    {
        alert("Entrada inválida! O número " + numero + " é negativo");
        return;
    }

    let cont = 0;

    for(let i = 1; i <= numero; i++)
    {
        if(numero % i === 0)
            {
                cont++;
            }
    }

    if(cont > 2)
    {
        alert("O número "+ numero + " não é primo");
        return;
    }
    else if(numero == 0)
    {
        alert("O número "+ numero + " é neutro");
        return;
    }
    else
    {
        alert("O número "+ numero + " é primo");
        return;
    }
}

function descobrirPar()
{
    var numero = document.getElementById("userInput_2").value;

    if(numero % 2 === 0)
    {
        alert("O número "+ numero + " é par");
        return;
    }
    else
    {
        alert("O número "+ numero + " é ímpar");
        return;
    }
}

function descobrirCubo()
{
    var numero = document.getElementById("userInput_3").value;
    var cubo = numero * numero * numero;
    alert("O cubo de "+ numero + " é " + cubo);
    return;
}

