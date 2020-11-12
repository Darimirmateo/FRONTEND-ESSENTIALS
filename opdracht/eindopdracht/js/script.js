//TODO: met prompt bezoeker info opslaan in object persoon
  let bezoeker = {
   
   voornaam: prompt("Wat is je voornaam?"),
   achternaam: prompt("wat is je achternaam"),
   email: prompt("wat is je email"),
   leeftijd: prompt ("wat is je leeftijd"),
   woonplaats: prompt("wat is je woonplaats")
}



let stemGerechtigheid= 18;  
let oranjekleur= 16;
let blauwkleur= 17;
let groenkleur= 19;
let ramdomcolor= 0;


document.querySelector("h1").innerHTML = bezoeker.voornaam + " " + bezoeker.achternaam;


if (bezoeker.leeftijd==18){  
   document.querySelector("body").style.backgroundColor="gold";
}
if (bezoeker.leeftijd==oranjekleur){
   document.querySelector("body").style.backgroundColor="orange";
}
if (bezoeker.leeftijd==17){
   document.querySelector("body").style.backgroundColor="blue";
}
if (bezoeker.leeftijd==19){
   document.querySelector("body").style.backgroundColor="green";
   console.log("de color is green");
}

if (bezoeker.leeftijd==""){
   document.querySelector("body").style.backgroundColor="red";
}






