function renderCartas(lista) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  
  lista.forEach(carta => {
    container.innerHTML += `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <h2>${carta.numero}</h2>
            <h3>${carta.nome}</h3>
          </div>
          <div class="card-back">
            <p><strong>Descrição:</strong> ${carta.descricao}</p>
            <p><strong>Características:</strong> ${carta.caracteristicas}</p>
            <p><strong>Virtudes:</strong> ${carta.virtudes}</p>
            <p><strong>Sombras:</strong> ${carta.sombras}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function sortearCartas() {
  let sorteadas = [...cartas].sort(() => Math.random() - 0.5).slice(0, 7);
  
  const blocos = [
    sorteadas.slice(0, 2),
    sorteadas.slice(2, 5),
    sorteadas.slice(5, 7)
  ];
  
  const container = document.getElementById("container");
  container.innerHTML = "";
  
  blocos.forEach((bloco, i) => {
    container.innerHTML += `<h2>Bloco ${i + 1}</h2>`;
    bloco.forEach(carta => {
      container.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h2>${carta.numero}</h2>
              <h3>${carta.nome}</h3>
            </div>
            <div class="card-back">
              <p><strong>Descrição:</strong> ${carta.descricao}</p>
              <p><strong>Características:</strong> ${carta.caracteristicas}</p>
              <p><strong>Virtudes:</strong> ${carta.virtudes}</p>
              <p><strong>Sombras:</strong> ${carta.sombras}</p>
            </div>
          </div>
        </div>
      `;
    });
  });
}
