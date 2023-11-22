function enviarDados() {
    // Capturar os dados do formulário
    var nome = document.getElementById("cpf").value;

    // Criar um objeto com os dados
    var dados = {
        nome: nome
    };

    // Enviar uma solicitação POST para a API REST em Java
    fetch('http://localhost:8083/v1/cartao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => console.log('Resposta da API:', data))
    .catch(error => console.error('Erro:', error));
}

function enviarDados() {
    alert("teste")
// Capturar os dados do formulário
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var rg = document.getElementById("rg").value;
  var matricula = document.getElementById("matricula").value;
  var dataNascimento = document.getElementById("data-nascimento").value;
  var nomeMae = document.getElementById("nome-mae").value;
  var email = document.getElementById("email").value;
  var cep = document.getElementById("cep").value;
  var endereco = document.getElementById("endereco").value;
  var numeroEndereco = document.getElementById("numero-endereco").value;
  var numeroTelefone = document.getElementById("numero-telefone").value;
  // Criar um objeto com os dados
  var UserErpDTO = {
      cpf:limparFormatacao(cpf),
      nome:nome,
      matricula:matricula,
      rg:limparFormatacao(rg),
      dataNascimento:converterParaTimestamp(dataNascimento),
      nomeMae: nomeMae,
      email:email,
      cep:limparFormatacao(cep),
      endereco:endereco,
      numeroEndereco:numeroEndereco,
      numeroTelefone:limparFormatacao(numeroTelefone)
  };

  // Enviar uma solicitação POST para a API REST em Java
  fetch('http://localhost:8083/cartao', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(UserErpDTO)
  })
  .then(response => response.json())
  .then(data => console.log('Resposta da API:', data))
  .catch(error => console.error('Erro:', error));
  }

  function formatarData(input) {
  // Remove caracteres não numéricos
    let inputValue = input.value.replace(/\D/g, '');

    // Adiciona barras na posição correta
    if (inputValue.length > 2) {
      inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2);
    }
    if (inputValue.length > 5) {
      inputValue = inputValue.substring(0, 5) + '/' + inputValue.substring(5, 9);
    }

    // Atualiza o valor do campo
    input.value = inputValue;
  }

    function converterParaTimestamp(dataNacional) {
// Divide a string da data em dia, mês e ano
      var partes = dataNacional.split('/');
      
      // Mês é baseado em zero no objeto Date, então subtrai 1 do número do mês
      var mes = partes[1] - 1;
      
      // Cria um objeto Date com os componentes da data
      var data = new Date(partes[2], mes, partes[0]);
      
      // Obtém o timestamp em milissegundos
      var timestamp = data.getTime();
      
      return timestamp;
      }

    function limparFormatacao(data) {
      // Remove todos os caracteres que não são dígitos
      data = data.replace(/\D/g, '');

      alert(data);
      return cpf;
    }

    function pesquisarCEPPrv(cepPrv){
       fetch('https://brasilapi.com.br/api/cep/v1/'+cepPrv.value)
      .then(response =>{return response.json();})
      .then(data => {
        enderecoPrv = document.getElementById('enderecoPrv'); 
        enderecoPrv.value = data.street+ ", " + data.neighborhood + ", " + data.city + " - " + data.state;
      })
      .catch(error => console.error('Erro:', error));
      }

      function pesquisarCEP(cepPrv){
        fetch('https://brasilapi.com.br/api/cep/v1/'+cepPrv.value)
       .then(response =>{return response.json();})
       .then(data => {
        endereco = document.getElementById('endereco'); 
         endereco.value = data.street+ ", " + data.neighborhood + ", " + data.city + " - " + data.state;
       })
       .catch(error => console.error('Erro:', error));
       }
   
  