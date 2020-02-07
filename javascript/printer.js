document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
});
const selectSDC = () => {
  // Grab the SDC buttons
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of sdcButtons) {
    button.addEventListener("click", () => {
      console.log("click-click-boom");
    });
  }
};
