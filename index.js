// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
	var rightNumber = dodger.style.left.replace("px", "");
	var right = parseInt(rightNumber, 10);

	if (right < 360) {
		dodger.style.left = `${right + 1}px`;
	}}
document.addEventListener("keydown", function (e) {
	if (e.which === 37) {
		moveDodgerLeft();}
	if (e.which === 39) {
		moveDodgerRight();}
});