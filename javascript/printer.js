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
  // change Select CCU to Select Printer
  let titleElement = document.getElementById("title-element");
  titleElement.innerHTML = "Select Printer";
  buttons(sdc);
};

const buttons = sdc => {
  printers.forEach(printer => {
    let printerTopDiv = document.getElementById("printer-div");
    let printerDiv = document.createElement("div");
    let printerLink = document.createElement("a");
    printerDiv.setAttribute("class", "display-button-div");
    printerDiv.setAttribute("align", "center");
    printerLink.setAttribute("class", "example_a");
    printerLink.setAttribute("data-console", `${printer}`);
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
      let printer = this.dataset.console;
      // I want to pass this camera to the 'showPrinters'
      changeTitleToSettings(sdc, printer);
    });
  }
};

const changeTitleToSettings = (sdc, printer) => {
  console.log(sdc, printer);
  // change Select Printer to Settings
  let titleElement = document.getElementById("title-element");
  titleElement.innerHTML = "Printer Settings";
  printerSettingsDiv(sdc, printer);
};

const printerSettingsDiv = (sdc, printer) => {
  let sdcUpcase = sdc.toUpperCase();

  // Grab printer div
  let printerDiv = document.getElementById("printer-div");
  // reassign class name
  printerDiv.classList.add("printer-display-none-div");
  // Grab Settings parent div
  let settingsDiv = document.getElementById("settings-div");
  // Create main div
  let settingsMainDiv = document.createElement("div");
  settingsMainDiv.setAttribute("class", "settings-main-div");
  settingsDiv.appendChild(settingsMainDiv);
  // Two Headers side-by-side
  let settingsHeaderOne = document.createElement("div");
  let settingsHeaderTwo = document.createElement("div");
  // Set attributes
  settingsHeaderOne.setAttribute("class", "header-one-div");
  settingsHeaderTwo.setAttribute("class", "header-two-div");
  // Insert text-params
  let paramsTitle = document.createElement("h3");
  let paramsTitleTextNode = document.createTextNode(`${sdcUpcase}`);
  paramsTitle.appendChild(paramsTitleTextNode);
  settingsHeaderOne.appendChild(paramsTitle);
  // Insert text-settings
  let settingsTitle = document.createElement("h3");
  let settingsTitleTextNode = document.createTextNode(`${printer}`);
  settingsTitle.appendChild(settingsTitleTextNode);
  settingsHeaderTwo.appendChild(settingsTitle);

  // test insert
  settingsMainDiv.appendChild(settingsHeaderOne);
  settingsMainDiv.appendChild(settingsHeaderTwo);
};
