class Sidebar {
  // ADMIN PROFILE
  get back2Qira() {
    return $('[data-testid=Volver-a-QIRA]');
  }
  get 

  // CLIENT PROFILE
  get myOrders() {
    return $('[data-testid=Mis-Pedidos]');
  }
  get billInfo() {
    return $('[data-testid=Datos-de-Facturación]');
  }
  get personalInfo() {
    return $('[data-testid=Datos-de-Usuario]');
  }
  get logout() {
    return $('[data-testid=Cerrar-Sesión]');
  }
}

export default new Sidebar();