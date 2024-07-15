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
        
        const foto = document.createElement('img');
        foto.setAttribute('src', personagem.image);
        foto.classList.add('foto');
    
        personagemDiv.appendChild(foto);
        div.appendChild(personagemDiv);
        
        personagemDiv.innerHTML += `
        <section class="card-persons">
        <div>Nome: ${personagem.name}</div>
        <div>Tipo: ${personagem.species}</div> 
        <div>Status: ${personagem.status}</div>
        </section>`
       
    })

});

