# Awesome repo

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.

Test.assertSimilar(trouble([1, 3, 5, 6, 7, 4, 3],7), [1, 3, 5, 6, 7, 4]);
Test.assertSimilar(trouble([4, 1, 1, 1, 4],2), [4, 1, 4]); 
Test.assertSimilar(trouble([2, 2, 2, 2, 2, 2], 4), [2]); 
Test.assertSimilar(trouble([2, 6, 2], 8), [2, 2]); 


## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Domain: 
integers
two consecutive numbers
sum
number

Examples:
([0, 1], 1) -> [0]
([1, 2], 3) -> [1]
([2, 3], 5) -> [2]
([2, 3, 1], 4) -> [2, 3]
([0, 1, 2], 3) -> [0, 1]
([2, 1, 0], 3) -> [2, 0]


edge cases examples:
([0], 1) -> error
([1], 5) -> error


User stories:

User Story 1: two numbers -> return 1 number
As a user, I want to pass in two numbers, so that I can see jaden case function working

- ⚠ TODO UAT1.1: Given I'm going to use the doubleTrouble function, When I pass '[0, 1], 1', Then it should return [0]
- ⚠ TODO UAT1.2: Given I'm going to use the doubleTrouble function, When I pass '[1, 2], 3', Then it should return [1]
- ⚠ TODO UAT1.3: Given I'm going to use the doubleTrouble function, When I pass '[2, 3], 5', Then it should return [2]
