import entreesMenu from './js/entrees.js';
import platsMenu from './js/plats.js';
import dessertsMenu from './js/desserts.js';
import boissonsMenu from './js/boissons.js';

const randomEntree = entreesMenu[Math.floor(Math.random() * entreesMenu.length)];
const randomPlat = platsMenu[Math.floor(Math.random() * platsMenu.length)];
const randomDessert = dessertsMenu[Math.floor(Math.random() * dessertsMenu.length)];
const randomBoisson = boissonsMenu[Math.floor(Math.random() * boissonsMenu.length)];

let date1 = new Date();

let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',});



document.getElementById("entrees").innerHTML = randomEntree;
document.getElementById("plats").innerHTML = randomPlat;
document.getElementById("desserts").innerHTML = randomDessert;
document.getElementById("boissons").innerHTML = randomBoisson;
document.getElementById("date").innerHTML = dateLocale;

console.log(dateLocale)