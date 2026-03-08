# 🌱 Jornada dos Semeadores

Bem-vindo(a) ao **Jornada dos Semeadores** — um projeto interativo que combina **cartas virtuais** e mensagens reflexivas para auxiliar no autoconhecimento, inspiração e conexão com a jornada da vida.

> ✨ Criado e desenvolvido por **Atkgomes** para o grupo **Jornada dos Semeadores**.

---

## 📖 Sobre o projeto
Este é um **site interativo** onde você pode:
- 🌿 **Ver todas as cartas** da jornada.
- 🎯 **"Lançar para o universo"** — uma leitura de cartas personalizada onde você escolhe até 3 áreas da sua vida (como Autoconhecimento, Amor, Trabalho) e recebe uma tiragem de 3 cartas para cada área, representando "A Raiz", "O Desafio Atual" e "O Conselho".
- 🔄 **Explorar cartas com efeito de "virar"**, mostrando frente e verso com descrições, virtudes e sombras.

O projeto inclui uma tela de mentalização para focar suas intenções antes da leitura, e um sistema que evita a repetição de cartas em leituras recentes, tornando a experiência mais autêntica.

---

## 🃏 Estrutura das cartas
Cada carta contém:
- **Número e Nome**
- **Descrição**
- **Imagem** (para o fundo da carta)
- **Características**
- **Virtudes** *(qualidades positivas)*
- **Sombras** *(aspectos desafiadores)*

---

## 🚀 Funcionalidades
- **Interface simples e intuitiva** 🖥️
- **Design clean e acolhedor** 🎨
- **Animação de "flip" nas cartas** 🔄
- **Leitura de cartas personalizada** baseada em categorias ✨
- **Tela de mentalização** para uma experiência mais imersiva 🙏
- **Modo escuro** para conforto visual 🌙
- **Skeleton loader** enquanto as imagens das cartas carregam ⚡
- **Responsividade** para dispositivos móveis 📱

---

## 🛠️ Tecnologias utilizadas
- **HTML5**
- **CSS3** (incluindo animações e módulos CSS)
- **JavaScript Vanilla (ES6+)**
- **Responsividade** para dispositivos móveis
- **100% cliente-side** — sem servidor necessário

---

## 📂 Estrutura de pastas
```
📁 jornada-dos-semeadores/
├── 📂 assets/
│   └── 📂 img/           # Imagens das cartas
├── 📂 css/               # Estilos modularizados
│   ├── base.css          # Estilos base
│   ├── components.css    # Componentes visuais
│   ├── effects.css       # Efeitos visuais
│   ├── pages.css         # Estilos por página
│   ├── skeleton.css      # Skeleton loader
│   ├── style.css         # Importa todos os CSS modulares
│   ├── utilities.css     # Utilitários CSS
│   └── variants.css      # Variantes de estilos
├── 📂 js/
│   ├── cartas.js         # Banco de dados com 49 cartas
│   ├── effects.js        # Efeito de partículas da home
│   ├── nav.js            # Lógica da navegação dinâmica
│   └── script.js         # Lógica principal do sorteio, renderização e carregamento
├── 📄 index.html         # Página inicial
├── 📄 lancar.html        # Página da leitura de cartas
├── 📄 todas.html         # Página que exibe todas as cartas
└── 📄 README.md          # Documentação do projeto
```

---

## 🎯 Como executar
1. **Baixe ou clone** este repositório:
   ```bash
   git clone https://github.com/atkgomes1806/jornada-dos-semeadores.git
   ```
2. **Abra o arquivo `index.html`** em seu navegador de preferência.

Alternativa com servidor local:
   ```bash
   cd jornada-dos-semeadores
   python3 -m http.server 8000
   # Acesse http://localhost:8000
   ```

---

## ✨ Recursos Principais
- **49 Cartas** — cada uma com descrição detalhada, virtudes e sombras
- **Modo Escuro** — tema adaptável ao seu conforto visual
- **Skeleton Loading** — animação de carregamento elegante enquanto as imagens da carta aparecem
- **Histórico de Sorteios** — sistema que evita repetição nas últimas 2 leituras
- **Perfil do Usuário** — salva nome e data de nascimento no navegador
- **Persistência Local** — usa `localStorage` para manter dados sem necessidade de servidor
- **Responsividade Total** — funciona perfeitamente em desktop, tablet e mobile

---

## 📝 Notas
- O projeto utiliza **localStorage** para guardar o perfil do usuário e histórico de sorteios
- Todas as cartas incluem imagens de fundo para um visual mais atrativo
- O sistema de "virada" de cartas usa **CSS 3D Transform** para um efeito suave

---

## 🤝 Contribuições
Sugestões e melhorias são bem-vindas! Sinta-se livre para:
- Abrir issues
- Enviar pull requests
- Reportar bugs

---

## 📄 Licença
Este projeto foi criado com ❤️ para a comunidade **Jornada dos Semeadores**.
