# Notes

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.



## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ DONE Plan 1 pomodoro
- ✅ DONE Initial project refactor
- ✅ DONE add project descrition
- ✅ DONE examples, timeline
- ✅ DONE User stories

User Story 1: two numbers -> return 1 number
As a user, I want to pass in two numbers, so that I can see jaden case function working

- ✅ DONE UAT1.1: Given I'm going to use the doubleTrouble function, When I pass '[0, 1], 1', Then it should return [0]
- ✅ DONE UAT1.2: Given I'm going to use the doubleTrouble function, When I pass '[1, 2], 3', Then it should return [1]
- ✅ DONE UAT1.3: Given I'm going to use the doubleTrouble function, When I pass '[2, 3], 5', Then it should return [2]
 
Pomodoro 2:

User Story 2: three numbers -> return 2 numbers
As a user, I want to pass in three numbers, so that I can see doubleTrouble function working

- ✅ DONE UAT2.1: Given I'm going to use the doubleTrouble function, When I pass '[2, 3, 1], 4', Then it should return [2, 3]
- ✅ DONE UAT2.2: Given I'm going to use the doubleTrouble function, When I pass '[0, 1, 2], 3', Then it should return [0, 1]
- ✅ DONE UAT2.3: Given I'm going to use the doubleTrouble function, When I pass '[2, 1, 0], 3', Then it should return [2, 0]

User Story 3: many numbers
As a user, I want to pass in many numbers, so that I can see doubleTrouble function working
- ✅ DONE more examples, new user story
- ✅ DONE UAT3.1: Given I'm going to use the doubleTrouble function, When I pass '[1, 3, 5, 6, 7, 4, 3],7' Then it should return [1, 3, 5, 6, 7, 4]

Pomodoro3: 
- ✅ DONE UAT3.2: Given I'm going to use the doubleTrouble function, When I pass '[4, 1, 1, 1, 4],2' Then it should return [4, 1, 4]
- ✅ DONE UAT3.3: Given I'm going to use the doubleTrouble function, When I pass '[2, 2, 2, 2, 2, 2], 4' Then it should return [2]
- ✅ DONE UAT3.4: Given I'm going to use the doubleTrouble function, When I pass '[2, 6, 2], 8' Then it should return [2, 2]