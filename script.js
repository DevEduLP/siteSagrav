document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
    var mensagem = encodeURIComponent(document.getElementById("mensagem").value);
    var email = "edulpbs@gmail.com"; 
    window.location.href = `mailto:${email}?subject=Contratação&body=${mensagem}`;
});

// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a tela
    const screenWidth = window.innerWidth;

    // A função que lida com a visibilidade do menu
    function handleResponsiveMenu() {
        const menu = document.getElementById('menu');
        
        // Se a largura da tela for menor que 768px, o menu é ajustado
        if (screenWidth < 768) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    }

    // Chama a função quando a tela for redimensionada
    window.addEventListener('resize', handleResponsiveMenu);
    
    // Inicializa
    handleResponsiveMenu();
});
