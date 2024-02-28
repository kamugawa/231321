function login() {
    // Adicione sua lógica de autenticação aqui
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Exemplo de validação simples (substitua por lógica real)
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}