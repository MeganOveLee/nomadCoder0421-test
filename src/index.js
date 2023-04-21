function setBackgroundColor() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    document.body.style.backgroundColor = "lightblue";
  } else if (windowWidth < 900) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", setBackgroundColor);
