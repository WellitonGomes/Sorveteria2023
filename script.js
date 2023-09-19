button.addEventListener("click", function () {
    var nomeCliente = nome.value;
    var quantiaSorvete = quantidade.value;
    var saborSorvete = bolas.value;

    /*alert( " Nome: " + nomeCliente +
    " Qnt: " + quantiaSorvete +
    " Sabor: " + saborSorvete );*/

    pedidoNome.innerHTML = "Nome: " + nomeCliente;
    pedidoQuantia.innerHTML = "Quantidade: " + quantiaSorvete;
    pedidoSabor.innerHTML = "Sabor: " + saborSorvete;
});
  