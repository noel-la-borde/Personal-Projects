// TODO: Complete the toggleDarkMode function
  let themeButton = document.getElementById("theme-button");
 // Write your code to manipulate the DOM here
const toggleDarkMode = () => { 
   document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);

 
const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    email: petitionInputs[1].value,
    hometown: petitionInputs[2].value

  }

  for(let i=0; i<petitionInputs.length; i++){
    if (petitionInputs[1].value.length < 2) { 
           petitionInputs[i].classList.add('error');
      containsErrors = true;
    } 

   else {
      petitionInputs[i].classList.remove('error');
    }

  }

     if(containsErrors==false){
      addSignature(person);
      toggleModal(person);
      for(let i=0; i<petitionInputs.length; i++){
        petitionInputs[i].value = "";
        containsErrors = false;
    }
    }

}

 

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");


const addSignature = (person) => {

  var sig= document.createElement("p");
   sig.textContent= "🖊️ " + person.name + " from " + person.hometown + " supports this matter.";
  var list = document.getElementById("input");
  list.appendChild(sig);
}
signNowButton.addEventListener('click', validateForm);

let animation = {

revealDistance: 150,
inicialOpacity: 0,
transicionDelay: 0,
trasitionDuration: '4s',
transitionProperty: 'all',
tranitionTimingFunction: 'ease'
}

var revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = 
      revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    
    } 
    else {
      revealableContainers[i].classList.remove("active");
      
}
} 
}

window.addEventListener("scroll", reveal);
const toggleModal = (person) => {

  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
   let intervalId = setInterval(scaleImage, 500);

 modal.style.display = "flex";

   modalContent.textContent= "Thank you so much, " + person.name + "! " + person.hometown + " supports this matter!";
setTimeout(() => {
  modal.style.display = "none";
  clearInterval(intervalId);
}, 4000)
}
var scaleFactor = 1;
var modalImage = document.getElementById("modal-image");
var scaleImage = () => {
  scaleFactor += .1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}
if (scaleFactor === 1) {
  scaleFactor = 0.8;
} else {
  scaleFactor = 1;
}
scaleFactor = scaleFactor === 1 ? 0.8 : 1