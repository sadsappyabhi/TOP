import time

n = int(input('How high are we counting today? '))
fizz = int(input('Number to \'Fizz\': '))
buzz = int(input('Number to \'Buzz\': '))
i = 1
while i <= n:
    if i % fizz == 0 and i % buzz == 0:
        print('FizzBuzz')
    elif i % fizz == 0:
        print('Fizz')
    elif i % buzz == 0:
        print('Buzz')
    else:
        print(i)
    i += 1
    time.sleep(1)