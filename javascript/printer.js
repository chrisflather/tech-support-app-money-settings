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
      console.log(sdcDiv);
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Grab the dataset using 'this' keyword
      let sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      showPrinters(sdc);
    });
  }
};

// Show printers
const showPrinters = sdc => {
  console.log(sdc);
};
