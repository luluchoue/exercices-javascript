
 let panier = [];
    function ajouterAuPanier() {
      let article = prompt("Entrez un article à ajouter au panier :");
      panier.push(article);
      alert("Article ajouté");
      document.write("Panier : " + panier.join(", "));
    }