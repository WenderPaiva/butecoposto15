/**
 * FONTE DE DADOS & CARDÁPIO — BOTECO POSTO 15
 * Design & Concepção Visual por Wender Paiva
 */

window.BUTECO_DATA = {
  categories: [
    {
      id: "todos",
      label: "Menu Completo",
      shortLabel: "Todos",
      subtitle: "A curadoria integral da alta botecagem do Posto 15",
      iconName: "Sparkles",
    },
    {
      id: "petiscos",
      label: "Petiscos & Botecagem Autoral (P15)",
      shortLabel: "Petiscos P15",
      subtitle: "Clássicos de balcão elevados à gastronomia de autor",
      iconName: "UtensilsCrossed",
    },
    {
      id: "chapas",
      label: "Da Chapa & Réchauds Nobres",
      shortLabel: "Chapas & Réchauds",
      subtitle: "Cortes selecionados servidos fumegantes à mesa no ferro fundido",
      iconName: "Flame",
    },
    {
      id: "milanesas",
      label: "Milanesas Especiais",
      shortLabel: "Milanesas",
      subtitle: "Crosta dourada impecável, queijos nobres e gratinados de forno",
      iconName: "Award",
    },
    {
      id: "coquetelaria",
      label: "Coquetelaria & Chopes",
      shortLabel: "Drinks & Chopp",
      subtitle: "Colarinho aveludado a -2°C, destilados de alambique e alquimia botânica",
      iconName: "Wine",
    },
  ],

  filterTags: [
    {
      id: "Destaques do Chef",
      label: "Destaques do Chef",
      icon: "ChefHat",
      description: "Criações premiadas e assinaturas imperdíveis da casa",
    },
    {
      id: "Para Compartilhar",
      label: "Para Compartilhar",
      icon: "Users",
      description: "Porções generosas pensadas para o centro da mesa",
    },
    {
      id: "Vegetariano",
      label: "Vegetariano",
      icon: "Leaf",
      description: "Sem carnes, com ingredientes nobres da terra e queijos artesanais",
    },
    {
      id: "Sem Glúten",
      label: "Sem Glúten",
      icon: "Sparkles",
      description: "Preparos naturalmente livres de trigo",
    },
  ],

  menuItems: [
    // ==========================================
    // 1. PETISCOS & BOTECAGEM AUTORAL (P15)
    // ==========================================
    {
      id: "aperitivo-monaco",
      name: "Aperitivo Mônaco",
      subtitle: "Ícone Histórico do Boteco Posto 15",
      category: "petiscos",
      price: 89.9,
      serving: "Serve 2 a 3 pessoas • 350g",
      prepTime: "18 min",
      description:
        "Paillard de filé mignon recheado com jamón serrano e queijo suíço à milanesa, servido a palito com tomates rústicos picantes.",
      chefNotes:
        "Bate-se o coração do filé mignon até atingir a espessura exata de um paillard nobre. O contraste salino do Jamón Serrano espanhol de cura prolongada funde-se ao derretimento amendoado do queijo suíço, selado em empanamento crocante e finalizado com nossa compota rústica de tomates assados e pimenta calabresa fresca.",
      ingredients: [
        "Paillard de Filé Mignon Limpo",
        "Jamón Serrano Curado 18 Meses",
        "Queijo Suíço Emmental",
        "Farinha Panko Artesanal",
        "Tomates Rústicos Assados Picantes",
        "Brotos de Manjericão Roxo",
      ],
      badge: "Carro-Chefe P15",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "ritual-do-chopp",
        name: "Ritual do Chopp Claro (-2°C)",
        type: "Chopp Artesanal de Colarinho Cremoso",
        notes:
          "O amargor nobre do lúpulo e o colarinho denso a -2°C limpam o paladar da untuosidade do queijo suíço e realçam as notas curadas do jamón serrano.",
        price: 16.9,
      },
    },
    {
      id: "croquetas-do-chef",
      name: "Croquetas do Chef",
      subtitle: "Cremosidade Interna & Defumação Artesanal",
      category: "petiscos",
      price: 64.9,
      serving: "6 Unidades • Porção para Compartilhar",
      prepTime: "15 min",
      description:
        "Croquetas de carne desfiada com parmesão e muçarela derretida, servidas com molho defumado de bacon.",
      chefNotes:
        "Cozinhamos a carne bovina em caldo escuro aromático por 8 horas até desfiar no garfo. Envolvida em roux amanteigado com parmesão maturado 12 meses e coração de muçarela fior di latte, cada croqueta é escoltada por nossa emulsão autoral de bacon defumado em lenha de macieira.",
      ingredients: [
        "Brisket Bovino Braseado 8h",
        "Parmesão Capa Preta Ralado",
        "Coração de Muçarela Derretida",
        "Béchamel Rústico na Manteiga",
        "Emulsão Defumada de Bacon Artesanal",
      ],
      badge: "Favorito da Casa",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "moscow-mule-autoral",
        name: "Moscow Mule da Casa (Espuma de Gengibre)",
        type: "Coquetel Clássico Refinado",
        notes:
          "A picância fresca da espuma artesanal de gengibre corta a riqueza da croqueta e cria uma ponte aromática perfeita com o molho defumado de bacon.",
        price: 38.0,
      },
    },
    {
      id: "disco-costela-defumada",
      name: "Disco de Costela Defumada",
      subtitle: "Pit Smoker & Queijo da Serra da Canastra",
      category: "petiscos",
      price: 72.9,
      serving: "4 Discos Altos • 320g",
      prepTime: "16 min",
      description:
        "Disco empanado de costela bovina defumada em lenha nobre, recheado com queijo da canastra e molho da casa.",
      chefNotes:
        "Nossa costela Minga passa pelo defumador a lenha de frutíferas antes de ser moldada manualmente sem adição de farinhas na massa. No centro, uma generosa fatia de Queijo da Canastra meia-cura derrete ao toque do garfo.",
      ingredients: [
        "Costela Bovina Defumada em Lenha Nobre",
        "Queijo Artesanal da Serra da Canastra",
        "Crosta Dourada de Especiarias",
        "Molho Secreto da Casa levemente Picante",
        "Cebolinha Verde Tostada",
      ],
      badge: "Defumado na Casa",
      badgeVariant: "ruby",
      filters: ["Destaques do Chef", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "caipirinha-alambique",
        name: "Caipirinha Três Limões & Cachaça de Carvalho",
        type: "Coquetelaria Brasileira de Alambique",
        notes:
          "As notas amadeiradas da cachaça envelhecida em tonéis de carvalho abraçam o defumado da costela e a acidez dos três limões equilibra o Canastra.",
        price: 36.0,
      },
    },
    {
      id: "torresmo-panceta-defumada",
      name: "Torresmo de Panceta Defumada",
      subtitle: "Pururuca Cristalina & Carne Suculenta",
      category: "petiscos",
      price: 68.5,
      serving: "Serve 2 a 3 pessoas • 400g",
      prepTime: "15 min",
      description:
        "Cubos crocantes e suculentos com batatas rústicas ao alecrim e flor de sal.",
      chefNotes:
        "Panceta suína selecionada, marinada em ervas frescas e cítricos por 24 horas, confitada lentamente na própria gordura e finalizada em choque térmico para garantir pele vitrificada à pururuca e interior macio. Acompanha gomos de batata rústica com alecrim tostado e flor de sal.",
      ingredients: [
        "Panceta Suína Nobre em Cubos Altos",
        "Batatas Rústicas ao Murro",
        "Alecrim Fresco Maçaricado",
        "Flor de Sal & Pimenta do Reino Moída na Hora",
        "Geleia Artesanal de Pimenta Biquinho",
      ],
      badge: "Crocância Absoluta",
      badgeVariant: "ruby",
      filters: ["Para Compartilhar", "Sem Glúten"],
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "caipirinha-alambique",
        name: "Caipirinha Três Limões & Cachaça de Carvalho",
        type: "Coquetelaria Brasileira de Alambique",
        notes:
          "O casamento mais sagrado da botecagem brasileira: panceta crocante de pele pururucada com cachaça de alambique e limão fresco.",
        price: 36.0,
      },
    },
    {
      id: "dadinhos-tapioca-coalho",
      name: "Dadinhos de Tapioca & Queijo Coalho Ouro",
      subtitle: "Clássico Brasileiro em Versão Gourmet",
      category: "petiscos",
      price: 54.9,
      serving: "12 Unidades • Para Compartilhar",
      prepTime: "12 min",
      description:
        "Cubos dourados de tapioca granulada artesanal com queijo coalho curado, servidos com geleia rubi de pimenta defumada e melaço de engenho.",
      chefNotes:
        "Textura crocante por fora e elástica por dentro, elaborada com queijo coalho de fazenda e leite integral aromatizado com pimenta-branca. Totalmente livre de glúten e vegetariano.",
      ingredients: [
        "Tapioca Granulada Artesanal do Norte",
        "Queijo Coalho de Fazenda Curado",
        "Geleia Rubi de Pimenta Dedo-de-Moça",
        "Redução de Melaço de Cana com Especiarias",
      ],
      badge: "Vegetariano & Sem Glúten",
      badgeVariant: "gold",
      filters: ["Para Compartilhar", "Vegetariano", "Sem Glúten"],
      image:
        "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "gin-tonic-botanico",
        name: "Gin Tonic com Botânicos Selecionados",
        type: "Alta Coquetelaria Refrescante",
        notes:
          "Os botânicos cítricos e o zimbro contrastam com o dulçor picante da geleia rubi e a salinidade do queijo coalho.",
        price: 42.0,
      },
    },

    // ==========================================
    // 2. DA CHAPA & RÉCHAUDS NOBRES (POSTO 15)
    // ==========================================
    {
      id: "chapa-picanha-maturatta",
      name: "Chapa de Picanha Maturatta",
      subtitle: "Especialidade na Chapa • Réchaud de Ferro Fundido",
      category: "chapas",
      price: 164.9,
      serving: "Serve 3 pessoas • 400g de Corte Nobre",
      prepTime: "22 min",
      description:
        "400g de picanha fatiada servida fumegante sobre cama de cebolas na manteiga de garrafa, com farofa da casa, vinagrete e chimichurri.",
      chefNotes:
        "Selecionamos apenas o coração da Picanha Maturatta com capa de gordura uniforme, selada em fogo alto e levada à sua mesa em chapa de ferro fundido crepitante sobre cebolas caramelizadas na manteiga de garrafa.",
      ingredients: [
        "400g de Coração de Picanha Maturatta",
        "Cebolas Roxas & Brancas na Manteiga de Garrafa",
        "Farofa Crocante da Casa na Manteiga com Castanhas",
        "Chimichurri Argentino Artesanal",
        "Vinagrete Fresco no Azeite Extravirgem",
        "Pão Italiano Rústico para Acompanhar",
      ],
      badge: "Especialidade na Chapa",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Para Compartilhar", "Sem Glúten"],
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "ritual-do-chopp",
        name: "Ritual do Chopp (-2°C com 3 Dedos de Colarinho)",
        type: "Tradição de Botequim Nobre",
        notes:
          "Não há ritual mais emblemático: o calor fumegante da chapa de ferro com picanha na manteiga de garrafa pede a tulipa suada de chopp a -2°C.",
        price: 16.9,
      },
    },
    {
      id: "carne-serenada-angus",
      name: "Carne Serenada Angus",
      subtitle: "Cura Noturna Tradicional & Redução de Demi-Glace",
      category: "chapas",
      price: 148.9,
      serving: "Serve 2 a 3 pessoas • 400g",
      prepTime: "20 min",
      description:
        "Coxão mole serenado com redução de demi-glace, servido na chapa com batata rústica.",
      chefNotes:
        "Corte certificado Angus submetido à técnica tradicional de sereno sob baixa temperatura para concentrar suculência e maciez extrema. Finalizado na chapa quente com nossa redução espelhada de demi-glace de ossos tostados e escoltado por batatas rústicas douradas.",
      ingredients: [
        "Coxão Mole Angus Certificado Serenado",
        "Redução Artesanal de Demi-Glace 24h",
        "Cama de Cebolas Douradas",
        "Batatas Rústicas com Alecrim",
        "Farofa Especial de Ovos & Chimichurri",
      ],
      badge: "Corte Angus Certificado",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "moscow-mule-autoral",
        name: "Moscow Mule da Casa",
        type: "Coquetel Refrescante em Caneca de Cobre",
        notes:
          "As notas intensas de umami do demi-glace e da carne serenada ganham leveza e brilho com o frescor cítrico e picante do Moscow Mule.",
        price: 38.0,
      },
    },
    {
      id: "surf-and-turf",
      name: "Surf & Turf",
      subtitle: "Encontro de Terra & Mar na Chapa Quente",
      category: "chapas",
      price: 179.9,
      serving: "Serve 2 a 3 pessoas • Baby Beef + Camarões GG",
      prepTime: "24 min",
      description:
        "Baby beef angus grelhado acompanhado de camarões GG empanados e molho tártaro artesanal.",
      chefNotes:
        "Uma celebração da alta gastronomia boêmia: medalhões altos de Baby Beef Angus grelhados ao ponto rosado perfeito, coroados por camarões Rosa GG em crosta crocante dourada e nosso molho tártaro artesanal com alcaparras francesas, dill e cornichons.",
      ingredients: [
        "Baby Beef Angus Grelhado na Brasa",
        "Camarões Rosa GG Empanados em Panko",
        "Molho Tártaro Artesanal com Alcaparras e Dill",
        "Cama de Cebolas Caramelizadas",
        "Batatas Fritas Rústicas Crocantes",
      ],
      badge: "Terra & Mar",
      badgeVariant: "ruby",
      filters: ["Destaques do Chef", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "gin-tonic-botanico",
        name: "Gin Tonic com Botânicos Selecionados",
        type: "Alta Coquetelaria Botânica",
        notes:
          "A delicadeza marinha dos camarões GG e a suculência do Baby Beef Angus harmonizam com a vivacidade cítrica da laranja Bahia e do zimbro.",
        price: 42.0,
      },
    },

    // ==========================================
    // 3. MILANESAS ESPECIAIS
    // ==========================================
    {
      id: "milanesa-fugazzeta",
      name: "Milanesa à Fugazzeta",
      subtitle: "Herança Porteña Gratinada no Forno",
      category: "milanesas",
      price: 118.9,
      serving: "Serve 2 pessoas • Acompanha Fritas Rústicas",
      prepTime: "20 min",
      description:
        "Filé mignon à milanesa gratinado com muçarela especial e cebolas douradas no orégano fresco.",
      chefNotes:
        "Homenagem às clássicas bodegas de Buenos Aires e ao cardápio autoral do Posto 15. O filé mignon aberto em borboleta recebe dupla empanagem crocante que não absorve óleo, é coberto por camada generosa de muçarela especial e cebolas brancas doces salteadas no azeite e orégano fresco.",
      ingredients: [
        "Filé Mignon Aberto e Empanado em Panko",
        "Muçarela Especial Gratinada",
        "Cebolas Doces Caramelizadas no Azeite",
        "Orégano Fresco Debulhado",
        "Batatas Rústicas Douradas & Salada Verde",
      ],
      badge: "Clássico Porteño P15",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "ritual-do-chopp",
        name: "Ritual do Chopp (-2°C)",
        type: "Chopp Claro ou Black com Colarinho Aveludado",
        notes:
          "O gratinado de queijo com cebola doce e orégano encontra seu par ideal na refrescância cristalina do chopp tirado na pressão exata.",
        price: 16.9,
      },
    },
    {
      id: "milanesa-gorgonzola",
      name: "Milanesa Gorgonzola",
      subtitle: "Intensidade Aveludada & Contraste Agridoce",
      category: "milanesas",
      price: 124.9,
      serving: "Serve 2 pessoas • Acompanha Batatas Rústicas",
      prepTime: "20 min",
      description:
        "Béchamel de gorgonzola dolce e cebola caramelizada sobre paillard de filé mignon à milanesa.",
      chefNotes:
        "Para paladares que apreciam personalidade e sofisticação: sobre a crosta crocante do nosso filé mignon à milanesa, despejamos um velouté de gorgonzola dolce derretido lentamente com creme fresco e noz-moscada, finalizado com cebolas caramelizadas em redução balsâmica.",
      ingredients: [
        "Paillard Alto de Filé Mignon à Milanesa",
        "Béchamel Cremoso de Queijo Gorgonzola Dolce",
        "Cebolas Roxas Caramelizadas no Balsâmico",
        "Batatas Rústicas Crocantes",
      ],
      badge: "Alta Gastronomia",
      badgeVariant: "ruby",
      filters: ["Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "gin-tonic-botanico",
        name: "Gin Tonic com Botânicos Selecionados",
        type: "Coquetelaria Autoral",
        notes:
          "A potência untuosa do gorgonzola dolce e o dulçor da cebola caramelizada brilham ao lado das notas herbais do alecrim maçaricado e zimbro.",
        price: 42.0,
      },
    },
    {
      id: "milanesa-berinjela-caprese",
      name: "Milanesa de Berinjela Defumada à Napolitana",
      subtitle: "Opção Vegetariana de Alma Boêmia",
      category: "milanesas",
      price: 92.0,
      serving: "Serve 2 pessoas • Gratinada no Forno",
      prepTime: "18 min",
      description:
        "Medalhões de berinjela defumada em crosta de ervas e parmesão, gratinados com muçarela de búfala, molho de tomates assados e pesto de manjericão.",
      chefNotes:
        "Defumamos as berinjelas inteiras antes de cortar em medalhões carnudos, empanados em farinha panko temperada com ervas provençais e parmesão. Gratinada até borbulhar com muçarela de búfala e pesto artesanal.",
      ingredients: [
        "Berinjela Defumada em Crosta de Parmesão",
        "Muçarela de Búfala Fresca",
        "Molho Rústico de Tomates San Marzano",
        "Pesto de Manjericão & Pinoli",
      ],
      badge: "Vegetariano Nobre",
      badgeVariant: "gold",
      filters: ["Vegetariano", "Para Compartilhar"],
      image:
        "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "gin-tonic-botanico",
        name: "Gin Tonic com Botânicos Selecionados",
        type: "Coquetelaria Botânica",
        notes:
          "Eleva o perfume do manjericão fresco e dos tomates assados sem sobrepor a delicadeza da muçarela de búfala.",
        price: 42.0,
      },
    },

    // ==========================================
    // 4. COQUETELARIA & CHOPES
    // ==========================================
    {
      id: "ritual-do-chopp",
      name: "Ritual do Chopp",
      subtitle: "Patrimônio Líquido • Claro Pilsen ou Black Cremoso",
      category: "coquetelaria",
      price: 16.9,
      serving: "Tulipa de Cristal 350ml • Servido a -2°C",
      prepTime: "Imediato",
      description:
        "Chopp servido a -2°C com 3 dedos de colarinho denso e cremoso.",
      chefNotes:
        "Nosso chopp percorre serpentinas refrigeradas a gelo líquido e chega à torneira italiana a exatos -2°C. Tirado em dois tempos na tulipa de cristal recém-saída do freezer, garantindo os sagrados 3 dedos de creme denso que protegem o gás e mantêm os aromas de malte intactos até o último gole.",
      ingredients: [
        "Malte 100% Puro Selecionado",
        "Lúpulos Nobres Aromáticos",
        "Serpentina a -2°C",
        "Colarinho Aveludado de 3 Dedos (Creme Tirado na Faca)",
      ],
      badge: "Ritual a -2°C",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Vegetariano"],
      image:
        "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "aperitivo-monaco",
        name: "Aperitivo Mônaco",
        type: "Harmonização Clássica de Balcão",
        notes:
          "A companhia indispensável para todos os petiscos crocantes e as chapas fumegantes do Boteco Posto 15.",
        price: 89.9,
      },
    },
    {
      id: "moscow-mule-autoral",
      name: "Drinks Autorais & Clássicos Refinados",
      subtitle: "Moscow Mule Artesanal, Cachaças de Alambique & Gin Tonics",
      category: "coquetelaria",
      price: 38.0,
      serving: "Caneca de Cobre 320ml",
      prepTime: "5 min",
      description:
        "Caipirinhas de frutas com cachaças de alambique, Moscow Mule artesanal e Gin Tonics com botânicos selecionados.",
      chefNotes:
        "Nossa carta de coquetelaria autoral celebra o equilíbrio entre a tradição boêmia brasileira e a mixologia contemporânea: espuma artesanal de gengibre fresco de sifão, cachaças envelhecidas em madeiras nobres e botânicos maçaricados na mesa.",
      ingredients: [
        "Vodka Premium / Gin London Dry / Cachaça de Alambique",
        "Espuma Cremosa Artesanal de Gengibre Fresco",
        "Frutas Frescas da Estação Maceradas na Hora",
        "Botânicos Selecionados & Especiarias",
      ],
      badge: "Assinatura do Barman",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Vegetariano", "Sem Glúten"],
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "croquetas-do-chef",
        name: "Croquetas do Chef",
        type: "Harmonização por Contraste",
        notes:
          "A acidez cítrica e o gengibre fresco cortam a cremosidade da muçarela derretida e exaltam o molho defumado de bacon.",
        price: 64.9,
      },
    },
    {
      id: "gin-tonic-botanico",
      name: "Gin Tonic com Botânicos Selecionados",
      subtitle: "Alquimia Aromática Defumada à Mesa",
      category: "coquetelaria",
      price: 42.0,
      serving: "Taça Ballon de Cristal 450ml",
      prepTime: "5 min",
      description:
        "Gin London Dry premium, água tônica artesanal de quinino natural, bagas de zimbro, alecrim maçaricado e zest de laranja Bahia.",
      chefNotes:
        "Servido em taça de cristal resfriada com esfera de gelo translúcido de derretimento lento. O ramo de alecrim é levemente maçaricado diante do cliente para liberar óleos essenciais que perfumam toda a mesa.",
      ingredients: [
        "Gin London Dry Importado",
        "Água Tônica de Quinino Natural",
        "Bagas de Zimbro & Cardamomo Verde",
        "Alecrim Fresco Maçaricado",
        "Zest de Laranja Bahia",
      ],
      badge: "Botânicos Nobres",
      badgeVariant: "ruby",
      filters: ["Vegetariano", "Sem Glúten"],
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "surf-and-turf",
        name: "Surf & Turf",
        type: "Harmonização por Afinidade",
        notes:
          "Os óleos cítricos da laranja Bahia e o frescor botânico elevam os camarões GG empanados e o Baby Beef Angus.",
        price: 179.9,
      },
    },
    {
      id: "caipirinha-alambique",
      name: "Caipirinha de Alambique: Três Limões & Rapadura",
      subtitle: "Cachaça Envelhecida em Carvalho & Frutas Frescas",
      category: "coquetelaria",
      price: 36.0,
      serving: "Copo Old Fashioned Lapidado 320ml",
      prepTime: "5 min",
      description:
        "Cachaça artesanal de alambique de cobre envelhecida em carvalho, mix de limão taiti, siciliano e cravo macerados com melado de rapadura.",
      chefNotes:
        "Respeitamos a anatomia da fruta para extrair apenas o suco e os óleos nobres da casca, sem amargor. Utilizamos cachaça de alambique de cobre envelhecida em carvalho e um toque de redução de rapadura mineira.",
      ingredients: [
        "Cachaça de Alambique Envelhecida em Carvalho",
        "Limão Taiti, Limão Siciliano & Limão Cravo",
        "Redução de Rapadura Artesanal",
        "Gelo Cristalino Maciço",
      ],
      badge: "Alambique de Cobre",
      badgeVariant: "gold",
      filters: ["Destaques do Chef", "Vegetariano", "Sem Glúten"],
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=85",
      pairing: {
        drinkId: "torresmo-panceta-defumada",
        name: "Torresmo de Panceta Defumada",
        type: "Tradição Brasileira Absoluta",
        notes:
          "A acidez perfumada dos três limões e a potência macia da cachaça de alambique são o par perfeito para a panceta pururucada.",
        price: 68.5,
      },
    },
  ],
};
