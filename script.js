const incrementButtons = document.querySelectorAll(".increment");
incrementButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const paragraph = event.target.parentNode;
    const hearts = paragraph.querySelector(".hearts");
    hearts.textContent += "❤";
  });
});

const decrementButtons = document.querySelectorAll(".decrement");
decrementButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const paragraph = event.target.parentNode;
    const hearts = paragraph.querySelector(".hearts");
    hearts.textContent = hearts.textContent.slice(0, -1);
    if (hearts.textContent === "") {
      hearts.textContent = "❤";
    }
  });
});
