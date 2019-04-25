const assert = require('power-assert');
const AsyncHandler = require('../AsyncHandler');

// mocha : ASYNCHRONOUS CODE
// https://mochajs.org/#asynchronous-code
describe('AsyncHandler.jsの機能テスト', () => {
  describe('addメソッド', () => {
    it('Promiseオブジェクトを返す', () => {
      const result = AsyncHandler.add(1, 2);
      assert.equal(result instanceof Promise, true);
    });

    // パターン1
    // itのコールバック関数の引き数に `done` (コールバック関数)をセットした
    xit('パターン1: doneを使うパターン', (done) => {
      const promise = AsyncHandler.add(11, 22);
      promise.then((value) => {
        assert.equal(value, 34);
        // console.log('@@@@@@@@@@@@1');
        done();
      }).catch(error => {
        // console.log('@@@@@@@@@@@@2');
        done(error);
      });
    });

    // パターン2
    // Promiseオブジェクトをreturnする
    xit('パターン2: Promiseオブジェクトを返すパターン', () => {
      const promise = AsyncHandler.add(11, 22);

      return promise.then((value) => {
        assert.equal(value, 35);
      });
    });

    // パターン3
    // async/awaitを使うパターン
    xit('パターン3: Promiseオブジェクトを返すパターン', async () => {
      const value = await AsyncHandler.add(11, 22);
      assert.equal(value, 36);
    });
  });

  // axios : https://github.com/axios/axios
  xdescribe('fetchQuizメソッドのテスト', () => {
    it('非同期通信の挙動確認に便利', async () => {
      const data = await AsyncHandler.fetchQuiz();
      // console.log(data, '@@@@@@@');
    });
  })
});