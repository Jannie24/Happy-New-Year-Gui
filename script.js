document.addEventListener('DOMContentLoaded', function () {
    const letter = document.getElementById('letter');
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    // Exibir o coração e a mensagem após clicar na carta
    letter.addEventListener('click', function () {
        letter.style.display = 'none'; // Esconde a carta
        heart.style.display = 'block'; // Exibe o coração
        message.style.display = 'block'; // Exibe a mensagem
    });

    // Alterna a mensagem ao clicar no coração
    heart.addEventListener('click', function () {
        if (message.textContent === 'Feliz ano novo, Gui!') {
            message.textContent = 'Obrigada por ter me econtrado em 2024 desejo de todo o meu coração criar memórias ao seu lado e espero conhecer mais de você.';
        } else {
            message.textContent = 'Agradeço imensamente por você ter surgido no finalzinho do ano. Você é importante!';
        }

        // Cria pequenos corações ao clicar
        for (let i = 0; i < 10; i++) {
            createFloatingHeart();
        }
    });

    function createFloatingHeart() {
        const smallHeart = document.createElement('div');
        smallHeart.classList.add('small-heart');
        smallHeart.style.left = `${Math.random() * 100}%`;
        smallHeart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        container.appendChild(smallHeart);

        // Remove o coração após a animação
        smallHeart.addEventListener('animationend', () => {
            smallHeart.remove();
        });
    }
});
