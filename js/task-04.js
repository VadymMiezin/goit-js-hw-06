const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementEl = document.querySelector("[data-action = decrement]");
const incrementEl = document.querySelector("[data-action = increment]");
const valueEl = document.querySelector("#value");

decrementEl.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementEl.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
