const doubleTrouble = require('./double-trouble');

describe('User Story 1: two numbers -> return 1 number', () => {
  it("UAT1.1: Given I'm going to use the doubleTrouble function, When I pass '[0, 1], 1', Then it should return [0]", () => {
    expect(doubleTrouble([0, 1], 1)).toStrictEqual([0]);
  });
  it("UAT1.2: Given I'm going to use the doubleTrouble function, When I pass '[1, 2], 3', Then it should return [1]", () => {
    expect(doubleTrouble([1, 2], 3)).toStrictEqual([1]);
  });
  it("UAT1.3: Given I'm going to use the doubleTrouble function, When I pass '[2, 3], 5', Then it should return [2]", () => {
    expect(doubleTrouble([2, 3], 5)).toStrictEqual([2]);
  });
});

describe('User Story 2: three numbers -> return 2 numbers', () => {
  it("UAT2.1: Given I'm going to use the doubleTrouble function, When I pass '[2, 3, 1], 4', Then it should return [2, 3]", () => {
    expect(doubleTrouble([2, 3, 1], 4)).toStrictEqual([2, 3]);
  });
});
