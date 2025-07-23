  function calculerMoyenne() {
      let n1 = Number(prompt("Note 1 :"));
      let n2 = Number(prompt("Note 2 :"));
      let n3 = Number(prompt("Note 3 :"));
      let moyenne = (n1 + n2 + n3) / 3;
      alert("Moyenne = " + moyenne.toFixed(2));
      if (moyenne > 10) {
        document.write("Moyenne élevée");
      } else {
        document.write("Moyenne faible");
      }
    }