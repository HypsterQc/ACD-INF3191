var verifieForm = document.getElementById('verifieForm');
verifieForm.addEventListener('submit', function (event) {
    event.preventDefault();
    verifierDonnees();
});

function verifierDonnees() {
    var valeurs = [
        document.getElementById('nom').value,
        document.getElementById('espece').value,
        document.getElementById('race').value,
        document.getElementById('age').value,
        document.getElementById('description').value,
        document.getElementById('email').value,
        document.getElementById('adresse').value,
        document.getElementById('ville').value,
        document.getElementById('codepostal').value,
    ];
    var msg;
    var erreurs = [];
    var messageErreur = document.getElementById('messageErreur');
    for (var i = 0; i < valeurs.length; i++) {
        valeurs[i] = valeurs[i].replace(',', '');

        if (valeurs[i] == '') {
            erreurs.push('Veuillez compléter vos champs avant de continuer.');
        }

        if (i == 1) {
            msg = est_Entre_Bornes(valeurs[i].toString().length, 3, 20);
            if (msg == '') {
                msg = aucun_Nombre(valeurs[i]);
                if (msg != '') {
                    erreurs.push(msg);
                    msg = '';
                }
            } else {
                erreurs.push(msg);
                msg = '';
            }
        }
        if (i == 2 || i == 3) {
            msg = est_Entre_Bornes(valeurs[i].toString().length, 3, 25);
            if (msg == '') {
                msg = aucun_Nombre(valeurs[i]);
                if (msg != '') {
                    erreurs.push(msg);
                    msg = '';
                }
            } else {
                erreurs.push(msg);
                msg = '';
            }
        }
        if (i == 4) {
            msg = est_Nombre(valeurs[i]);
            if (msg == '') {
                verifier_Nombre_Entier(valeurs[i]);
                if (msg == '') {
                    est_Entre_Bornes(valeurs[i], 3, 30);
                    if (msg != '') {
                        erreurs.push(msg);
                        msg = '';
                    }
                } else {
                    erreurs.push(msg);
                    msg = '';
                }
            } else {
                erreurs.push(msg);
                msg = '';
            }
        }
        if (i == 5) {
            msg = est_Entre_Bornes(valeurs[i].toString().length, 0, 500);
            if (msg != '') {
                erreurs.push(msg);
                msg = '';
            }
        }
        if (i == 6) {
            msg = est_Entre_Bornes(valeurs[i].toString().length, 0, 80);
            if (msg == '') {
                if (!emailRegex.test(valeurs[i].toString())) {
                    erreurs.push("L'email n'est pas valide");
                }
            } else {
                erreurs.push(msg);
                msg = '';
            }
        }
        if (i == 7 || i == 8) {
            msg = est_Entre_Bornes(valeurs[i].toString().length, 0, 75);
            if (msg != '') {
                erreurs.push(msg);
                msg = '';
            }
            if (i == 8) {
                msg = cp_Canadien(valeurs[i]);
                if (msg != '') {
                    erreurs.push(msg);
                    msg = '';
                }
            }
        }
        console.log(valeurs[i]);
    }

    if (erreurs.length > 0) {
        messageErreur.innerHTML = '<ul><li>' + erreurs.join('</li><li>') + '</li></ul>';
    } else {
        document.getElementById('verifieForm').submit();
    }
}

// fonction qui vérifie si le champ est un nombre
function est_Nombre(champ) {
    let msg_err = 'le champ doit être un nombre';

    if (isNaN(champ)) {
        return msg_err;
    }
    return '';
}

// fonction qui vérifie si le champ est un nombre
function aucun_Nombre(champ) {
    let msg_err = 'le champ ne doit pas être composer de chiffre';

    if (isNaN(champ)) {
        return '';
    }
    return msg_err;
}

// fonction qui vérifie la borne minimum et maximum
function est_Entre_Bornes(champ, borne_min, borne_max) {
    let msg_err = 'Le champ doit être entre ' + borne_min + ' et ' + borne_max;

    if (champ < borne_min || champ > borne_max) {
        return msg_err;
    }
    return '';
}

//verifie que le nombre na pas de decimale
function verifier_Nombre_Entier(nombre) {
    let msg_err = 'Le nombre ' + nombre + " n'est pas un entier valide.";

    if (nombre % 1 === 0) {
        return '';
    } else {
        return msg_err;
    }
}

//fonction de validation du format code postal canadien
function cp_Canadien(champs) {
    let msg_err = "Le code postal n'est pas de format Canadien.";
    const formatCP = /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/;
    champs = champs.trim().toUpperCase();
    champs = champs.replace(/[DFIOQU]/g, '');

    if (formatCP.test(champs)) {
        return '';
    } else {
        return msg_err;
    }
}
