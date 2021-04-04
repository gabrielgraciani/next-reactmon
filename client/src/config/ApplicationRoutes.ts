const ApplicationRoutes = {
  ROOT: '/',
  POKEDEX: '/pokedex',
  ITEMS: '/items',
  CITIES: '/cities',
  LOGIN: '/login',
  REGISTER: '/register',
  ADMIN: {
    ROOT: '/admin/pokemons',
    ITEMS: '/admin/items',
    CITIES: {
      LIST: '/admin/cities',
      CREATE: '/admin/cities/create',
      EDIT: '/admin/cities',
    },
  },
};

export default ApplicationRoutes;
