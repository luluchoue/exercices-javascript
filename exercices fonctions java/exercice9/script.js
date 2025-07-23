 let solde = 500;
    function retrait() {
      let montant = Number(prompt("Montant à retirer :"));
      if (montant <= solde) {
        alert("Retrait autorisé");
      } else {
        alert("Solde insuffisant");
      }
    }