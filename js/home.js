document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');
    document.getElementById('userEmail').innerText = userEmail ? userEmail : 'Usuário não identificado';
  });
  