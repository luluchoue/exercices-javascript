



let nbre= prompt("entrer un nbre");
document.write("les nombres pairs entre 1 et " +nbre + " sont: ");
for (let i= 1; i<= nbre; i++)
{
  if(i% 2===0){
    document.write(i +"<br>");
  }
}