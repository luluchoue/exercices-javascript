   function convertirDevise() {
      let taux = 1.1;
      let euros = Number(prompt("Montant en euros :"));
      let dollars = euros * taux;
      alert(euros + "€ = " + dollars.toFixed(2) + "$");
      document.write("Taux de change : 1€ = " + taux + "$");
    }