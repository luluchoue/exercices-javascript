

  let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

if (nombre1 > nombre2) {
  alert("Le plus grand nombre est : " + nombre1);
} else if (nombre2 > nombre1) {
  alert("Le plus grand nombre est : " + nombre2);
} else {
  alert("Les deux nombres sont égaux : " + nombre1);
}
 