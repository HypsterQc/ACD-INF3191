





/*
fonction donneeSaisie
Verificateur des valeur entrer dnas le formulaire
*/

const gHomme = 'homme';
const gFemme = 'femme';
const gAutre = 'autre';
minAge = 16;
const maxAge = 100;
const anneeActuel = 2023; // rechercher comment coder lannee actuel
const dateVoitureMin = anneeActuel - 25;
const dateVoitureMax = +anneeActuel;
const voitureMontantMin = 0.0;
const voitureMontantMax = 100000.0; // 100 000
const minReclame = 0;
const maxReclame = 4;
const reclameMontantMin = 0.0;
const reclameMontantMax = 35000.0; //35 000

//test
age = 18;
genre = 'homme';
anneeVoiture = 2020;
montantVoiture = 20.0;
nbReclame = 2;
montantReclame = 25654.32;

/*
fonction ;
  verifPersonne
  verifVoiture
  verifReclame
*/

if (genre === gHomme) {
  minAge === 18;
  if (age < minAge) {
    //erreur
  }
} else if (genre === gFemme) {
  if (age < minAge) {
    //erreur
  }
} else if (genre === gAutre) {
  minAge === 18;
  if (age < minAge) {
    //erreur
  }
}

if (age >= maxAge) {
  //erreur
}

if (anneeVoiture < dateVoitureMin) {
  //erreur
} else if (anneeVoiture > dateVoitureMax) {
  // annee non existante
}

if (montantVoiture < voitureMontantMin) {
  //negatif
} else if (montantVoiture > voitureMontantMax) {
  //erreur
}

if (nbReclame < minReclame) {
  //negatif
} else if (nbReclame > maxReclame) {
  //erreur
}

if (montantReclame < reclameMontantMin) {
  //negatif
} else if (montantReclame > reclameMontantMax) {
  //erreur
}

/*
    fonction calculMontant
*/

ageBase = 25;
ageAnciens = 75;
montantBase; // 5 % / 4% / 2%

if ((gHomme === genre || gAutre === genre) && age < ageBase) {
  montantBase = 5 / 100;
} else if (age === ageAnciens) {
  montantBase = 4 / 100;
} else {
  montantBase = 2 / 100;
}

//assuranceannuelle=montantdebase+(350∗nombrederéclamations)

//pénalité de 500$ si la personne a plus de 25 000$ de réclamation

/*
fonction affichage
*/
//print msg "Voici  le prix annuel de la soumission d'assurance"
//print prixAnnuel
//print msg "Ainsi que le montant mensuel"
//print montantMensuel
