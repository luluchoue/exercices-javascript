

//Methode 01 :------fonction global----
/*function add1(a,b){
    som = a + b
    return som       
}
result=add1(5,20);
console.log(result);*/

  //methode 02 :-----fonction global----
  function add2(a,b){
  return a + b 
 }/* result=add2(5,20);
  console.log(result);*/

  //methode 03 :-----fonction global----
  let add3 =function(a,b){
  return a + b  }
result=add3(5,20);
console.log(result);

  //methode 04 :-----fonction flechee----
  let add4 = (a,b) =>{
  return a + b  
}

  //methode 05 :-----fonction flechee----
 /* let add5 = (a,b) => a+b  
  result =add5(3,20)
  console.log(clickbutton)*/


 

  let clickbutton=document.querySelector('button')
  console.log(clickbutton);
//syntax
  //clickbutton.addEventListener('event', "fonction flechee")
  clickbutton.addEventListener('click',
    ()=> {
    alert('click sur le boutton') } ) 


  let clickButtonClass =document.querySelector('.btn1')
  console.log(clickButtonClass);
clickButtonClass.addEventListener('click',
    ()=> {
    alert('click sur le boutton') } )


  let clickbuttonId=document.getElementById('btn2')
  console.log(clickbuttonId);

clickbuttonId.addEventListener('click',
    ()=> {
    alert('click sur le boutton') } )



  //CLICK Se declenche lorqun utilisateur clique sur un element
  //MOUSEOVER se produit lorsqu'un utilisateur  survole un element avec la souris 
  //MOUSEOUT se produit lorsqu'un utilisateur  quitte un element avec la souris 
  //keyup se declenche lorsqu'une touche  du clavier  est relachee
  //keydown se declenche lorsqu'une touche  du clavier  est enfoncee 

  //submit se produit lorsque un formulaire est  soumis
  //load se declenche lorsque la page ou un element est completement charge

  //rezize :se declenche lorsqu'une fenetre est redimensionnee
  //scroll: se produit lorsqun user fait defiler une page ou un element 
  //FOCUS: se declenche lorsqun element recoit le focus comme 






  



 