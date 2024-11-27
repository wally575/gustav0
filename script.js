document.addEventListener('DOMContentLoaded', () => {
    const musicas = [
        'Dynamite',
        'Butter',
        'Permission to Dance',
        'Boy With Luv',
        'Spring Day'
    ];

    const musicaList = document.getElementById('musica-list');
    musicas.forEach(musica => {
        const li = document.createElement('li');
        li.textContent = musica;
        musicaList.appendChild(li);
    });

    document.getElementById('contato-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});
