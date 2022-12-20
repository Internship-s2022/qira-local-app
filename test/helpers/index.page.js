class Index {
  openBrowser() {
    browser.url('http://localhost:3000/');
    // https://test.qira-local.app.radiumrocket.com/
  }

  generateRandomWord(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.random() * length);
    }
    return result;
  }
}

export default new Index();
