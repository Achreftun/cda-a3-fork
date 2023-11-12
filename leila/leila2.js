var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

// vider les champs au chargement de la page
window.addEventListener("load", () => {
  // vider les champs
  num1.value = "";
  num2.value = "";
});

// fonction de calcul
var calculate = (a, b) => {
  var operator = document.getElementById("select-operator").value;
  var operationResult;

  switch (operator) {
    case "add":
      operationResult = a + b;
      break;
    case "substract":
      operationResult = a - b;
      break;
    case "multiply":
      operationResult = a * b;
      break;
    case "divide":
      operationResult = a / b;
      break;
  }

  return operationResult;
};

// valider la saisie et afficher le résultat au clic sur le bouton "="
var calcBtn = document.getElementById("btn-calculate");
var resultBox = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  // vider le résultat précédent
  resultBox.innerHTML = "";

  // vérifier si les champs sont des nombres
  if (num1.value == "" || num2.value == "") {
    alert("Veuillez entrer des nombres valides");
    return;
  }

  // convertir les valeurs en nombres
  val1 = parseFloat(num1.value);
  val2 = parseFloat(num2.value);

  // afficher le résultat
  var result = document.createElement("p");
  result.innerText = calculate(val1, val2);
  resultBox.appendChild(result);
});

// vider les champs au clic sur le bouton C
var clearBtn = document.getElementById("btn-clear");

clearBtn.addEventListener("click", () => {
  // vider les champs
  num1.value = "";
  num2.value = "";

  // vider le résultat précédent ???
  //   resultBox.innerHTML = "";
});
