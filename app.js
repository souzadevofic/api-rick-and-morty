fetch('https://rickandmortyapi.com/api/character')
.then(response => {
    if (!response.ok) {
        throw new Error('Erro na resposta da API');
    }
    return response.json();
})
.then(data => {
    
    const div = document.querySelector('.chars-container');

    data.results.forEach(personagem => {
        const personagemDiv = document.createElement('div');
        personagemDiv.classList.add('personagem');

        personagemDiv.innerHTML = `Nome: ${personagem.name} | Tipo: ${personagem.species}`
        

        const foto = document.createElement('img');
        foto.setAttribute('src', personagem.image);
        foto.classList.add('foto');

        personagemDiv.appendChild(foto);
        div.appendChild(personagemDiv);
    })

    function buscarPersonagem(){

    }
});