# Copyright 2022 <Votre nom et code permanent>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask, abort
from flask import render_template
from flask import request
from flask import redirect
from flask import g
from .database import Database
import random

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()

def get_matrice_animaux():
    animaux = get_db().get_animaux()
    matrice_animaux = []
    for animal in animaux:
        matrice_animaux.append([
            animal['id'],
            animal['nom'],
            animal['espece'],
            animal['race'],
            animal['age'],
            animal['description'],
            animal['courriel'],
            animal['adresse'],
            animal['ville'],
            animal['cp'],
        ])
    return matrice_animaux

# definition de toutes les Routes des pages web
#@app.route('/')
#def accueil():
#    return render_template('accueil.html')

@app.route("/")
def accueil():
    animal = get_db().get_animaux()
    random.shuffle(animal)
    return render_template("accueil.html", animaux = animal)

@app.route('/form')
def form():
    matrice_animaux = get_matrice_animaux()
    nb_animaux = len(matrice_animaux)
    return render_template('form.html', nb_animaux = nb_animaux)

@app.route('/presentation/')
def presentation():
    animal_id = request.args.get('animal_id')
    animal = get_db().get_animal(animal_id)
    if animal is None:
        abort(404)
    return render_template('presentation.html', animal=animal)

@app.route('/trouver_resultat')
def recherche():
    animal_info = request.args.get('choix_recherche')
    animals = get_db().get_animaux()
    resultats = []
    for ligne in animals:
        if animal_info in ligne.get('nom'):
            resultats.append(ligne)
        elif animal_info in ligne.get('espece'):
            resultats.append(ligne)
        elif animal_info in ligne.get('race'):
            resultats.append(ligne)
    if not resultats:
        return redirect('/aucun_resultat')
    else:
        return render_template('trouver_resultat.html', resultats = resultats)

@app.route('/aucun_resultat')
def aucunRecheche():
    animal = get_db().get_animaux()
    random.shuffle(animal)
    return render_template('aucun_resultat.html', animaux = animal)
    

@app.route("/get_description")
def getdescription():
    animal = get_db().animaux() 

# Creation page d'erreur
# Invalide url
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

#invalide Server
@app.errorhandler(500)
def page_not_found(e):
    return render_template("500.html"), 500
