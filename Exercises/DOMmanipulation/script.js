const container = document.querySelector('#container');
const paragraph1 = document.createElement('p');
paragraph1.classList.add('paragraph1');
paragraph1.style.color = 'red';
paragraph1.textContent = "Hey I'm red!"
container.appendChild(paragraph1);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!"
container.appendChild(h3);

const newDiv = document.createElement('div');
newDiv.border = 'black';
newDiv.background = 'pink';
newDiv.classList.add('newDiv')

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!"
newDiv.appendChild(h1);
newDiv.appendChild(paragraph2);

container.appendChild(newDiv);

const btn = document.querySelector('#btn');
//btn.onclick = () => alert('Hello World!');

/*btn.addEventListener('click', () => {
    alert('Hello World!')
})

function alertFunction(){
    alert("YAY YOU DID IT!");
}
*/
btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
