document.addEventListener('DOMContentLoaded', () => {
    // Obtém o e-mail do localStorage
    const userEmail = localStorage.getItem('userEmail');
    // Exibe o e-mail na página
    document.getElementById('userEmail').innerText = userEmail ? userEmail : 'Usuário não identificado';
  });
  