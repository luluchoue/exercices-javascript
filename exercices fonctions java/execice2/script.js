



  let tableauNoms = ["Alice<br>" , "Bob <br>", "Charlie <br>", "David<br> ", "Eva <br>"];
  document.write("<h3>Tableau de noms : <h3>");
  document.write("<ul>");
  for(let i=0; i < tableauNoms.length;i++){
    document.write("<li>" + tableauNoms[i] +  "</li>" );
  }
  document.write("</ul>")

  function chercherNom(){ 

  let nomrecherche = prompt("Entrer un nom a rechercher:");
  if (tableaunoms.includes(nomrecherche)) {
    alert("Nom trouvé");
  } else {
    alert("Nom non trouvé");
  }

}
