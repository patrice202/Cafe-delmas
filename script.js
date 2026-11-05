function remercier() {
    document .getElementById("message").textContent = "Merci ! On te répond très vite.";
}
document.getElementById("annee").textContent = new Date().getFullYear() ;
let nomCafe = "Café Delmas" ;
let prixTasse = 4;
const VILLE = "Miami" ;
let quantite =3;
let total = prixTasse * quantite;
console.log("Total : " + total + " $ ");
function calculerTotal(qte) {
    let t = prixTasse * qte;
    if (qte >= 10) {
        t = t * 0.9; 
    }
    return t;
}
function messageCommande(qte) {
    if (qte >= 10) {
        return "Rabais de 10 % appliqué. Merci pour la grosse commande ! " ;
    } else { 
        return "Commande standard. Dès 10 tasses, tu as 10 % de rabais." ;
    }
}
let boutonbonjour = document.getElementById("btn-bonjour");
boutonbonjour.addEventListener("click", remercier);
let btnCalculer = document.getElementById("btn-calculer") ;
btnCalculer.addEventListener("click", function() {
    let qte = Number(document.getElementById("quantite").value);
    let t = calculerTotal(qte) ;
    document.getElementById("resultat").textContent =
    messageCommande(qte) + " Total : " + t + " $";
});
let produits = ["Café en grains", "Café moulu", "Tasse Café Delmas", "Café glacé"];
console.log(produits[0]);
console.log(produits.length);
produits.push("Chocolat chaud");
produits.length
let catalogue = [
    { nom: "Café en grains", prix: 12 },
    { nom: "Café moulu", prix: 10 },
    { nom: "Tasse Café Delmas", prix: 4 },
    { nom: "Café glacé", prix: 6 }
];
let zone2 = document.getElementById("liste-produits");
zone2.innerHTML = "";
for (let i=0; i < catalogue.length; i++) {
    let ligne = document.createElement("li");
    ligne.textContent = catalogue[i].nom + " - " + catalogue[i].prix + "$";
    zone2.appendChild(ligne);
}