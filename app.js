let editedPlan = 0

const priceOverlayElement = document.querySelector(".overlay");
const backdropElement = document.getElementById("backdrop");
const formElement =  document.getElementById("form-control")
const errorOutputMessage =  document.getElementById("config-errors")
const inputPlanElement = document.querySelector(".music-price-input")

const changeFirstPlanBtn = document.querySelector(".change-musicplan-btn");
const changeSecondPlanBtn = document.querySelector(".change-bluetoothplan-btn");




const musicPriceInput = document.querySelector(".music-price-input");
const bluetoothPriceInput = document.querySelector(".bluetooth-price-input");

const musicAnnualPrice = document.querySelector(".music-price");
const bluetoothAnnualPrice = document.querySelector(".bluettooth-price");



function changePlan(event) {
  
  editedPlan = +event.target.dataset.annualplan;
  backdropElement.style.display = "block";
  priceOverlayElement.style.display = "block";
}

function closeAnnualPlanConfig() {
  backdropElement.style.display = "none";
  priceOverlayElement.style.display = "none";
  errorOutputMessage.textContent = "";
  inputPlanElement.value =  "";


  
}

function saveMusicPlanConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredAnnualPlan = formData.get("annual-plan").trim();
  
  
  if (!enteredAnnualPlan) {
    errorOutputMessage.textContent = "please enter a valid plan!";
    return;
  }else if(enteredAnnualPlan < 10.00) {
    errorOutputMessage.textContent = "Annual plan must be grea than $9.00!"
    return;
  }else if(enteredAnnualPlan > 30.00){
    errorOutputMessage.textContent = "plan above $30.00 is not available"
    return;
  }
    const updatedPlan  = document.getElementById("annual-" + editedPlan + "-data");
    console.log(updatedPlan)
    updatedPlan.children[1].textContent = enteredAnnualPlan;
    closeAnnualPlanConfig();
}

  
changeFirstPlanBtn.addEventListener("click", changePlan);
changeSecondPlanBtn.addEventListener("click", changePlan);


formElement.addEventListener("submit", saveMusicPlanConfig);
backdropElement.addEventListener("click", closeAnnualPlanConfig);
