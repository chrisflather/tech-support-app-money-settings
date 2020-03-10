document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
});
const selectSDC = () => {
  // Grab the SDC buttons
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of sdcButtons) {
    button.addEventListener("click", function() {
      // Grab top div
      sdcDiv = document.getElementById("sdc-div");
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Grab the dataset using 'this' keyword
      let sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      changeTitle(sdc);
    });
  }
};
const changeTitle = sdc => {
  // change Select CCU to Select Printer
  let titleElement = document.getElementById("title-element");
  titleElement.innerHTML = "Select Printer";
  selectPrinter(sdc);
};
// Show printers
const selectPrinter = sdc => {
  // Grab top div
  let printerDiv = document.getElementById("printerDiv");
  // Create element
  let hTag = document.createElement("h1");
  hTag.innerHTML = "sup yo";
  console.log(hTag);
  printerDiv.appendChild(hTag);
};
