  function verifierParite() {
      let nombre = Number(prompt("Entrez un nombre :"));
      if (nombre % 2 === 0) {
        alert("Nombre pair");
      } else {
        alert("Nombre impair");
      }
      document.write("Nombre : " + nombre);
    }