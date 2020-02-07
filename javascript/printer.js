document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
});
const selectSDC = () => {
  // Grab the SDC buttons
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of sdcButtons) {
    button.addEventListener("click", function() {
      // Grab the dataset using 'this' keyword
      let sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      console.log(sdc);
      showPrinters(sdc);
    });
  }
};

// Show printers
const showPrinters = sdc => {
  console.log(sdc);
  alert(sdc);
};
