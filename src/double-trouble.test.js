const doubleTrouble = require('./double-trouble');

describe('hello', () => {
  it('should return hello', () => {
    expect(doubleTrouble()).toBe('hello');
  });
});
