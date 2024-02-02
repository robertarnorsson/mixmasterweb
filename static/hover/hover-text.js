const letterElements = document.querySelectorAll(".letter");

letterElements.forEach(function (letterElement) {
  letterElement.addEventListener("mouseover", function () {
    const hoverElement = this;
    const previousElement = letterElement.previousElementSibling;
    const nextElement = letterElement.nextElementSibling;
    if (hoverElement) hoverElement.classList.add("animate-hover");
    if (previousElement) previousElement.classList.add("animate-small-hover");
    if (nextElement) nextElement.classList.add("animate-small-hover");
  });
  letterElement.addEventListener("mouseout", function () {
    const hoverElement = this;
    const previousElement = letterElement.previousElementSibling;
    const nextElement = letterElement.nextElementSibling;
    if (hoverElement) hoverElement.classList.remove("animate-hover");
    if (previousElement)
      previousElement.classList.remove("animate-small-hover");
    if (nextElement) nextElement.classList.remove("animate-small-hover");
  });
});