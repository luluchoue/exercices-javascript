

 
  let saisie = prompt("Entrez un nombre :");
  let nombre = parseInt(saisie);
      if (isNaN(nombre)) {
        alert("Ce n'est pas un nombre valide.");
      } else if (nombre % 2 === 0) {
        alert("Le nombre est pair.");
      } else {
        alert("Le nombre est impair.");
      }
    