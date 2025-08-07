const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("click", () => {
  const offset = 40;
  const randX = (Math.random() - 0.5) * offset;
  const randY = (Math.random() - 0.5) * offset;
  noBtn.style.position = "relative";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
});