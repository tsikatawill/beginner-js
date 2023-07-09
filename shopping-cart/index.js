const price = document.querySelector(".price").innerText;
const quantity = document.querySelector(".qty");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const total = document.querySelector(".total-amt");

const init = () => {
  const handleAdd = () => {
    quantity.innerText = parseInt(quantity.innerText) + 1;
  };

  const handleSubtract = () => {
    if (parseInt(quantity.innerText) > 1) {
      quantity.innerText = parseInt(quantity.innerText) - 1;
    }
  };

  const updatePrice = () => {
    const newPrice = price * parseInt(quantity.innerText);

    total.innerText = newPrice;
  };

  // handle add
  addBtn.addEventListener("click", () => {
    handleAdd();
    updatePrice();
  });

  // handle subtract
  subtractBtn.addEventListener("click", () => {
    handleSubtract();
    updatePrice();
  });
};

document.addEventListener("DOMContentLoaded", init);
