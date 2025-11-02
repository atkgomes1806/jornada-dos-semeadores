/**
 * Insere dinamicamente a barra de navegação inferior nas páginas.
 * Isso centraliza o código da navegação, facilitando a manutenção.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Determina a página atual para não mostrar o link para si mesma.
  const currentPage = window.location.pathname.split('/').pop();

  const navLinks = [
    { href: 'index.html', text: 'Voltar ao início' },
    { href: 'todas.html', text: 'Ver todas as cartas' },
    { href: 'lancar.html', text: 'Fazer uma leitura' }
  ];

  const linksHtml = navLinks
    .filter(link => link.href !== currentPage) // Filtra o link da página atual
    .map(link => `<a href="${link.href}" class="button-link">${link.text}</a>`)
    .join('');

  document.body.insertAdjacentHTML('beforeend', `<div class="bottom-nav">${linksHtml}</div>`);
});