import printMe from './print';
import './style.css';

console.log('Hello webpack');

function myFunction() {
    console.log('----------->');
}

myFunction();

const ele = document.createElement('div');
const btn = document.createElement('button');

btn.innerHTML = 'click me';
btn.onclick = printMe;
ele.appendChild(btn);


document.body.appendChild(ele);