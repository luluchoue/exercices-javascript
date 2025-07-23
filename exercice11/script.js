
// Demander l'année de naissance à l'utilisateur
  let anneeNaissance = prompt("Quelle est votre année de naissance ?");

  // Convertir la saisie en nombre entier
  anneeNaissance = parseInt(anneeNaissance);

  // Obtenir l'année actuelle
  let anneeActuelle = new Date().getFullYear();

  // Calculer l'âge
  let age = anneeActuelle - anneeNaissance;

  // Afficher le résultat
  document.write("Vous avez " + age + " ans.");