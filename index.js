// Write your code here!

document.querySelector('#main').remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const name = 'Travis'

newHeader.innerHTML = `${name} is the champion`

document.body.appendChild(newHeader);