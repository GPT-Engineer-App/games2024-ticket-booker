# games2024-ticket-booker

Jeux Olympiques de Paris 2024

 



Demande du client : 

-	Crée un système de réservation de e-ticket pour les jeux Olympiques de Paris 2024.
-	Le processus de réservation comporte :
•	Une page d’accueil présentant les Jeux Olympique de Paris 2024 et quelques épreuves.
•	Une page présentant les offres de tickets pour la réservation :
Solo(1), duo(2), familiale(4).
•	Le client peut sélectionner l’offre qu’il souhaite et la mettre dans son panier de réservation.
•	Créer un espace administrateur pour visualiser, ajouter, modifier ou créer des offres. Visualiser aussi le nombre de vente par offre.
•	Le visiteur devra s’authentifier pour terminer sa réservation.
•	Au moment de la création du compte utilisateur, une clef de sécurité est généré automatiquement visible seulement dans l’espace administrateur.
•	La compte utilisateur devra comporter : Nom et Prénom de l’utilisateur, Adresse e-mail, un mot de passe, et une politique de sécurité préciser par le développeur.
•	Un processus 
•	Le visiteur après l’authentification peut payer son billet ( le paiement n’est pas effectué dans l’application, simuler un mock pour effectuer le paiement).
•	Après l’achat du billet par l’utilisateur une autre clef de sécurité est générée concaténer avec la clef créer précédemment lors de la création du compte utilisateur, Un QrCode sera effectué en utilisant la clef définitive qui sera le e-billet client.
•	Chaque e-billet sera scanné, et a l’aide des deux clefs de sécurité généré précédemment permettra de savoir que le e-billet est authentiques et sécurisé et que le visiteur est titulaire du e-billet.
•	L’application doit être dynamique avec du JavaScript (le JavaScript permet de contacter votre backend sans rechargement de page).
•	Mettre en place des tests et produire un rapport détaillant le pourcentage de code total couvert par les tests.

•	Les choix techniques : 

   Front-end: Html5, Bootstrap, javascript, Nextjs,
   Back-end: Python, Django,
Bases de données: Postgresql.




## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/games2024-ticket-booker.git
cd games2024-ticket-booker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
