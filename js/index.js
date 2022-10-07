import entreesMenu from 'https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Restaurant/js/entrees.js';
import platsMenu from 'https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Restaurant/js/plats.js';
import dessertsMenu from 'https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Restaurant/js/desserts.js';
import boissonsMenu from 'https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Restaurant/js/boissons.js';

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
