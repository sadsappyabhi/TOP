import time
import random

seconds = int(input("Seconds: "))

for i in range(seconds):
  print(random.randint(0,1), end="")
  time.sleep(1)
