const posts = [
  {
    title: [
      'O Papel do novo centro da juventude para todos',
      'Mensagem de Natal 2020',
    ],
    category: 'messages',
    pageTitle: 'Mensagens do Presidente',
    icon: 'account-balance',
    content: '...',
  },
  {
    title: [
      'Obras na avenida 25 de Abril finalizadas atempadamente',
      'Piscinas municipais abrem portas as cidadãos carenciados',
    ],
    category: 'news',
    pageTitle: 'Notícias',
    icon: 'article',
    content: '...',
  },
  {
    title: [
      'Horários dos serviços municipais',
      'Horários das instalações desportivas',
      'Atendimento ao cliente no serviço de águas',
    ],
    category: 'schedules',
    pageTitle: 'Horas e serviços',
    icon: 'build-circle',
    content: '...',
  },
  {
    title: [
      'Tarifas de licenciamento',
      'Tarifários de água do concelho',
      'Taxas de saneamento',
    ],
    category: 'taxes',
    pageTitle: 'Taxas e Tarifários',
    icon: '',
    content: '...',
  },
];

const pages = [
  { title: 'Home', icon: 'home', url: 'home', content: [] },
  {
    title: 'Camera',
    icon: 'account-balance',
    url: 'camera',
    content: [
      {
        type: 'post',
        title: 'Mensagens do Presidente',
        properties: { categories: ['messages'] },
      },
      { type: 'post', title: 'Notícias', properties: { categories: ['news'] } },
      {
        type: 'post',
        title: 'Horas e serviços',
        properties: { categories: ['schedules', 'services'] },
      },
      {
        type: 'post',
        title: 'Taxas e Tarifários',
        properties: { categories: ['taxes'] },
      },
    ],
  },
  { title: 'Comunicar', icon: 'forum', url: 'comunicar', content: [] },
  {
    title: 'Proteção civil',
    icon: 'warning',
    url: 'protecao-civil',
    content: [],
  },
  { title: 'Covid', icon: 'gamepad', url: 'covid', content: [] },
  { title: 'Agenda', icon: 'date-range', url: 'agenda', content: [] },
];

export { posts, pages };
