// Solution from code foundry youtube NOT COMPLETE
// Traditional Solve for Fizz Buzz (using a loop)

function fizzBuzzA (value1, value2) { //How to enter the two numbers we want to test Fizz Buzz by (most commonly 3 and 5)
    let returnValue = " ";
    for (let i = 1; i<=100; i++){ // loop to say "every time i is still less than 100, add 1 and repeat"
        if (i % value1 == 0 && i % value2 ==0) {//if i is divisible by both value1 AND value2
            returnValue += 'FizzBuzz '; //+= adds 1 each time? idk 
        
        }   
        else if (i % value1 == 0){
            returnValue += 'Fizz ';
        }
        else if (i % value2 == 0){
            returnValue += 'Buzz ';
        }
        else{
            returnValue += i + ' '
       }
    return returnValue;
    }


}

//To Call FizzBuzz

function buzzIt(){
    let output ="";
    let val1 = document.getElementById('fizzValue').value; // document looks to html, search by element ID tag "fizzValue"
    let val2 = document.getElementById('buzzValue').value;
    output = fizzBuzzA(val1, val2);
    document.getElementById('results').innerHTML = output;
}