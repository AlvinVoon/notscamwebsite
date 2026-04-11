const homeScreen = document.querySelector('.logo')

homeScreen.addEventListener('click', () => {
  window.location.href = "index.html";
});

import { createSDGWheel } from "./sdg.js";

  
createSDGWheel(document.getElementById("sdg-container"), {
    size: 35,
    holeSize: 0.5,
  });

const navBar = document.querySelector(".navbar");
const sdgItems = document.querySelectorAll(".sdg-item");

sdgItems.forEach(sdgItem => {
  sdgItem.addEventListener("click", () => {
    const color = sdgItem.dataset.id;

    // Remove any existing animation overlay
    const existing = navBar.querySelector(".bg-wipe");
    if (existing) existing.remove();

    // Create overlay div for left-to-right animation
    const overlay = document.createElement("div");
    overlay.classList.add("bg-wipe");
    overlay.style.backgroundColor = color;
    navBar.appendChild(overlay);

    // Trigger the animation
    requestAnimationFrame(() => {
      overlay.style.width = "100%";
    });

    // After animation, set final background and remove overlay
    setTimeout(() => {
      navBar.style.backgroundColor = color;
      overlay.remove();
    }, 600); // match CSS transition duration
  });
});