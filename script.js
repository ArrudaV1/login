// Função para exibir a tela de cadastro
function mostrarCadastro() {
    document.getElementById('cadastro-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Função para exibir a tela de login
function mostrarLogin() {
    document.getElementById('cadastro-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Alterna entre as telas de cadastro e login
document.getElementById('go-to-login').addEventListener('click', mostrarLogin);
document.getElementById('go-to-cadastro').addEventListener('click', mostrarCadastro);

// Lógica de Cadastro
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se já existe um usuário com o mesmo e-mail
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (usuarios.some(usuario => usuario.email === email)) {
        alert('Este e-mail já está cadastrado!');
    } else {
        // Adiciona o novo usuário ao localStorage
        usuarios.push({ nome, email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Cadastro realizado com sucesso!');
        mostrarLogin();  // Exibe a tela de login após o cadastro
    }
});

// Lógica de Login
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailLogin = document.getElementById('email-login').value;
    const senhaLogin = document.getElementById('senha-login').value;

    // Recupera os usuários do localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o e-mail e a senha são válidos
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === emailLogin && usuario.senha === senhaLogin);

    if (usuarioEncontrado) {
        alert(`Bem-vindo(a), ${usuarioEncontrado.nome}!`);
    } else {
        alert('Credenciais inválidas! Tente novamente.');
    }
});

// Exibe a tela de cadastro por padrão quando a página carrega
mostrarCadastro();
