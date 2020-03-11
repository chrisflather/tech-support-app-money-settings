document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
});
// Variables
const printers = ["SDP1000", "Kodak 72750", "HP D5460"];
const selectSDC = () => {
  // Grab the SDC buttons
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of sdcButtons) {
    button.addEventListener("click", function() {
      // Grab top div
      sdcDiv = document.getElementById("top-sdc-div");
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Grab the dataset using 'this' keyword
      let sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      changeTitleToPrinter(sdc);
    });
  }
};
const changeTitleToPrinter = sdc => {
  console.log("The SDC is:", sdc);
  // change Select CCU to Select Printer
  let titleElement = document.getElementById("title-element");
  titleElement.innerHTML = "Select Printer";
  buttons(sdc);
};

const changeTitleToSettings = sdc => {
  // change Select Printer to Settings
  let titleElement = document.getElementById("title-element");
  titleElement.innerHTML = "Settings";
};

const buttons = sdc => {
  printers.forEach(printer => {
    let printerTopDiv = document.getElementById("printerDiv");
    let printerDiv = document.createElement("div");
    let printerLink = document.createElement("a");
    printerDiv.setAttribute("class", "display-button-div");
    printerDiv.setAttribute("align", "center");
    printerLink.setAttribute("class", "example_a");
    printerLink.setAttribute("data-display", `${printer}`);
    console.log(printerLink);
    printerLink.setAttribute("href", "#");
    printerLink.setAttribute("rel", "nofollow noopener");
    printerLink.appendChild(document.createTextNode(`${printer}`));
    printerDiv.appendChild(printerLink);
    printerTopDiv.appendChild(printerDiv);
  });
  addListener(sdc);
};

const addListener = sdc => {
  let consoleButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of consoleButtons) {
    button.addEventListener("click", function() {
      // Grab top div
      sdcDiv = document.getElementById("top-sdc-div");
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Grab the dataset using 'this' keyword
      let printer = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      console.log("sup", sdc);
      changeTitleToSettings(sdc);
    });
  }
};
