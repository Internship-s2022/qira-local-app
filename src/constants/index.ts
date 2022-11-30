export enum MainRoutes {
  CATEGORY = '/category/:url',
  SEARCH_RESULTS = '/search-results/:searchInput',
}

export enum AdminRoutes {
  ORDERS = '/orders',
  ORDER = '/order/:id',
  CLIENTS = '/clients',
  CLIENT = '/client/:id',
  PRODUCT_CREATE = '/product',
  PRODUCT_EDIT = '/product/:id',
  PRODUCTS = '/products',
  CATEGORIES = '/categories',
  DELIVER = '/deliver',
  CATEGORY_CREATE = '/category',
  CATEGORY_EDIT = '/category/:id',
}

export enum ClientRoutes {
  CLIENT_PROFILE = '/client',
  PRODUCT_DETAIL = '/product/:id',
}
export enum ProfileClientRoutes {
  BILL_INFORMATION = '/bill-information',
  MY_ORDERS = '/my-orders',
  USER_DATA = '/user-data',
}
export enum OrderRoutes {
  SUMMARY = '/summary',
  AUTHORIZED = '/authorized',
  DELIVERY_DATE = '/delivery-date',
  FINISH_ORDER = '/finish',
  PAYMENT_METHOD = '/payment',
  FINAL_SCREEN = '/final',
}
