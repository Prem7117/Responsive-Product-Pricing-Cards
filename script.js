
const buttons = {
  monthly: document.getElementById("monthly"),
  yearly: document.getElementById("yearly")
};

const prices = document.querySelectorAll(".price span");
const units = document.querySelectorAll(".unit");

function setPeriod(period) {

  // Update all prices
  prices.forEach(function(price) {
    price.textContent = price.dataset[period];
  });

  // Update billing labels
  units.forEach(function(unit) {
    unit.textContent =
      period === "monthly"
        ? "per month"
        : "per year";
  });

  // Update active button
  Object.keys(buttons).forEach(function(key) {

    const active = key === period;

    buttons[key].classList.toggle(
      "active",
      active
    );

    buttons[key].setAttribute(
      "aria-pressed",
      String(active)
    );

  });
}

// Monthly button
buttons.monthly.addEventListener(
  "click",
  function() {
    setPeriod("monthly");
  }
);

// Yearly button
buttons.yearly.addEventListener(
  "click",
  function() {
    setPeriod("yearly");
  }
);

// Default billing period
setPeriod("monthly");
