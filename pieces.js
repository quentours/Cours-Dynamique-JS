// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i =0;  i < pieces.length; i++) {



const article = pieces[i];
// Récupération de l'élément DOM qui accueillera les fiches
const sectionFiche = document.querySelector(".fiches");
//  Création d'une balise dédiée à une pièce auto
const pieceElement = document.createElement("article");
// Création des balises

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de déscription pour le moment";

const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

// Rattachement de nos balises au DOM

// On rattache la balise article à la section Fiches
sectionFiche.appendChild(pieceElement)
// On rattache l'image à pieceElement
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
// Ajout des éléments au DOM pour l'exercice
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(stockElement);

}