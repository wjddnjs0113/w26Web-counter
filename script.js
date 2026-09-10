let count = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function render() {
  countEl.textContent = count;
  if (count == 1557){
    alert("티~원");
  }
}

incBtn.addEventListener("click", () => {
  count++;
  render();
});

decBtn.addEventListener("click", () => {
  count--;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

render();
