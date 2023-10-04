echo  "~~~ Welcome to Char's super awesome fun time talking cow script! ~~~"
echo  "\nWhat would you like the cow to say?"
read PHRASE
echo  "\nHow many times should the cow speak?"
read ITERATIONS

for i in $(seq 1 $ITERATIONS)
do
	cowsay $PHRASE
done
