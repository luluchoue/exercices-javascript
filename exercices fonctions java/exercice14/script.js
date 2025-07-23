  function verifierTemperature() {
      let temp = Number(prompt("Entrez la température :"));
      if (temp > 30) {
        alert("Chaud");
      } else {
        alert("Froid");
      }
      document.write("Température : " + temp);
    }