/*
========================================
  UTILITÁRIOS
========================================
*/

/**
 * Escapa caracteres HTML de uma string para prevenir injeção de código.
 * @param {string} str A string para escapar.
 * @returns {string} A string segura para HTML.
 */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/*
========================================
  RENDERIZAÇÃO
========================================
*/

/**
 * Gera o HTML para uma única carta.
 * @param {object} carta - O objeto da carta.
 * @param {string} [subtitulo] - Um subtítulo opcional para a carta (ex: "A Raiz").
 * @returns {string} O HTML da carta.
 */
function cardHTML(carta, subtitulo) {
  const numero = escapeHtml(carta.numero);
  const nome = escapeHtml(carta.nome);
  const descricao = escapeHtml(carta.descricao);
  const caracteristicas = escapeHtml(carta.caracteristicas);
  const virtudes = escapeHtml(carta.virtudes);
  const sombras = escapeHtml(carta.sombras);
  
  // Otimização: Lazy loading para imagens usando loading="lazy"
  const bg = carta.imagem 
    ? `<div class="card-bg" style="background-image: url('${escapeHtml(carta.imagem)}')"></div>` 
    : '';

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

/**
 * Renderiza uma lista de cartas no container principal.
 * Usado na página "todas.html".
 * Performance: Constrói todo o HTML de uma vez usando map + join.
 * @param {object[]} lista - A lista de cartas a ser renderizada.
 */
function renderCartas(lista) {
  const container = document.getElementById('container');
  if (!container) return;
  
  // Otimização: Constrói todo o HTML de uma vez, evitando múltiplas operações de DOM
  const html = lista.map(carta => cardHTML(carta)).join('');
  container.innerHTML = html;
}

/*
========================================
  LÓGICA DO SORTEIO
========================================
*/

/**
 * Realiza o sorteio das cartas com base nas categorias escolhidas,
 * atualiza o histórico para evitar repetições e renderiza o resultado.
 * Performance: Constrói HTML usando array e join para melhor desempenho.
 * @param {string[]} categorias - As categorias selecionadas pelo usuário.
 */
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

  // Insere o título da página dinamicamente
  const tituloPagina = '<h1 class="page-title">Sua Leitura de Cartas</h1>';
  container.insertAdjacentHTML('beforebegin', tituloPagina);

  // Otimização: Usar array para construir HTML em vez de concatenação de strings
  const htmlParts = [];
  const todosNumerosSorteados = [];
  const titulosCartas = ["A Raiz", "O Desafio Atual", "O Conselho"];

  const baralhoEmbaralhado = baralhoDisponivel.sort(() => Math.random() - 0.5);

  for (const categoria of categorias) {
    const cartasSorteadas = baralhoEmbaralhado.splice(0, CARTAS_POR_CATEGORIA);
    if (cartasSorteadas.length === 0) continue;

    todosNumerosSorteados.push(...cartasSorteadas.map(c => c.numero));

    htmlParts.push(`<h2>${escapeHtml(categoria)}</h2>`);
    const cartasHtml = cartasSorteadas.map((carta, i) => {
        // Lógica da carta 11 (Dragão) adaptada para o novo contexto
        let cartaModificada = { ...carta };
        if (cartaModificada.numero === '11' && titulosCartas[i] === 'A Raiz') {
            cartaModificada.imagem = 'assets/img/11. dragão2.jpeg';
        } else if (cartaModificada.numero === '11') {
            cartaModificada.imagem = 'assets/img/11. dragão.jpeg';
        }
        return cardHTML(cartaModificada, titulosCartas[i]);
    }).join('');
    htmlParts.push(`<div class="card-group">${cartasHtml}</div>`);
  }

  if (todosNumerosSorteados.length > 0) {
      historico.push(todosNumerosSorteados);
      if (historico.length > NUMERO_DE_SORTEIOS_BLOQUEADOS) {
        historico.shift();
      }
      localStorage.setItem(HISTORICO_KEY, JSON.stringify(historico));
  }

  container.innerHTML = htmlParts.join('');
}

/*
========================================
  INICIALIZAÇÃO DA PÁGINA
========================================
*/

/**
 * Configura a página "lancar.html", inicializando o modal,
 * os checkboxes e o formulário de seleção de categorias.
 */
function initLaunchPage() {
  const modal = document.getElementById('category-modal');
  const form = document.getElementById('category-form');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const loadingOverlay = document.getElementById('loading-overlay');
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

    // Mostra a tela de mentalização e aguarda 5 segundos
    if (loadingOverlay) {
      loadingOverlay.classList.add('show');

      setTimeout(() => {
        loadingOverlay.classList.remove('show');
        realizarSorteio(selecionados);
      }, 5000);
    } else {
      // Se a tela de loading não existir, executa o sorteio diretamente
      realizarSorteio(selecionados);
    }
  });
}

/*
========================================
  PERFIL DO USUÁRIO
========================================
*/

/**
 * Obtém o perfil do usuário (nome e data de nascimento) do localStorage.
 * @returns {object|null} O perfil do usuário ou null se não existir.
 */
function getUserProfile() {
  const PROFILE_KEY = 'userProfile';
  const profile = localStorage.getItem(PROFILE_KEY);
  return profile ? JSON.parse(profile) : null;
}

/**
 * Salva o perfil do usuário no localStorage.
 * @param {string} name - Nome do usuário.
 * @param {string} birthdate - Data de nascimento no formato YYYY-MM-DD.
 */
function saveUserProfile(name, birthdate) {
  const PROFILE_KEY = 'userProfile';
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ name, birthdate }));
}

/**
 * Remove o perfil do usuário do localStorage.
 */
function clearUserProfile() {
  const PROFILE_KEY = 'userProfile';
  localStorage.removeItem(PROFILE_KEY);
}

/**
 * Cria um hash simples de uma string para usar como seed.
 * @param {string} str - A string para criar o hash.
 * @returns {number} O valor do hash.
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Converte para inteiro de 32 bits
  }
  return Math.abs(hash);
}

/*
========================================
  CARTA DO DIA
========================================
*/

/**
 * Obtém a carta do dia baseada no perfil do usuário (nome + data de nascimento + data atual).
 * Se o usuário não tiver perfil, solicita o cadastro.
 * A carta é determinística: mesmo usuário verá a mesma carta no mesmo dia.
 * @returns {object|null} O objeto da carta do dia ou null se não houver perfil.
 */
function getCardOfTheDay() {
  const profile = getUserProfile();
  
  if (!profile) {
    return null; // Indica que o usuário precisa criar um perfil
  }
  
  const today = new Date().toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  
  // Cria uma string única combinando nome, data de nascimento e data atual
  const uniqueString = `${profile.name.toLowerCase()}-${profile.birthdate}-${today}`;
  
  // Gera um índice determinístico baseado no hash da string única
  const hash = simpleHash(uniqueString);
  const cardIndex = hash % window.cartas.length;
  
  return window.cartas[cardIndex];
}

/**
 * Exibe a carta do dia em um modal.
 * Se o usuário não tiver perfil, exibe um formulário para criar.
 */
function showCardOfTheDay() {
  const modal = document.getElementById('card-of-the-day-modal');
  const container = document.getElementById('card-of-the-day-container');
  
  if (!modal || !container) return;
  
  const card = getCardOfTheDay();
  
  if (card) {
    const profile = getUserProfile();
    const greeting = `<p class="card-greeting">Olá, ${escapeHtml(profile.name)}! 🌟</p>`;
    container.innerHTML = greeting + cardHTML(card);
    modal.classList.add('show');
  } else {
    // Usuário não tem perfil, exibe formulário
    showProfileForm();
  }
}

/**
 * Exibe o formulário de perfil do usuário.
 */
function showProfileForm() {
  const modal = document.getElementById('card-of-the-day-modal');
  const container = document.getElementById('card-of-the-day-container');
  
  if (!modal || !container) return;
  
  const profile = getUserProfile();
  const isEditing = profile !== null;
  
  const formHTML = `
    <div class="profile-form">
      <h3>${isEditing ? 'Editar Perfil' : 'Criar seu Perfil'}</h3>
      <p class="profile-description">
        ${isEditing 
          ? 'Atualize seus dados para personalizar sua experiência.' 
          : 'Para receber sua carta do dia personalizada, precisamos conhecê-lo melhor.'
        }
      </p>
      <form id="user-profile-form">
        <div class="form-group">
          <label for="user-name">Nome:</label>
          <input 
            type="text" 
            id="user-name" 
            name="name" 
            required 
            placeholder="Digite seu nome"
            value="${isEditing ? escapeHtml(profile.name) : ''}"
            maxlength="50"
          >
        </div>
        <div class="form-group">
          <label for="user-birthdate">Data de Nascimento:</label>
          <input 
            type="date" 
            id="user-birthdate" 
            name="birthdate" 
            required
            value="${isEditing ? escapeHtml(profile.birthdate) : ''}"
            max="${new Date().toISOString().split('T')[0]}"
          >
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-primary">
            ${isEditing ? 'Atualizar' : 'Salvar e Ver Carta'}
          </button>
          ${isEditing ? '<button type="button" id="cancel-profile-btn" class="btn-secondary">Cancelar</button>' : ''}
        </div>
      </form>
      ${isEditing ? '<p class="profile-note">Ao alterar seu perfil, sua carta do dia pode mudar.</p>' : ''}
    </div>
  `;
  
  container.innerHTML = formHTML;
  modal.classList.add('show');
  
  // Adiciona eventos ao formulário
  const form = document.getElementById('user-profile-form');
  form.addEventListener('submit', handleProfileSubmit);
  
  if (isEditing) {
    const cancelBtn = document.getElementById('cancel-profile-btn');
    cancelBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }
}

/**
 * Processa o envio do formulário de perfil.
 * @param {Event} e - O evento de submit.
 */
function handleProfileSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const name = form.name.value.trim();
  const birthdate = form.birthdate.value;
  
  if (!name || !birthdate) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  // Valida a data de nascimento
  const birthdateObj = new Date(birthdate);
  const today = new Date();
  
  if (birthdateObj > today) {
    alert('A data de nascimento não pode ser no futuro.');
    return;
  }
  
  // Salva o perfil
  saveUserProfile(name, birthdate);
  
  // Exibe a carta do dia
  showCardOfTheDay();
}

/*
========================================
  MODO ESCURO (DARK MODE)
========================================
*/

/**
 * Inicializa a funcionalidade de modo escuro.
 * Verifica a preferência do usuário no localStorage e adiciona o evento de clique.
 * Performance: Cache do toggle button para evitar múltiplas queries.
 */
function initDarkMode() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (!toggleButton) return;
  
  const body = document.body;
  const storageKey = 'darkModeEnabled';

  // Aplica o modo escuro se estiver salvo no localStorage
  if (JSON.parse(localStorage.getItem(storageKey))) {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Salva a preferência no localStorage
    localStorage.setItem(storageKey, body.classList.contains('dark-mode'));
    // Reinicia partículas para refletir o modo
    if (window.reinitParticles) {
      window.reinitParticles();
    }
  });
}


/*
========================================
  PONTO DE ENTRADA (ENTRY POINT)
========================================
*/

// Executa quando o DOM está totalmente carregado.
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o modo escuro em todas as páginas
  initDarkMode();

  // Verifica se está na página de lançamento procurando pelo modal.
  if (document.getElementById('category-modal')) {
    initLaunchPage();
  }

  // Verifica se está na página inicial procurando pelo botão da carta do dia.
  const cardOfTheDayBtn = document.getElementById('card-of-the-day-btn');
  if (cardOfTheDayBtn) {
    cardOfTheDayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showCardOfTheDay();
    });

    // Lógica para fechar o modal
    const modal = document.getElementById('card-of-the-day-modal');
    const closeBtn = modal.querySelector('.close-button');
    
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
    
    // Adiciona botão de editar perfil na home se o usuário já tiver perfil
    const profile = getUserProfile();
    if (profile) {
      const homeContainer = document.querySelector('.home-container');
      if (homeContainer) {
        const editProfileBtn = document.createElement('button');
        editProfileBtn.className = 'edit-profile-btn';
        editProfileBtn.innerHTML = '✏️ Editar Perfil';
        editProfileBtn.addEventListener('click', showProfileForm);
        homeContainer.appendChild(editProfileBtn);
      }
    }
  }
});

/*
========================================
  EXPORTS GLOBAIS
========================================
*/

// Disponibiliza a função `renderCartas` globalmente para ser chamada 
// pelo atributo `onload` na página `todas.html`.
window.renderCartas = renderCartas;