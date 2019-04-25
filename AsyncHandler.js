const axios = require('axios');

class AsyncHandler {
  static add(x, y) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x + y);
      }, 1000);
    });
  }

  static async fetchQuiz() {
    const apiUrl = 'https://opentdb.com/api.php?amount=10';
    const response = await axios.get(apiUrl);

    // console.log(response, '@@@@@@@@');

    return response;
  }
}

module.exports = AsyncHandler;