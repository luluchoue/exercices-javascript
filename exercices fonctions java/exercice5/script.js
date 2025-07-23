
 function verifierMotDePasse() {
      let motDePasse = "azerty123";
      let saisie = prompt("Entrez le mot de passe :");
      if (saisie === motDePasse) {
        alert("Accès autorisé");
      } else {
        alert("Accès refusé");
      }
    }