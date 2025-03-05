let inputSequence = "";
        const secretCode = "mikumikumiku";
        

        document.addEventListener('keydown', function(event) {
            inputSequence += event.key;
            if (inputSequence === secretCode) {
               window.open('https://www.youtube.com/watch?v=_-2dIuV34cs');
                inputSequence = "";
            }
           
            if (inputSequence.length > secretCode.length) {
                inputSequence = inputSequence.slice(1);
            }
        });


function filtrarLinks() {
            const pesquisa = document.getElementById('search').value.toLowerCase();
            const links = document.querySelectorAll('#links-container details, li');  let encontrouResultado = false; // Para verificar se encontramos algo

            links.forEach(link => {
                const nomeLink = link.querySelector('b').textContent.toLowerCase();
                if (nomeLink.includes(pesquisa)) {
                    link.style.display = ''; // Exibe o item se o nome corresponder
                } else {
                    link.style.display = 'none'; // Oculta o item se o nome não corresponder
                }
            });
        }








// Função para obter o valor de um cookie
function getCookie(name) {
    const value = `; ${document.cookie}`; // Adiciona o ponto e vírgula para garantir que estamos buscando no formato certo
    const parts = value.split(`; ${name}=`); // Usa split para localizar o cookie que estamos procurando
    if (parts.length === 2) {
        return parts.pop().split(';').shift(); // Retorna o valor do cookie
    }
    return null; // Retorna null caso o cookie não seja encontrado
}

// Função para definir um cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Define o tempo de expiração (em dias)
    const expires = `expires=${d.toUTCString()}`; // Converte a data para o formato UTC
    document.cookie = `${name}=${value}; ${expires}; path=/`; // Define o cookie
}

// Função para aplicar o tema no documento
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    setCookie('theme', theme, 7); // Salva a configuração no cookie por 7 dias
}

// Função para alternar o tema
function toggleTheme() {
    const currentTheme = getCookie('theme') || 'light'; // Se não houver cookie, usa o tema claro por padrão
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Alterna entre 'dark' e 'light'
    applyTheme(newTheme);
}

// Verifica e aplica o tema ao carregar a página
window.onload = () => {
    const savedTheme = getCookie('theme') || 'light'; // Se não houver cookie, usa o tema claro por padrão
    applyTheme(savedTheme);
};

// Evento de clique para alternar o tema
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
