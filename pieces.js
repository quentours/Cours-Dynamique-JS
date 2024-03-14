const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix}`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;

const sectionFiche = document.querySelector(".fiches");
sectionFiche.appendChild(imageElement);
sectionFiche.appendChild(nomElement);
sectionFiche.appendChild(prixElement);
sectionFiche.appendChild(categorieElement);
