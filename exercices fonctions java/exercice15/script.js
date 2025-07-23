
  function verifierFormulaire() {
      let nom = prompt("Entrez votre nom :");
      let email = prompt("Entrez votre email :");
      if (email.includes("@")) {
        alert("Formulaire valide");
      } else {
        alert("Formulaire invalide");
      }
      document.write("Nom : " + nom + "<br>Email : " + email);
    }