#! /bin/zsh

echo "How high would you like to count today?"
read NUM

for i in {0..$NUM}
do
	if [[ $($expr $1 % 5) == 0 ]]
	then
		echo "Number: FizzBuzz"
	else

	echo "Number: $i"
	sleep 1
	fi
done
