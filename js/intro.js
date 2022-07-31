function volume() {
  const radius =
    document.getElementById(
      "name"
    ).value;
  const result = Math.pow(radius, 3);

  let volume = (4 / 3) * 3.14 * result;
  const htmlElement =
    document.querySelector("#volume");
  htmlElement.textContent = volume;
}
