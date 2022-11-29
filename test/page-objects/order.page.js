class Order {
<<<<<<< Updated upstream
  //Getters - Layout
  get sidebarContainer () {
    return $('[data-testid=sidebar-summary]');
  };
  get summaryTitle () {
    return $('[data-testid=sidebar-summary] h1');
  };
  get priceDetails () {
    return $('[data-testid=sidebar-summarty] > div');
  };
  get totalPrice () {
    return $('[data-testid=sidebar-summary] > div:nth-child(3)');
  };
  get btnSummaryCnt () {
    return $('[data-testid=btn-summary-Continuar-compra]');
  };

  //Order Summary
  get sectionContainer () {
    return $('[data-testid=summary-container]');
  };
  get sectionTitle () {
    return $('[data-testid=summary-container] h1');
  };
  get warningText () {
    return $('[data-testid=summary-container] p');
  };
  get productsContainer () {
    return $('[data-testid=products-container]');
  };
  get productsTitle () {
    return $('[data-testid=products-container] > div:nth-child(1)');
  };
  get boxes () {
    return $('[data-testid=products-container] > div:nth-child(2)');
  };
  get box () {
    return $('[data-testid=box]')
  }

=======
  //Getters - General

  get title () {
    return $('');
  }

  //
>>>>>>> Stashed changes
  //Methods
}

export default new Order();