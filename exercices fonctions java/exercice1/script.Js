
function verifierAge(){
  //Demande l'age
  let age = prompt("entrer votre age :");
  //Convertit en nbre
  age = Number(age);
   if (age >= 18) {
    alert("vous etes majeur");
   } else{
     document.write("vous etes mineur<br>");
     document.write("votre age est:" + age);
   }
}