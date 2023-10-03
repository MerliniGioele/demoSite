// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";//ho cambiato il testo h1 in hello world

// document.addEventListener("DOMContentLoaded", () => {
//     //... qua dovrei inerire il codice che voglio far eseguire dopo che tutti gli elementi del file html sono stati definti || questo metodo viene adoperato quando inserisco lo script del file javascript nell'head e non alla fine del body

//     //esempio codice inserito
//     // const myHeading = document.querySelector("h1");
//     // myHeading.textContent = "Hello world!";//ho cambiato il testo h1 in hello world
// });

let myVariable;
myVariable = "Bob";
myVariable = 10;
console.log(myVariable);//stampo la variabile

//conditionals
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  //alert("Yay, I love chocolate ice cream!"); //alert fa partire il messaggio di "allerta"
} else {
  //alert("Awwww, but chocolate is my favorite…");
}

// function multiply(num1, num2) {//non  bisogna mettere il tipo delle variabili
//     let result = num1 * num2;
//     return result;
// }
// //esecuzione funzione
// multiply(4,6);
// console.log(multiply(4,7));
  
//evento - click su qualsivoglia punto dell'html
document.querySelector("html").addEventListener("click", function () {
    //alert("Ouch! Stop poking me!");//mi esce un'allert 
});

const myImage = document.querySelector("img");//costante => non cambia 

myImage.onclick = () => {//una funzione che una volta cliccata l'immagine di firefox me la cambia
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//funzione per fare in mdodo che mi cambi il nome di h1 una volta premuto un bottone 
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// function setUserName() {//funzione per settare il nome
//     const myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${myName}`;
// }
// if (!localStorage.getItem("name")) {//controllo che local storage abbia la variabile "name"
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }
function setUserName() {//fa le stesse cose del codice soprastante commentato
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
  
myButton.onclick = () => {//funzione che effettivamente richiama il tutto
    setUserName();
};