# solidbook-tdd-examples

> Coding katas/TDD examples from [solidbook.io](https://solidbook.io).

## About this (learning TDD)

TDD is such an important technique, but it's one of the most challenging software design techniques to master. There's a lot of confusion, misdirection, and partial explanations. Many of us have tried TDD but gave up because it was too hard or felt like it took too much time. I believe that's a symptom of not fully grasping how TDD is to be used in the real world. 

In [Part III - Phronesis](https://wiki.solidbook.io/Part-III-Phronesis-60b174f15da34fdcb5bc8a099436a9bb), we start over. We start from scratch. Specifically, we:

1. Understand the nature of complexity and features
2. Understand how to identify behavior in features
3. Fix our understanding of object-oriented programming
4. Understand the difference between core code and infrastructure code
5. Understand how object-oriented architectures work

With this foundation, in [Part IV - Test-Driven Development Basics](https://wiki.solidbook.io/Part-IV-Test-Driven-Development-Basics-106d72a39186498095782038da13a97d), [Part V - Object-Oriented Design (With Tests)](https://wiki.solidbook.io/Part-V-Object-Oriented-Design-(With-Tests)-7c9c10572cc54aa195e8ec661cf88312), and [Part X - Advanced Test-Driven Development](https://wiki.solidbook.io/Part-X-Advanced-Test-Driven-Development-d395e30edf1448219e1f0d3681b24aaf) we continue with:

6. Practicing the Classic TDD school of thought on many katas
7. Practicing the Mockist TDD school of thought on many katas 

At this point, you'll have an understanding of how and to what extent to use TDD in a variety of contexts (ie: the front-end, in the back-end, with E2E tests, as unit tests, and so on). 

Finally, the path to master involves one step:

8. Practice. And lots of it (hundreds).

Let's begin. Make sure you've read [Part III - Phronesis](https://wiki.solidbook.io/Part-III-Phronesis-60b174f15da34fdcb5bc8a099436a9bb) first.

## Classic TDD examples/katas

Classic TDD, created originally by Kent Beck, is also known as the Detroit/Chicago school of thought for TDD. What makes Classic TDD _classic_ is the absence of mocking (found in the _Mockist_/London-style form of TDD). In Classic TDD, we verify our classes or functions by testing them exactly as they occur without mocking out dependencies. This means that if some class we wish to test relied on the use of a database, we'd be testing that class with the database connection as well. While this gives you a greater level of confidence that your code is working correctly, for code involving [infrastructure code](https://khalilstemmler.com/articles/test-driven-development/how-to-test-code-coupled-to-apis-or-databases/#Core-code-and-infrastructure-code), it makes test setup and teardown harder (specifically with respect to unit tests) and it makes them run slower as well slower. 

To start our TDD journey, we focus on mastering the Classic TDD school of thought. We are solely focused on solving problems that exclusively involve [core code](https://khalilstemmler.com/articles/test-driven-development/how-to-test-code-coupled-to-apis-or-databases/#Core-code-and-infrastructure-code) (no infrastructure). 

### Part IV: Test-Driven Development Basics

**29. Getting Started with Classic Test-Driven Development**
- [Palindrome](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-palindrome)
- [FizzBuzz](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-fizzbuzz)
- [Nth Fibonacci](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-fibonacci)


**30. Working Backwards using Arrange-Act-Assert**
- [Stats Calculator](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-stats-calculator)
- [Password Validator](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-password-validator)

**31. Avoiding Impasses with the Transformation Priority Premise**
- [Nth Fibonacci (again)](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-fibonacci)
- [Recently Used List](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-recently-used-list)
- [Tennis](https://github.com/stemmlerjs/solidbook-tdd-examples/tree/main/examples/classic/tdd-tennis)

## Mockist TDD examples/katas

> Coming soon
