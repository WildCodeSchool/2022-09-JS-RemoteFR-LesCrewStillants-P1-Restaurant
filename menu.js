const entreesMenu = [ "Salade de tomates","Mozarella - Roquette","Chèvres chauds","Antipasti italiens"]
const platsMenu = [ "Pizza Buffala","Pâtes aux légumes du soleil","Escalope Milanaise","Canard à l'italienne"]
const dessertsMenu = [ "Tiramisu","Glace à la vanille","Glace au chocolat","Glace au café"]
const boissonsMenu = [ "Coca","Fanta","Sprite","Eau"]

const randomEntree = entreesMenu[Math.floor(Math.random() * entreesMenu.length)];
const randomPlat = platsMenu[Math.floor(Math.random() * platsMenu.length)];
const randomDessert = dessertsMenu[Math.floor(Math.random() * dessertsMenu.length)];
const randomBoisson = boissonsMenu[Math.floor(Math.random() * boissonsMenu.length)];

function changeEntree(randomEntree) {
    document.getElementById('entrees').innerHTML = "randomEntree";
  }

