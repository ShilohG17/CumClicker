import {Click()} from './functions.js';

var clicks = 0;
var clickboost = 1;
var clickText = document.getElementById("clicks");
var text = document.createTextNode("This just got added");
text.appendChild(clickText);

<h1 id="clicks"><h1>

<button onclick="Click(clicks, clickboost)"></button>
