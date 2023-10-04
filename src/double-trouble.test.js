const doubleTrouble = require('./double-trouble');

describe('User Story 1: two numbers -> return 1 number', () => {
  it("UAT1.1: Given I'm going to use the doubleTrouble function, When I pass '[0, 1], 1', Then it should return [0]", () => {
    expect(doubleTrouble([0, 1], 1)).toStrictEqual([0]);
  });
  it("UAT1.2: Given I'm going to use the doubleTrouble function, When I pass '[1, 2], 3', Then it should return [1]", () => {
    expect(doubleTrouble([1, 2], 3)).toStrictEqual([1]);
  });
});
