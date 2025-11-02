/* cartas.js - 49 cartas */
const cartas = [
  {
    numero: "01",
    nome: "O Galo",
    descricao: "Símbolo de vigilância e anúncio de novos ciclos. Representa coragem e a força para iniciar algo novo.",
    caracteristicas: "Observador, altivo, confiante.",
    imagem: "img/01. galo.jpeg",
    virtudes: "Liderança, iniciativa, alerta.",
    sombras: "Arrogância, impaciência, teimosia."
  },
  {
    numero: "02",
    nome: "A Galinha",
    descricao: "Representa cuidado, proteção e fertilidade. Energia materna e acolhimento.",
    caracteristicas: "Protetora, paciente, dedicada.",
    imagem: "img/02. galinha.jpeg",
    virtudes: "Cuidado, nutrição, segurança.",
    sombras: "Medo excessivo, acomodação, superproteção."
  },
  {
    numero: "03",
    nome: "A Formiga",
    descricao: "Simboliza disciplina, organização e trabalho em equipe.",
    caracteristicas: "Persistente, metódica, colaborativa.",
    imagem: "img/03. formiga.jpeg",
    virtudes: "Planejamento, resiliência, união.",
    sombras: "Rigidez, excesso de rotina, submissão."
  },
  {
    numero: "04",
    nome: "O Coco",
    descricao: "Representa proteção e o valor oculto que existe no interior.",
    caracteristicas: "Resistente, nutritivo, versátil.",
    imagem: "img/04. côco.jpeg",
    virtudes: "Força interna, resistência, recursos escondidos.",
    sombras: "Dureza excessiva, isolamento, dificuldade de abrir-se."
  },
  {
    numero: "05",
    nome: "O Sol",
    descricao: "Símbolo de clareza, vitalidade e sucesso.",
    caracteristicas: "Brilhante, expansivo, energético.",
    imagem: "img/05. sol.jpeg",
    virtudes: "Iluminação, crescimento, alegria.",
    sombras: "Exposição excessiva, arrogância, esgotamento."
  },
  {
    numero: "06",
    nome: "A Aranha",
    descricao: "Criatividade e paciência, tecendo o próprio destino.",
    caracteristicas: "Estrategista, criadora, resiliente.",
    imagem: "img/06. aranha.jpeg",
    virtudes: "Planejamento, habilidade, autossuficiência.",
    sombras: "Manipulação, isolamento, espera excessiva."
  },
  {
    numero: "07",
    nome: "O Violão",
    descricao: "Harmonia, expressão e sensibilidade artística.",
    caracteristicas: "Criativo, sensível, comunicativo.",
    imagem: "img/07. violao.jpeg",
    virtudes: "Inspiração, conexão emocional, beleza.",
    sombras: "Melancolia, idealização, fuga da realidade."
  },
  {
    numero: "08",
    nome: "O Elefante",
    descricao: "Força, memória e sabedoria ancestral.",
    caracteristicas: "Paciente, protetor, respeitado.",
    imagem: "img/08. elefante.jpeg",
    virtudes: "Resiliência, lealdade, estabilidade.",
    sombras: "Lentidão, apego excessivo ao passado, teimosia."
  },
  {
    numero: "09",
    nome: "O Cachorro",
    descricao: "Fidelidade, lealdade e parceria incondicional.",
    caracteristicas: "Companheiro, confiável, protetor.",
    imagem: "img/09. cachorro.jpeg",
    virtudes: "Amizade, confiança, proteção.",
    sombras: "Dependência, ciúme, submissão."
  },
  {
    numero: "10",
    nome: "O Gato",
    descricao: "Independência, mistério e instinto.",
    caracteristicas: "Ágil, enigmático, seletivo.",
    imagem: "img/10. gato.jpeg",
    virtudes: "Autonomia, intuição, charme.",
    sombras: "Desapego excessivo, imprevisibilidade, egocentrismo."
  },
  {
    numero: "11",
    nome: "O Dragão",
    descricao: "Força mítica, proteção e poder de transformação.",
    caracteristicas: "Poderoso, imponente, místico.",
    imagem: "img/11. dragão.jpeg",
    virtudes: "Energia vital, coragem, liderança.",
    sombras: "Orgulho, dominação, destruição."
  },
  {
    numero: "12",
    nome: "A Lua",
    descricao: "Mistério, intuição e ilusões.",
    caracteristicas: "Sensível, introspectiva, enigmática.",
    imagem: "img/12. lua.jpeg",
    virtudes: "Imaginação, espiritualidade, sensibilidade.",
    sombras: "Confusão, engano, incerteza."
  },
  {
    numero: "13",
    nome: "A Árvore",
    descricao: "Raízes firmes, crescimento e estabilidade.",
    caracteristicas: "Estável, nutridora, resistente.",
    imagem: "img/13. árvore.jpeg",
    virtudes: "Segurança, prosperidade, equilíbrio.",
    sombras: "Rigidez, estagnação, apego excessivo."
  },
  {
    numero: "14",
    nome: "Espada Flamejante",
    descricao: "Força decisiva e energia ardente.",
    caracteristicas: "Determinada, impetuosa, destrutiva.",
    imagem: "img/14. flamejante.jpeg",
    virtudes: "Coragem, ação, justiça.",
    sombras: "Impulsividade, violência, intolerância."
  },
  {
    numero: "15",
    nome: "Espada Congelada",
    descricao: "Clareza racional e distanciamento emocional.",
    caracteristicas: "Fria, analítica, calculista.",
    imagem: "img/15. congelada.jpeg",
    virtudes: "Lógica, estratégia, foco.",
    sombras: "Frieza, inflexibilidade, dureza."
  },
  {
    numero: "16",
    nome: "Tartaruga",
    descricao: "Paciência e perseverança ao longo do tempo.",
    caracteristicas: "Lenta, constante, resiliente.",
    imagem: "img/16. tartaruga.jpeg",
    virtudes: "Estabilidade, resistência, prudência.",
    sombras: "Lentidão excessiva, apego ao passado."
  },
  {
    numero: "17",
    nome: "Coruja",
    descricao: "Sabedoria e percepção profunda.",
    caracteristicas: "Observadora, intuitiva, atenta.",
    imagem: "img/17. coruja.jpeg",
    virtudes: "Conhecimento, discernimento, visão ampla.",
    sombras: "Isolamento, frieza, desconfiança."
  },
  {
    numero: "18",
    nome: "Chave",
    descricao: "Acesso, revelação e solução de mistérios.",
    caracteristicas: "Útil, decisiva, transformadora.",
    imagem: "img/18. chave.jpeg",
    virtudes: "Descobertas, soluções, abertura.",
    sombras: "Segredos perigosos, decisões precipitadas."
  },
  {
    numero: "19",
    nome: "Relógio",
    descricao: "Ciclos, tempo e urgência.",
    caracteristicas: "Preciso, inevitável, rítmico.",
    imagem: "img/19. relogio.jpeg",
    virtudes: "Planejamento, pontualidade, ordem.",
    sombras: "Pressão, ansiedade, limitação."
  },
  {
    numero: "20",
    nome: "Escada",
    descricao: "Ascensão, progresso e superação de desafios.",
    caracteristicas: "Elevadora, estruturada, direcional.",
    imagem: "img/20. escada.jpeg",
    virtudes: "Crescimento, conquista, avanço.",
    sombras: "Medo de altura, risco de queda, pressa."
  },
  {
    numero: "21",
    nome: "Praia",
    descricao: "Harmonia entre terra e mar, relaxamento e transição.",
    caracteristicas: "Tranquila, mutável, expansiva.",
    imagem: "img/21. praia.jpeg",
    virtudes: "Paz, liberdade, descanso.",
    sombras: "Distração, instabilidade, fuga da realidade."
  },
  {
    numero: "22",
    nome: "Hamster",
    descricao: "Energia acumulada e hábitos repetitivos.",
    caracteristicas: "Ágil, curioso, persistente.",
    imagem: "img/22. hamster.jpeg",
    virtudes: "Constância, determinação, foco.",
    sombras: "Rotina excessiva, ansiedade, impulsividade."
  },
  {
    numero: "23",
    nome: "Café",
    descricao: "Estímulo, energia e clareza mental.",
    caracteristicas: "Revigorante, quente, intenso.",
    imagem: "img/23. café.jpeg",
    virtudes: "Produtividade, motivação, clareza.",
    sombras: "Ansiedade, pressa, vício."
  },
  {
    numero: "24",
    nome: "Bicicleta",
    descricao: "Movimento equilibrado e independência.",
    caracteristicas: "Leve, prática, adaptável.",
    imagem: "img/24. bicicleta.jpeg",
    virtudes: "Liberdade, progresso, saúde.",
    sombras: "Instabilidade, esforço constante, vulnerabilidade."
  },
  {
    numero: "25",
    nome: "Smartphone",
    descricao: "Comunicação instantânea e acesso à informação.",
    caracteristicas: "Conectado, prático, versátil.",
    imagem: "img/25. smartphone.jpeg",
    virtudes: "Conexão, conhecimento, oportunidades.",
    sombras: "Distração, dependência, isolamento social."
  },
  {
    numero: "26",
    nome: "Lápis",
    descricao: "Criação e possibilidade de reescrever caminhos.",
    caracteristicas: "Versátil, frágil, criativo.",
    imagem: "img/26. lápis.jpeg",
    virtudes: "Criatividade, aprendizado, flexibilidade.",
    sombras: "Insegurança, fragilidade, efemeridade."
  },
  {
    numero: "27",
    nome: "Garrafa de Vinho",
    descricao: "Celebração, maturidade e prazer refinado.",
    caracteristicas: "Envelhecida, marcante, intensa.",
    imagem: "img/27. vinho.jpeg",
    virtudes: "Alegria, experiência, sabedoria.",
    sombras: "Excesso, nostalgia, escapismo."
  },
  {
    numero: "28",
    nome: "Escova de Dente",
    descricao: "Cuidado pessoal e manutenção diária.",
    caracteristicas: "Útil, higiênica, constante.",
    imagem: "img/28. escova.jpeg",
    virtudes: "Saúde, prevenção, disciplina.",
    sombras: "Rigidez, obsessão, repetição."
  },
  {
    numero: "29",
    nome: "Óculos",
    descricao: "Clareza e foco.",
    caracteristicas: "Preciso, revelador, direto.",
    imagem: "img/29. oculos.jpeg",
    virtudes: "Visão clara, entendimento, foco.",
    sombras: "Dependência, limitação, visão restrita."
  },
  {
    numero: "30",
    nome: "Revólver",
    descricao: "Poder decisivo e risco imediato.",
    caracteristicas: "Rápido, letal, direto.",
    imagem: "img/30. revolver.jpeg",
    virtudes: "Determinação, defesa, ação.",
    sombras: "Impulsividade, perigo, violência."
  },
  {
    numero: "31",
    nome: "Porco",
    descricao: "Representa abundância, prosperidade e satisfação material, mas também indulgência.",
    caracteristicas: "Prático, determinado, persistente.",
    imagem: "img/31. porco.jpeg",
    virtudes: "Prosperidade, persistência, gratidão.",
    sombras: "Preguiça, gula, materialismo."
  },
  {
    numero: "32",
    nome: "Maga",
    descricao: "Figura de sabedoria intuitiva, poder oculto e transformação mágica.",
    caracteristicas: "Misteriosa, criativa, espiritual.",
    imagem: "img/32. maga.jpeg",
    virtudes: "Conhecimento, intuição, poder pessoal.",
    sombras: "Manipulação, segredos, ilusão."
  },
  {
    numero: "33",
    nome: "Abacaxi",
    descricao: "Exuberância, hospitalidade e resistência protegida por espinhos.",
    caracteristicas: "Doce, vibrante, resiliente.",
    imagem: "img/33. abacaxi.jpeg",
    virtudes: "Alegria, acolhimento, energia vital.",
    sombras: "Proteção excessiva, orgulho, isolamento."
  },
  {
    numero: "34",
    nome: "Tigre",
    descricao: "Força instintiva, liderança e intensidade.",
    caracteristicas: "Feroz, determinado, ágil.",
    imagem: "img/34. tigre.jpeg",
    virtudes: "Coragem, proteção, determinação.",
    sombras: "Impulsividade, agressividade, dominação."
  },
  {
    numero: "35",
    nome: "Bode",
    descricao: "Resistência e desafio às adversidades.",
    caracteristicas: "Persistente, rústico, independente.",
    imagem: "img/35. bode.jpeg",
    virtudes: "Autossuficiência, resiliência, coragem.",
    sombras: "Teimosia, rebeldia, dureza emocional."
  },
  {
    numero: "36",
    nome: "Telefone",
    descricao: "Comunicação direta e ligação com outros mundos ou pessoas.",
    caracteristicas: "Conectivo, rápido, útil.",
    virtudes: "Comunicação, aproximação, clareza.",
    sombras: "Mal-entendidos, interrupções, excesso de informações."
  },
  {
    numero: "37",
    nome: "Tubarão",
    descricao: "Instinto predador, foco e sobrevivência.",
    caracteristicas: "Determinado, agressivo, rápido.",
    virtudes: "Determinação, foco, poder.",
    sombras: "Impiedade, agressividade, egoísmo."
  },
  {
    numero: "38",
    nome: "Coroa",
    descricao: "Autoridade, liderança e reconhecimento.",
    caracteristicas: "Respeitada, imponente, valiosa.",
    virtudes: "Prestígio, poder, confiança.",
    sombras: "Arrogância, autoritarismo, isolamento."
  },
  {
    numero: "39",
    nome: "Girassol",
    descricao: "Luz, positividade e busca por energia.",
    caracteristicas: "Alegre, expansivo, fiel ao propósito.",
    virtudes: "Felicidade, vitalidade, esperança.",
    sombras: "Dependência, ilusão, ingenuidade."
  },
  {
    numero: "40",
    nome: "Porta",
    descricao: "Abertura para novas oportunidades e transições.",
    caracteristicas: "Simbólica, transformadora, versátil.",
    virtudes: "Novos começos, descobertas, passagem.",
    sombras: "Incerteza, medo do desconhecido, oportunidades perdidas."
  },
  {
    numero: "41",
    nome: "Sapo Marrom",
    descricao: "Transformação ligada à terra e à adaptação.",
    caracteristicas: "Discreto, adaptável, resistente.",
    virtudes: "Adaptação, renovação, paciência.",
    sombras: "Estagnação, preguiça, falta de ambição."
  },
  {
    numero: "42",
    nome: "Coronavírus",
    descricao: "Crise, transformação forçada e quebra de padrões.",
    caracteristicas: "Disruptivo, impactante, imprevisível.",
    virtudes: "Mudança necessária, reinvenção, resiliência.",
    sombras: "Medo, isolamento, perda."
  },
  {
    numero: "43",
    nome: "Dinossauro",
    descricao: "Força ancestral, ligação com o passado e resistência.",
    caracteristicas: "Gigante, imponente, primitivo.",
    virtudes: "Força, experiência, sobrevivência.",
    sombras: "Obsolescência, rigidez, destruição."
  },
  {
    numero: "44",
    nome: "Macaco",
    descricao: "Inteligência, curiosidade e adaptação.",
    caracteristicas: "Brincalhão, ágil, criativo.",
    virtudes: "Inovação, flexibilidade, alegria.",
    sombras: "Inconstância, dispersão, travessura excessiva."
  },
  {
    numero: "45",
    nome: "Raccoon (Guaxinim)",
    descricao: "Astúcia, adaptabilidade e trabalho noturno.",
    caracteristicas: "Observador, ágil, engenhoso.",
    virtudes: "Inteligência, sobrevivência, curiosidade.",
    sombras: "Engano, oportunismo, desconfiança."
  },
  {
    numero: "46",
    nome: "Hiena",
    descricao: "Sobrevivência em ambientes hostis e aproveitamento de recursos.",
    caracteristicas: "Astuta, resiliente, social.",
    virtudes: "Resiliência, adaptabilidade, coragem.",
    sombras: "Cinismo, oportunismo, comportamento predatório."
  },
  {
    numero: "47",
    nome: "Uva Vermelha",
    descricao: "Prazer, fartura e celebração.",
    caracteristicas: "Doce, vibrante, nutritiva.",
    virtudes: "Alegria, abundância, união.",
    sombras: "Excesso, desperdício, preguiça."
  },
  {
    numero: "48",
    nome: "Maçã Vermelha",
    descricao: "Sedução, desejo e tentação.",
    caracteristicas: "Atraente, intensa, irresistível.",
    virtudes: "Amor, inspiração, prazer.",
    sombras: "Engano, perigo oculto, vaidade."
  },
  {
    numero: "49",
    nome: "Jumento",
    descricao: "Resistência e humildade diante de desafios.",
    caracteristicas: "Forte, paciente, persistente.",
    virtudes: "Trabalho árduo, lealdade, resiliência.",
    sombras: "Teimosia, lentidão, inflexibilidade."
  }
];

/* Disponibiliza globalmente para os outros scripts */
window.cartas = cartas;