
let nbre1 = prompt("entrez le nbre1");
let nbre2= prompt("entrez le nbre2");

  let somme= nbre1+nbre2 ;
  let difference= nbre1+nbre2 ;
  let produit = nbre1*nbre2 ;
  let quotient = nbre2 !== 0 ? nbre1/nbre2: "division par zero impossible" ;

document.write("somme :" +somme +"<br>");
document.write("difference :" + difference +"<br>");
document.write("produit :" + produit +"<br>");
document.write("quotient :" + quotient +"<br>");