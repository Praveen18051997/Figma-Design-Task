const options = document.querySelectorAll(".option");
const radios = document.querySelectorAll("input[type=radio]");
const total = document.querySelector(".total");

radios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    options.forEach(opt => opt.classList.remove("selected"));
    options[index].classList.add("selected");

    const price = options[index].dataset.price;
    total.textContent = `Total : Price  ${price}.00`;
  });
});
