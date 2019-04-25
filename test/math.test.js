const assert = require('power-assert');
const math = require('../math');

describe('math.jsの機能テスト', () => {
  describe('addメソッドのテスト', () => {
    it('メソッドが存在するか？', () => {
      assert.equal(typeof math.add, 'function');
    });

    it('1 + 1 = 2', () => {
      const result = math.add(1, 1);
      assert.equal(result, 2);
    });
  })
});