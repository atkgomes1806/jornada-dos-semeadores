/* Utility: escape simples para evitar injeção de HTML ao montar templates */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function cardHTML(carta, subtitulo) {
  const numero = escapeHtml(carta.numero);
  const nome = escapeHtml(carta.nome);
  const descricao = escapeHtml(carta.descricao);
  const caracteristicas = escapeHtml(carta.caracteristicas);
  const virtudes = escapeHtml(carta.virtudes);
  const sombras = escapeHtml(carta.sombras);
  const bg = carta.imagem ? `<div class="card-bg" style="background-image: url('${escapeHtml(carta.imagem)}')"></div>` : '';

  const subtituloHtml = subtitulo ? `<h4>${escapeHtml(subtitulo)}</h4>` : '';

  return `
    <div class="card">
      ${subtituloHtml}
      <div class="card-inner">
        <div class="card-front">
          ${bg}
          <h2>${numero}</h2>
          <h3>${nome}</h3>
        </div>
        <div class="card-back">
          <p><strong>Descrição:</strong> ${descricao}</p>
          <p><strong>Características:</strong> ${caracteristicas}</p>
          <p><strong>Virtudes:</strong> ${virtudes}</p>
          <p><strong>Sombras:</strong> ${sombras}</p>
        </div>
      </div>
    </div>
  `;
}

function renderCartas(lista) {
  const container = document.getElementById('container');
  if (!container) return;
  container.innerHTML = lista.map(carta => cardHTML(carta)).join('');
}

function realizarSorteio(categorias) {
  const HISTORICO_KEY = 'historico_cartas';
  const NUMERO_DE_SORTEIOS_BLOQUEADOS = 2;
  const CARTAS_POR_CATEGORIA = 3;

  let historico = JSON.parse(localStorage.getItem(HISTORICO_KEY)) || [];
  const numerosExcluidos = new Set(historico.flat());

  let baralhoDisponivel = window.cartas.filter(carta => !numerosExcluidos.has(carta.numero));

  const totalCartasNecessarias = categorias.length * CARTAS_POR_CATEGORIA;

  if (baralhoDisponivel.length < totalCartasNecessarias) {
    historico = [];
    baralhoDisponivel = [...window.cartas];
    localStorage.removeItem(HISTORICO_KEY);
    alert("O baralho foi re-embaralhado para garantir cartas suficientes para a sua leitura.");
  }

  const container = document.getElementById('container');
  if (!container) return;

  let htmlFinal = '';
  const todosNumerosSorteados = [];
  const titulosCartas = ["A Raiz", "O Desafio Atual", "O Conselho"];

  const baralhoEmbaralhado = baralhoDisponivel.sort(() => Math.random() - 0.5);

  for (const categoria of categorias) {
    const cartasSorteadas = baralhoEmbaralhado.splice(0, CARTAS_POR_CATEGORIA);
    if (cartasSorteadas.length === 0) continue;

    todosNumerosSorteados.push(...cartasSorteadas.map(c => c.numero));

    htmlFinal += `<h2>${escapeHtml(categoria)}</h2>`;
    const cartasHtml = cartasSorteadas.map((carta, i) => {
        // Lógica da carta 11 (Dragão) adaptada para o novo contexto
        let cartaModificada = { ...carta };
        if (cartaModificada.numero === '11' && titulosCartas[i] === 'A Raiz') {
            cartaModificada.imagem = 'img/11. dragão2.jpeg';
        } else if (cartaModificada.numero === '11') {
            cartaModificada.imagem = 'img/11. dragão.jpeg';
        }
        return cardHTML(cartaModificada, titulosCartas[i]);
    }).join('');
    htmlFinal += `<div class="card-group">${cartasHtml}</div>`;
  }

  if (todosNumerosSorteados.length > 0) {
      historico.push(todosNumerosSorteados);
      if (historico.length > NUMERO_DE_SORTEIOS_BLOQUEADOS) {
        historico.shift();
      }
      localStorage.setItem(HISTORICO_KEY, JSON.stringify(historico));
  }

  container.innerHTML = htmlFinal;
}

function initLaunchPage() {
  const modal = document.getElementById('category-modal');
  const form = document.getElementById('category-form');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const maxSelecoes = 3;

  if (modal) {
    // Força um pequeno atraso para garantir que a transição CSS ocorra
    setTimeout(() => modal.classList.add('show'), 10);
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selecionados = form.querySelectorAll('input[type="checkbox"]:checked');
      if (selecionados.length > maxSelecoes) {
        checkbox.checked = false;
        alert(`Você pode escolher no máximo ${maxSelecoes} categorias.`);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selecionados = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    
    if (selecionados.length === 0) {
        alert('Por favor, escolha pelo menos uma categoria.');
        return;
    }

    if (modal) {
      modal.classList.remove('show');
    }

    realizarSorteio(selecionados);
  });
}

// --- INICIALIZAÇÃO --- 
document.addEventListener('DOMContentLoaded', () => {
  // Verifica se está na página de lançamento procurando pelo modal
  if (document.getElementById('category-modal')) {
    initLaunchPage();
  }
});

// --- FUNÇÕES GLOBAIS ---
// Disponibiliza a função `renderCartas` globalmente para ser chamada pelo `onload` em `todas.html`
window.renderCartas = renderCartas;
