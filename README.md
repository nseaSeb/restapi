## RestAPI

<img src="https://cdn.pixabay.com/photo/2014/04/02/10/26/attention-303861_1280.png" width="77" alt="Nest Logo" />

`Do not use in production. Simple example that can be useful to develop a front-end application without having to create a rest api server upstream.`

using nest.js / hbs / mongoDB

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Start docker service on port 3000
$ npm run up

```

## Use it

Use your local route
http://localhost:3000/
To see the home page

http://localhost:3000/YourRoot
Get/post ...

the api response contain an of object like this:

```json
{
  "_id": "id of your item",
  "key": "YourRoot",
  "data": "JSON String of your data",
  "createDate": "isoString of your create date",
  "updateDate": "isoString of your update date"
}
```

## Utilisation

<img src="https://cdn.pixabay.com/photo/2014/04/02/10/26/attention-303861_1280.png" width="77" alt="Nest Logo" />

`Ne pas utiliser en production. Exemple simple qui peut être utile pour développer une application front-end sans avoir à créer un serveur rest api en amont.`

## Demarrer le container

```bash
# Lance le container et demarre le service sur le port 3000
$ npm run up

```

Le service vous permet de post vos données sur la route de votre choix.

Par exemple un post http://localhost:3000/produits pour stocker une liste de produits.

Le get sur cette même route vous listes vos données.

Get avec un \_id pour obtenir l'entrée correspondante.

Delete \_id pour supprimer l'entrée.

Notez que vos données se retrouvent sous forme d'une chaine de caractère dans la key data:

En règle général il vous suffira d'un simple JSON.Parse(response.data).
