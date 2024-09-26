document.addEventListener("DOMContentLoaded", () => {
  const loadingMessage = document.getElementById('loading-message');
  const table = document.getElementById('cotacoes-table');
  
  loadingMessage.style.display = 'block'; // Exibe a mensagem de carregamento
  
  fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then(response => response.json())
    .then(data => {
      loadingMessage.style.display = 'none'; // Esconde a mensagem de carregamento
      table.style.display = 'table'; // Mostra a tabela

      const cotacoes = document.getElementById("cotacoes");

      const moedas = [
        { code: "USD", name: "Dólar Americano", img: "https://cdn-icons-png.flaticon.com/512/330/330459.png" },
        { code: "EUR", name: "Euro", img: "https://cdn-icons-png.flaticon.com/512/330/330462.png" },
        { code: "BTC", name: "Bitcoin", img: "https://cdn-icons-png.flaticon.com/512/825/825515.png" }
      ];

      moedas.forEach(moeda => {
        const cotacao = data[`${moeda.code}BRL`];
        const row = document.createElement("tr");

        row.innerHTML = `
          <td><img src="${moeda.img}" alt="${moeda.name}" width="25"> ${moeda.code}</td>
          <td>${parseFloat(cotacao.bid).toFixed(4)}</td>
          <td>${parseFloat(cotacao.pctChange).toFixed(2)}</td>
        `;

        cotacoes.appendChild(row);
      });
    })
    .catch(error => {
      loadingMessage.textContent = 'Erro ao carregar as cotações.';
      console.error("Erro ao carregar as cotações: ", error);
    });
});
