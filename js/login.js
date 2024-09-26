document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Exibe mensagem de carregamento (opcional, pode ser uma melhoria)
    errorMessage.style.display = 'none';
  
    // Faz a requisição POST à API do Reqres para autenticação
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('userEmail', email);
        window.location.href = 'home.html';
      } else {
        errorMessage.textContent = 'Login ou senha incorretos. Tente novamente.';
        errorMessage.style.display = 'block';
      }
    })
    .catch(error => {
      errorMessage.textContent = 'Erro na conexão. Tente novamente mais tarde.';
      errorMessage.style.display = 'block';
      console.error('Erro:', error);
    });
  });
  