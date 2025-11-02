# Instruções rápidas para agentes AI

Este repositório é um site estático simples (HTML/CSS/JS) chamado "Cartas do Universo". O objetivo deste arquivo é fornecer orientação prática e específica para agentes de codificação que vão trabalhar diretamente neste projeto.

- Estrutura principal
  - Arquivos chave: `index.html`, `lancar.html`, `todas.html`, `cartas.js`, `script.js`, `style.css`.
  - `cartas.js` contém um array global `cartas` com 49 objetos (números, nomes, descrições, virtudes, sombras). Ele define `window.cartas = cartas` para uso global.
  - `script.js` contém duas funções públicas usadas pelas páginas:
    - `renderCartas(lista)` — renderiza todas as cartas passadas no `container`.
    - `sortearCartas()` — embaralha e exibe 7 cartas divididas em 3 blocos (usada em `lancar.html`).
  - Páginas:
    - `todas.html` carrega `cartas.js` + `script.js` e chama `renderCartas(cartas)` no carregamento.
    - `lancar.html` carrega os mesmos scripts e chama `sortearCartas()` no carregamento.

- Padrões e convenções detectados
  - Projeto é 100% cliente-side, sem build step ou dependências NPM.
  - Global state: os dados de cartas estão expostos via `window.cartas` — agentes devem preservar esse contrato quando refatorarem.
  - Renderização: `script.js` escreve HTML diretamente em `container.innerHTML` (concatenação de strings). Se refatorar, mantenha a API pública (`renderCartas` / `sortearCartas`) para compatibilidade com as páginas.
  - Estilo visual: cartas usam classes `.card`, `.card-inner`, `.card-front`, `.card-back` em `style.css`. Ao alterar estrutura de DOM, atualize ou mantenha essas classes para preservar o comportamento de flip (hover > rotateY).

- Tarefas comuns e exemplos
  - Para adicionar uma nova carta: edite `cartas.js` e adicione um objeto com as mesmas chaves: `numero`, `nome`, `descricao`, `caracteristicas`, `virtudes`, `sombras`.
  - Para mostrar apenas as cartas de 1–10 em `todas.html` sem alterar `script.js`: crie uma pequena chamada no HTML inline como `renderCartas(cartas.filter(c=>parseInt(c.numero)<=10))`.
  - Para testes manuais: abrir `index.html` em um navegador (arraste o arquivo ou use um servidor estático). Não há testes automatizados no repositório.

- Pontos a observar (armadilhas)
  - `cartas.js` define dados em nível global; refatorações que moverem os dados para módulos ES6 precisarão mudar as importações em todos os HTML (ou manter `window.cartas` como fallback).
  - `innerHTML +=` é usado repetidamente; para grandes listas isso re-renderiza o container várias vezes. Se otimizar por performance, construir uma única string e atribuir uma vez é preferível.
  - Algumas cartas têm nomes/emojis/strings que podem precisar de escaping ao gerar HTML dinâmico; use funções de escape se converter para templates mais complexos.

- Exemplos de mudanças seguras
  - Melhorar renderização mantendo API pública:
    - Substituir construção por builder: const html = lista.map(c=>`...`).join(''); container.innerHTML = html;
  - Migrar para ES modules com fallback:
    - Criar `cartas.mjs` exportando `cartas`; atualizar `script.js` para consumir via import quando disponível, e também setar `window.cartas = cartas` para compatibilidade.

- Objetivo do agente
  - Fazer mudanças pequenas e seguras que preservem o comportamento das páginas lançadas (`index.html`, `todas.html`, `lancar.html`).
  - Sempre testar abrindo as páginas no navegador local após mudanças.

Se algo não estiver claro ou você quiser que eu expanda com exemplos de refatoração (ESModules, testes unitários simples, ou servidor estático com `http-server`), diga quais áreas prefere priorizar.