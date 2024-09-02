# Soumissions d'assurance auto (inf3190-tp2-h23)

## Description

Ces une application web qui permettra aux utilisateurs de soumettre des informations pour obtenir une estimation du montant d'assurance automobile. 
Si l'utilisateur est considéré comme trop risqué, 
le programme affichera un message indiquant que la compagnie d'assurance n'a aucun produit à offrir pour ce profil de client. 
L'application proposera également de faire une nouvelle soumission à la fin du processus.

Les informations décrivent la formule utilisée pour calculer le montant de l'assurance automobile. 
La formule comprend un montant de base et un coefficient multiplicateur qui dépend du nombre de réclamations effectuées. 
Si la somme des réclamations dépasse un certain montant, une pénalité de 500 $ est ajoutée au montant. 
Une fois que les données sont saisies et les calculs effectués, 
l'application affiche à l'utilisateur le coût annuel de la soumission d'assurance, 
ainsi que le coût mensuel correspondant.

## Fonctionnalités

L'application dois effectuer les demande suivante : 
- Demander le genre de l'utilisateur
- Demander l'âge de l'utilisateur
- Demander la valeur d'achat du véhicule de l'utilisateur
- Demander l'année de fabrication du véhicule de l'utilisateur
- Demander si l'utilisateur a fait des réclamations d'assurance auto dans les 6 dernières années
- Si oui, demander combien de réclamations l'utilisateur a faites
- Pour chaque réclamation, demander le montant réclamé

Attention, les cas qui ne sont pas assurer sont les suivantes :
- Les femmes de moins de 16 ans.
- Les hommes de moins de 18 ans.
- Une personne non-binaire de moins de 18 ans.
- Les personnes de 100 ans ou plus.
- Un véhicule de plus de 25 ans.
- Un véhicule de plus de 100 000$ à l'achat.
- Une personne avec plus de 4 réclamations.
- Une personne avec plus de 35 000$ de réclamation.

## Convention

Insérez ici votre convention d'ecriture du projet.

tous les eléments, classes, identifiants, propriétés CSS sont en minuscules.
Des lignes vides sont recommander, afin d'airer le code et d'ameliorer sa lisibiliter.

## Auteurs

© 2023 Tous droits réservés;
- Kevin Da Silva, DASK30049905, fh691920@ens.uqam.ca
- Danny Nguyen Thai Mine, NGUD********, ...@ens.uqam.ca

## Références

- [w3c - validateur HTML et CSS](https://validator.w3.org/)
- [Code Beautify - Validateur Javascript](https://codebeautify.org/jsvalidate)
- [w3schools - Dictionnaire HTML, CSS, Javascript](https://www.w3schools.com/)
- [SSQ assurance](https://www.ssq.ca/fr) - inspiration de site web.
- [Sonnet assurance](https://www.sonnet.ca/assurance-auto) - inspiration de site web.
- [Beneva assurance](https://www.beneva.ca/fr) - inspiration de site web.
- [Midjourney](https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F) - intelligence artificiel aident a la creation de contenu d'image.
- [javascript Mozilla](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference)

## État du projet

- [ ] Redaction du fichier README.md terminer.
- [ ] Les image on tous un alt avec une explication pour les non-voyant.
- [ ] Les calcul sont Valide et bien verifier.
- [ ] Une validation doit être faite pour chaque entrée de données.
- [ ] Si la donnée fournie est invalide, le programme doit afficher un message d'erreur indiquant le format attendu.
- [ ] La validation des entrer du formulaire, seffectue au fure et a mesure.
- [ ] Affichages des questions que lorsque demander/necessaire.
- [ ] verifier la vulnerabiliter du code html et css (https://validator.w3.org/).
- [ ] Projet contient HTML, Javascript, CSS.
- [ ] Les caractere speciaux sont tous de format HTML.
- [ ] CSS dans un fichier separer.
- [ ] aucune librairie ou framework.
- [ ] Indentation du code.
- [ ] Eléments, classes, identifiants, propriétés CSS le tous en minuscules.
- [ ] Encoder en UTF-8.
- [ ] Remise du Travaux dans un fichier au format suivant 'codePermanant.zip'.

## Ponderation

- [ ] Respect des exigences (60%).
- [ ] Convivialité du site web (15%).
- [ ] Qualité du code (15%).
- [ ] Aspect visuel du site (10%).
