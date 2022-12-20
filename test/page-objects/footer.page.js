class Footer {
  // Getters
  get footerInfo() {
    return $('[data-testid=footer-info]');
  }
  get socialMedia() {
    return $('[data-testid=social-media]');
  }
  get socialIconFb() {
    return $('[data-testid=social-icons] a:nth-child(1)');
  }
  get socialIconIg() {
    return $('[data-testid=social-icons] a:nth-child(2)');
  }
  get socialIconTw() {
    return $('[data-testid=social-icons] a:nth-child(3)');
  }
  get socialIconIn() {
    return $('[data-testid=social-icons] a:nth-child(4)');
  }
  get socialIconWpp() {
    return $('[data-testid=social-icons] a:nth-child(5)');
  }
}

export default new Footer();
