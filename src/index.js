import img from "./assets/img/1.jpg";
import './style.scss';
import json from './dataset.json';

/*function component() {
    const element = document.createElement('h1');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = `DAF - TRUCKS FOR SALE FROM NETHERLANDS`;

    return element;
}

document.body.appendChild(component());*/

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});

console.log(json)
/*function getQuotes() {
    const data = json["stock"]
    const quote1 = document.querySelector('.card-title');
    const author1 = document.querySelector('.card-content');
    console.log(data[0].title)
    quote1.textContent = data[0].title;
    author1.textContent = data[0].type;
}
void getQuotes();*/

//document.querySelector('.change-quote').addEventListener('click', getQuotes);
