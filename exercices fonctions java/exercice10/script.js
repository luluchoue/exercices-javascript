 // Exercice 10
    function verifierSaison() {
      let mois = prompt("Entrez un mois :").toLowerCase();
      let saison = "";
      if (["décembre", "janvier", "février"].includes(mois)) {
        saison = "Hiver";
      } else if (["mars", "avril", "mai"].includes(mois)) {
        saison = "Printemps";
      } else if (["juin", "juillet", "août"].includes(mois)) {
        saison = "Été";
      } else if (["septembre", "octobre", "novembre"].includes(mois)) {
        saison = "Automne";
      } else {
        saison = "Mois invalide";
      }
      alert("Saison : " + saison);
      document.write("Mois : " + mois);
    }