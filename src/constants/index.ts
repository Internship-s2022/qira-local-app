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
  ORDER_DETAILS = '/my-orders/:id',
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

export enum SubCodes {
  CATEGORY_WITH_PRODUCTS = 1,
  INCORRECT_ORDER_STATE = 2,
  DELIVERED_ORDER = 3,
  INCORRECT_DNI = 4,
  CLIENT_NOT_FOUND = 5,
  NO_STOCK = 6,
  INCORRECT_PRICES = 7,
  CANNOT_UPDATE_STOCK = 8,
}
