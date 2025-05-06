// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("mainHeading").textContent = "You clicked the button!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("styleBtn").addEventListener("click", function () {
    const intro = document.getElementById("intro");
    intro.classList.toggle("highlight");
  });
  
  // Add or remove an element when a button is clicked
  document.getElementById("toggleElementBtn").addEventListener("click", function () {
    const container = document.getElementById("extraContainer");
    const existing = document.getElementById("extraText");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newPara = document.createElement("p");
      newPara.id = "extraText";
      newPara.textContent = "Here is some extra content!";
      container.appendChild(newPara);
    }
  });
  