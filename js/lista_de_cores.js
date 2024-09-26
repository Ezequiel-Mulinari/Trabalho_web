document.addEventListener("DOMContentLoaded", () => {
  const loadingMessage = document.getElementById('loading-message');
  const table = document.getElementById('colors-table');

  loadingMessage.style.display = 'block'; 
  
  fetch("https://reqres.in/api/unknown")
    .then(response => response.json())
    .then(data => {
      loadingMessage.style.display = 'none'; 
      table.style.display = 'table'; 

      const cores = document.getElementById("cores");

      data.data.forEach(cor => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${cor.id}</td>
          <td>${cor.name}</td>
          <td>
            <div style="background-color: ${cor.color}; width: 100%; height: 30px; border-radius: 4px;">${cor.color}</div>
          </td>
        `;

        cores.appendChild(row);
      });
    })
    .catch(error => {
      loadingMessage.textContent = 'Erro ao carregar as cores.';
      console.error("Erro ao carregar a lista de cores:", error);
    });
});
