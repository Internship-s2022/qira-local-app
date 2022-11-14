class ShoppingCart {
  get cartModal () {
  return $('[data-testid=cart-modal]')
  }
  get closeModal () {
    return $('[data-testid=CloseIcon]')
    }
};

export default new ShoppingCart();