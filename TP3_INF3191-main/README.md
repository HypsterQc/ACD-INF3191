# Soumissions d'assurance auto (inf3190-tp3-h23)

## Description

Veuillez prendre en considération que la résolution de l'écran est de 1920 par 1080.

Cette application web permet de proposer des animaux de compagnie à l'adoption gratuitement. Les utilisateurs peuvent consulter une liste d'animaux disponibles et accéder à une page individuelle pour chaque animal avec ses informations et son adresse. Sur la page d'accueil, cinq animaux aléatoires sont présentés avec des liens vers leur page respective. 

Un moteur de recherche simple permet aux utilisateurs de rechercher des animaux parmi ceux disponibles sur l'application. Les résultats de la recherche sont affichés sur une nouvelle page avec le nom, la description et un lien vers la page de l'animal correspondant. Les utilisateurs peuvent contacter les propriétaires des animaux par courriel en cliquant sur un lien sur la page de l'animal pour exprimer leur intérêt pour l'adoption. 

Les utilisateurs peuvent également mettre des animaux en adoption en remplissant un formulaire qui comprend le nom de l'animal, l'espèce, la race, l'âge, une description textuelle, l'adresse courriel du propriétaire et l'adresse pour récupérer l'animal.

## Fonctionnalités

Les vérifications suivantes doivent être effectuées au niveau du frontend :

- Tous les champs du formulaire doivent être remplis ;
- Aucun champ ne doit contenir de virgule ;
- Le nom de l'animal doit être composé de 3 à 20 caractères ;
- L'âge doit être une valeur numérique comprise entre 0 et 30 ;
- L'adresse courriel doit avoir un format valide ;
- L'adresse doit inclure les champs suivants : adresse civique, ville, code postal. 
   - Le code postal doit être au format canadien, et la localisation est supposée être au Québec.

Si le formulaire n'est pas rempli correctement, les données ne doivent pas être soumises au backend et un message d'erreur doit s'afficher à côté de chaque champ en question.


Une base de données SQLite contenant des informations sur les animaux en adoption sont fournie. 
Les colonnes de la base de données sont les suivantes :

- id : un identifiant unique pour chaque animal ;
- nom : le nom de l'animal ;
- espece : le type d'animal (ex. chien, chat, poisson, serpent) ;
- race : la race de l'animal (ex. schnauzer) ;
- age : l'âge de l'animal en années ;
- description : une brève description de l'animal ;
- courriel : l'adresse courriel du propriétaire de l'animal ;
- adresse : l'adresse civique où l'animal peut être récupéré lors de l'adoption ;
- ville : la ville où se trouve l'animal ;
- cp : le code postal associé à l'adresse de l'animal.

## Convention

Tous les eléments, classes, identifiants, propriétés CSS sont en minuscules.
Des lignes vides sont recommander, afin d'airer le code et d'ameliorer sa lisibiliter.

## Auteurs

© 2023 Tous droits réservés;
- Kevin Da Silva, DASK30049905, fh691920@ens.uqam.ca
- Thai Minh Danny Nguyen, NGUT71060209, ed291975@ens.uqam.ca

## Références

- [W3c - validateur HTML et CSS](https://validator.w3.org/)
- [Code Beautify - Validateur Javascript](https://codebeautify.org/jsvalidate)
- [W3schools - Dictionnaire HTML, CSS, Javascript](https://www.w3schools.com/)
- [Python - easy python docs](http://www.easypythondocs.com/index.html)
- [Javascript Mozilla](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference)
- [Domaine animal](https://www.domaineanimal.com/)
- [SPCA](https://www.spca.com/adoption/)
- [Les pattes jaunes](https://lespattesjaunes.com/)
- [Chico](https://www.chico.ca/)

## État du projet

- [X] Redaction du fichier README.md terminer.
- [ ] Page de liste des animaux offerts pour l'adoption (avec barre de recherche)
- [ ] Barre de recherche
- [ ] Chaque animaux a sa propre page web (avec email du proprio a contacter)
- [ ] Page d'accueil qui affiche 5 animaux disponible au hasard
- [ ] Formulaire de mise en adoption
- [ ] Les image on tous un alt avec une explication pour les non-voyant.
- [ ] Une validation doit être faite pour chaque entrée de données.
- [ ] Si la donnée fournie est invalide, le programme doit afficher un message d'erreur indiquant le format attendu.
- [ ] La validation des entrer du formulaire, s'effectue au fure et a mesure.
- [ ] Affichages des questions que lorsque demander/necessaire.
- [ ] verifier la vulnerabiliter du code html et css (https://validator.w3.org/).
- [ ] Les caractere speciaux sont tous de format HTML.
- [ ] CSS dans un fichier separer.
- [ ] Indentation du code.
- [ ] Eléments, classes, identifiants, propriétés CSS le tous en minuscules.
- [ ] Encoder en UTF-8.
- [ ] Projet contient HTML 5, Javascript, CSS 3 dans le frontend
- [ ] Projet contient Python 3.11+, Flash 2.0+ dans le backend
- [ ] Remise du Travaux dans un fichier au format suivant 'codePermanant.zip'.

## Ponderation

- [ ] Respect des exigences (40%).
- [ ] Convivialité du site web (15%).
- [ ] Qualité du code (15%).
- [ ] Aspect visuel du site (30%).
