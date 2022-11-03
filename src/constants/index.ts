export enum MainRoutes {
  STORYBOOK = '/storybook',
  CATEGORY = '/category/:url',
  SEARCH_RESULTS = '/search-results/:searchInput',
}

export enum AdminRoutes {
  ORDERS = '/orders',
  CLIENTS = '/clients',
  CLIENT = '/client/:id',
  PRODUCT = '/product',
  PRODUCTS = '/products',
  CATEGORIES = '/categories',
  DELIVER = '/deliver',
  CATEGORY_CREATE = '/category',
  CATEGORY_EDIT = '/category/:id',
}

export enum ClientRoutes {
  CLIENT_PROFILE = '/client',
}
