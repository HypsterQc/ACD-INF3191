//creer une fonction qui s'execute si lutilisateur ne fait pas de choix dans un temps impartie

function input_suivant(index) {
    let second_question = document.getElementById(`question` + index);
    second_question.style.display = 'block';
}

function input_retrait(index, champ) {
    document.getElementById(champ).value = '';
    let second_question = document.getElementById(`question` + index);
    second_question.style.display = 'none';
}

function efface_Tous() {
    let second_question = document.getElementById(`all_question`);
    second_question.style.display = 'none';
}

function validationGenre() {
    // Récupération de l'élément radio qui est coché
    const confirmer_genre = document.querySelector('input[type="radio"][name="genre"]:checked');
    const err_genre = 'err_genre';
    let msg_err = 'Veuillez compléter ce champ avant de continuer.';
    let message_err = document.querySelector('#' + err_genre);

    // Vérification si un radio a été coché
    if (confirmer_genre) {
        let valeur_genre = confirmer_genre.value;
        console.log('le genre est : ' + valeur_genre);
        if (verif_Genre(valeur_genre, err_genre)) {
            input_suivant(1);
            message_err.style.display = 'none';
        }
    } else {
        console.log("Aucun radio n'a été coché");
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
    }
}

//input number
function confirmer_age() {
    const err_age = 'err_age';
    const valeur_genre = document.querySelector('input[type="radio"][name="genre"]:checked').value;
    let valeur_age = document.getElementById('age').value;
    let message_err = document.querySelector('#' + err_age);
    console.log("l'age est : " + valeur_age);

    if (champ_Rempli(valeur_age, err_age)) {
        if (est_Nombre(valeur_age, err_age)) {
            if (verifier_Nombre_Entier(valeur_age, err_age)) {
                if (valeur_genre === 'homme' || valeur_genre === 'autre') {
                    if (est_Entre_Bornes(valeur_age, 18, 100, err_age)) {
                        input_suivant(2);
                        message_err.style.display = 'none';
                    }
                } else {
                    if (est_Entre_Bornes(valeur_age, 16, 100, err_age)) {
                        input_suivant(2);
                        message_err.style.display = 'none';
                    }
                }
            }
        }
    }
}

function confirmer_Valeur_Achat() {
    const err_valeur_achat = 'err_valeur_achat';
    let valeur_achat = document.getElementById('valeur_achat').value;
    let message_err = document.querySelector('#' + err_valeur_achat);

    if (champ_Rempli(valeur_achat, err_valeur_achat)) {
        console.log('la valeur dachat est : ' + valeur_achat);
        if (est_Nombre(valeur_achat, err_valeur_achat)) {
            if (verif_Float(valeur_achat, err_valeur_achat)) {
                if (est_Entre_Bornes(valeur_achat, 0, 100000, err_valeur_achat)) {
                    input_suivant(3);
                    message_err.style.display = 'none';
                }
            }
        }
    }
}

function confirmer_Annee() {
    const err_annee = 'err_annee';
    let annee_fabrication = document.getElementById('annee_fabrication').value;
    let message_err = document.querySelector('#' + err_annee);

    if (champ_Rempli(annee_fabrication, err_annee)) {
        console.log("l'annee de fabrication est : " + annee_fabrication);
        if (est_Nombre(annee_fabrication, err_annee)) {
            if (verifier_Nombre_Entier(annee_fabrication, err_annee)) {
                if (est_Annee_Valide(annee_fabrication, err_annee)) {
                    input_suivant(4);
                }
            }
        }
    }
}

function confirmer_Reclamations() {
    const err_reclamations = 'err_reclamations';
    const verif_reclamations = document.querySelector(
        'input[type="radio"][name="reclamations"]:checked'
    );
    let msg_erreur = 'Vous devez repondre a la question par oui ou par non, merci.';
    let message_err = document.querySelector('#' + err_reclamations);

    if (verif_reclamations) {
        let reclamations = verif_reclamations.value;
        console.log('la reclamation : ' + reclamations);
        if (reclamations === 'oui') {
            input_suivant(5);
            message_err.style.display = 'none';
        } else if (reclamations === 'non') {
            message_err.style.display = 'none';
        } else {
            message_err.textContent = msg_erreur;
            message_err.style.display = 'block';
        }
    } else {
        console.log("Aucun radio n'a été coché");
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
    }
}

function confirmer_Nb_Reclamations() {
    const err_nb_reclamations = 'err_nb_reclamations';
    let nb_reclamations = document.getElementById('nb_reclamations').value;
    let message_err = document.querySelector('#' + err_nb_reclamations);
    const ancien_valeur = 'valeur_reclamations';
    console.log('le nombre de reclamation : ' + nb_reclamations);

    if (champ_Rempli(nb_reclamations, err_nb_reclamations)) {
        console.log('le nombre de reclamation : ' + nb_reclamations);
        if (est_Nombre(nb_reclamations, err_nb_reclamations)) {
            if (verifier_Nombre_Entier(nb_reclamations, err_nb_reclamations)) {
                if (est_Entre_Bornes(nb_reclamations, 1, 4, err_nb_reclamations)) {
                    for (let i = 4; i > 0; i--) {
                        input_retrait(5 + '.' + i, ancien_valeur + i);
                        message_err.style.display = 'none';
                    }
                    for (let i = 1; i <= nb_reclamations; i++) {
                        input_suivant(5 + '.' + i);
                        message_err.style.display = 'none';
                    }
                } else {
                    for (let i = 4; i > 0; i--) {
                        input_retrait(5 + '.' + i, ancien_valeur + i);
                    }
                }
            } else {
                for (let i = 4; i > 0; i--) {
                    input_retrait(5 + '.' + i, ancien_valeur + i);
                }
            }
        } else {
            for (let i = 4; i > 0; i--) {
                input_retrait(5 + '.' + i, ancien_valeur + i);
            }
        }
    } else {
        for (let i = 4; i > 0; i--) {
            input_retrait(5 + '.' + i, ancien_valeur + i);
        }
    }
}

function confirme_Valeur_Reclamation1() {
    const err_valeur_reclamations = 'err_valeur_reclamations1';
    let valeur_Reclamation = document.getElementById('valeur_reclamations1').value;
    let message_err = document.querySelector('#' + err_valeur_reclamations);
    console.log('la valeur dachat est : ' + valeur_Reclamation);

    if (champ_Rempli(valeur_Reclamation, err_valeur_reclamations)) {
        if (est_Nombre(valeur_Reclamation, err_valeur_reclamations)) {
            if (verif_Float(valeur_Reclamation, err_valeur_reclamations)) {
                if (est_Entre_Bornes(valeur_Reclamation, 0.01, 100000, err_valeur_reclamations)) {
                    message_err.style.display = 'none';
                }
            }
        }
    }
}

function confirme_Valeur_Reclamation2() {
    const err_valeur_reclamations = 'err_valeur_reclamations2';
    let valeur_Reclamation = document.getElementById('valeur_reclamations2').value;
    let message_err = document.querySelector('#' + err_valeur_reclamations);
    console.log('la valeur dachat est : ' + valeur_Reclamation);

    if (champ_Rempli(valeur_Reclamation, err_valeur_reclamations)) {
        if (est_Nombre(valeur_Reclamation, err_valeur_reclamations)) {
            if (verif_Float(valeur_Reclamation, err_valeur_reclamations)) {
                if (est_Entre_Bornes(valeur_Reclamation, 0.01, 100000, err_valeur_reclamations)) {
                    message_err.style.display = 'none';
                }
            }
        }
    }
}

function confirme_Valeur_Reclamation3() {
    const err_valeur_reclamations = 'err_valeur_reclamations3';
    let valeur_Reclamation = document.getElementById('valeur_reclamations3').value;
    let message_err = document.querySelector('#' + err_valeur_reclamations);
    console.log('la valeur dachat est : ' + valeur_Reclamation);

    if (champ_Rempli(valeur_Reclamation, err_valeur_reclamations)) {
        if (est_Nombre(valeur_Reclamation, err_valeur_reclamations)) {
            if (verif_Float(valeur_Reclamation, err_valeur_reclamations)) {
                if (est_Entre_Bornes(valeur_Reclamation, 0.01, 100000, err_valeur_reclamations)) {
                    message_err.style.display = 'none';
                }
            }
        }
    }
}

function confirme_Valeur_Reclamation4() {
    const err_valeur_reclamations = 'err_valeur_reclamations4';
    let valeur_Reclamation = document.getElementById('valeur_reclamations4').value;
    let message_err = document.querySelector('#' + err_valeur_reclamations);
    console.log('la valeur dachat est : ' + valeur_Reclamation);

    if (champ_Rempli(valeur_Reclamation, err_valeur_reclamations)) {
        if (est_Nombre(valeur_Reclamation, err_valeur_reclamations)) {
            if (verif_Float(valeur_Reclamation, err_valeur_reclamations)) {
                if (est_Entre_Bornes(valeur_Reclamation, 0.01, 100000, err_valeur_reclamations)) {
                    message_err.style.display = 'none';
                }
            }
        }
    }
}

function msg_Err_final() {
    const msg_final = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client.";
    let message_final = document.querySelector('#msg_final');
    message_final.textContent = msg_final;
    message_final.style.display = 'block';

    efface_Tous();
    input_suivant(10);
}

function msg_Soumission_final() {
    const msg_final = "Merci d'avoir remplie votre formulaire d'inscription et a tres bientot.";
    let message_final = document.querySelector('#msg_final');
    message_final.textContent = msg_final;
    message_final.style.display = 'block';

    efface_Tous();
    input_suivant(10);
}

function validate_Form_Final() {
    msg_Soumission_final();

    var montant_base = valeur_achat;
    var montant_assurance = 0;
    var penalite = 0;
    let msg_annuel = "Prix annuel de la soumission d'assurance : ";
    let msg_mensuel = "Prix mensuel de la soumission d'assurance : ";
    let msg_envoyer = 'Le formulaire a été envoyé avec succès !';
    let msg_prix_annee = document.querySelector('#msg_prix_annee');
    let msg_prix_mois = document.querySelector('#msg_prix_mois');
    let form_envoyer = document.querySelector('#form_envoyer');

    if ((genre === 'homme' || genre === 'autre') && age < 25) {
        montant_base = montant_base * 0.05;
    } else if (age >= 75) {
        montant_base = montant_base * 0.04;
    } else {
        montant_base = montant_base * 0.02;
    }
    if (reclamations === 'oui') {
        if (total_reclamation > 25000) {
            penalite = 500;
        }
        montant_assurance = montant_base + (350 * nb_reclamations + penalite);
    } else {
        montant_assurance = montant_base;
    }
    affichage_Test();

    msg_annuel = msg_annuel + montant_assurance;
    msg_prix_annee.textContent = msg_annuel;
    msg_prix_annee.style.display = 'block';

    msg_mensuel = msg_mensuel + montant_assurance / 12;
    msg_prix_mois.textContent = msg_mensuel;
    msg_prix_mois.style.display = 'block';

    form_envoyer.textContent = msg_envoyer;
    form_envoyer.style.display = 'block';
    // Empêcher la soumission du formulaire (si vous ne voulez pas que la page se recharge)
    return false;
}

function affichage_Test() {
    //teste afficher valeur
    console.log('le genre est : ' + genre);
    console.log("l'age est : " + age);
    console.log('la valeur dachat est : ' + valeur_achat);
    console.log("l'annee de fabrication est : " + annee_fabrication);
    console.log('la reclamation : ' + reclamations);
    console.log('le nombre de reclamation : ' + nb_reclamations);
    console.log('le montant de la reclamation est : ' + montant_reclamations);
}

// fonction qui vérifie si le champ est rempli
function champ_Rempli(champ, message_err_id) {
    let msg_err = 'Veuillez compléter ce champ avant de continuer.';
    let message_err = document.querySelector('#' + message_err_id);

    if (champ == '') {
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    }
    message_err.style.display = 'none';
    return true;
}

//fonction qui verifie le genre utiliser
function verif_Genre(champ, message_err_id) {
    const genres = ['homme', 'femme', 'autre'];
    let i = 0;
    let msg_err = 'Veuillez compléter ce champ avant de continuer.';
    let message_err = document.querySelector('#' + message_err_id);

    while (i < genres.length) {
        if (champ === genres[i]) {
            message_err.style.display = 'none';
            return true;
        }
        i++;
    }

    message_err.textContent = msg_err;
    message_err.style.display = 'block';
    return false;
}

// fonction qui vérifie si le champ est un nombre
function est_Nombre(champ, message_err_id) {
    let msg_err = 'le champ doit être un nombre';
    let message_err = document.querySelector('#' + message_err_id);

    if (isNaN(champ)) {
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    }

    message_err.style.display = 'none';
    return true;
}

// fonction qui vérifie si le champ est une année valide
function est_Annee_Valide(champ, message_err_id) {
    let annee = parseInt(champ);
    let date_courante = new Date();
    let annee_courante = date_courante.getFullYear();
    let minimum = 1998;
    let msg_err = '';
    let message_err = document.querySelector('#' + message_err_id);

    if (annee < minimum) {
        msg_err =
            "Malheureusement votre vehicule depasse les 25ans et vous n'etes donc pas assurable.";
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    } else if (annee > annee_courante) {
        msg_err = "C'est annee n'existe pas. Le maximum est de " + annee_courante;
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    }
    message_err.style.display = 'none';
    return true;
}

// fonction qui vérifie la borne minimum et maximum
function est_Entre_Bornes(champ, borne_min, borne_max, message_err_id) {
    let msg_err = 'Erreur : le champ doit être entre ' + borne_min + ' et ' + borne_max;
    let message_err = document.querySelector('#' + message_err_id);

    if (champ < borne_min || champ > borne_max) {
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    } else if (message_err.style.display !== 'none') {
        message_err.style.display = 'none';
        return true;
    }
    return true;
}

//verifie que le nombre na pas de decimale
function verifier_Nombre_Entier(nombre, message_err_id) {
    let msg_err = 'Le nombre ' + nombre + "n'est pas un entier valide.";
    let message_err = document.querySelector('#' + message_err_id);

    if (nombre % 1 === 0) {
        message_err.style.display = 'none';
        return true;
    } else {
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    }
}

// fonction verifie que le nombre a moins de 2 decimal si ces le cas
// retourne la valeur du nombre sinon retourne faux et le message d'erreur.
function verif_Float(champ, message_err_id) {
    console.log(champ);
    let valeur_float = parseFloat(champ);
    let msg_err = 'Le nombre ' + champ + ' a plus de deux décimales et est refusé.';
    let message_err = document.querySelector('#' + message_err_id);

    let flotant = valeur_float.toString().split('.')[1];
    if (!flotant || flotant.length <= 2) {
        message_err.style.display = 'none';
        return true;
    } else {
        message_err.textContent = msg_err;
        message_err.style.display = 'block';
        return false;
    }
}

//fonction qui calcul le montant total sans taxe

//fonction qui retourne valeur de la tax
function calculer_Taxe(produit) {
    const taux_taxe = 0.15;
    const taxe = produit * taux_taxe;
    return taxe;
}

//fonction qui va prendre le nombre de reclamation et demander une valeur a chaquune des reclamation.
//pour ensuite les stocker dans un tableau valeurs_reclamations.
function saisie_Valeurs_Reclamations(nombre_reclamations) {
    var traitement_reclamation = [];
    var total_reclamation = 0.0;
    for (var i = 0; i < nombre_reclamations; i++) {
        var input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Entrez la valeur de la réclamation ' + (i + 1);
        document.body.appendChild(input);
        traitement_reclamation.push(input);
    }
    var tous_valide = false;
    while (!tous_valide) {
        tous_valide = true;
        for (var i = 0; i < traitement_reclamation.length; i++) {
            var verif_rec = traitement_reclamation[i].value;

            if (!(tous_valide = champ_Rempli(verif_rec))) {
                break;
            } else if (!(tous_valide = est_Nombre(verif_rec))) {
                break;
            } else {
                total_reclamation = total_reclamation + verif_rec;
                //verifie que le nombre avant laddition total etait positif
                if (!(tous_valide = est_Entre_Bornes(verif_rec, 0, 35000))) {
                    break;
                } else if (!(tous_valide = est_Entre_Bornes(total_reclamation, 0, 35000))) {
                    break;
                } else {
                    if (!verif_Float(total_reclamation)) {
                        tous_valide = verif_Float(total_reclamation);
                        break;
                    } else {
                        total_reclamation = verif_Float(total_reclamation);
                    }
                }
            }
        }
    }
    /*
   for (var i = 0; i < traitement_reclamation.length; i++) {
      valeurs_reclamations.push(traitement_reclamation[i].value);
   }
   return valeurs_reclamations;
   */
    console.log('La valeur de la réclamation total est : ' + total_reclamation);

    return total_reclamation;
}
