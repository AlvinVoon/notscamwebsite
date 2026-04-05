function createSDGWheel(container, options = {}) {
  const size = options.size || 200;
  const holeSize = options.holeSize || 0.6;

  const sdgs = [
    "No Poverty","Zero Hunger","Good Health","Quality Education",
    "Gender Equality","Clean Water","Clean Energy","Decent Work",
    "Industry & Innovation","Reduced Inequality","Sustainable Cities",
    "Responsible Consumption","Climate Action","Life Below Water",
    "Life on Land","Peace & Justice","Partnerships"
  ];

  const colors = [
    "#e5243b","#dda63a","#4c9f38","#c5192d","#ff3a21",
    "#26bde2","#fcc30b","#a21942","#fd6925","#dd1367",
    "#fd9d24","#bf8b2e","#3f7e44","#0a97d9","#56c02b",
    "#00689d","#19486a"
  ];

  const segment = 360 / colors.length;

  // gradient
  let gradient = "conic-gradient(";
  colors.forEach((c, i) => {
    gradient += `${c} ${(i*segment).toFixed(3)}deg ${((i+1)*segment).toFixed(3)}deg`;
    if (i !== colors.length - 1) gradient += ",";
  });
  gradient += ")";

  // wrapper (important for positioning dropdown)
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.display = "inline-block";

  // wheel
  const wheel = document.createElement("div");
  wheel.style.width = size + "px";
  wheel.style.height = size + "px";
  wheel.style.borderRadius = "50%";
  wheel.style.background = gradient;
  wheel.style.cursor = "pointer";
  wheel.style.transition = "transform 0.5s ease";
  
  // hover animation
let spinning = false;
let angle = 0;

wheel.addEventListener("mouseenter", () => {
  spinning = true;

  function spin() {
    if (!spinning) return;  // stop when mouse leaves
    angle += 4; // rotation speed (degrees per frame)
    wheel.style.transform = `scale(1.05) rotate(${angle}deg)`;
    requestAnimationFrame(spin);
  }

  spin();
});

wheel.addEventListener("mouseleave", () => {
  spinning = false;
  wheel.style.transform = "scale(1) rotate(0deg)";
});
  // center hole
  const hole = document.createElement("div");
  hole.style.width = holeSize * 100 + "%";
  hole.style.height = holeSize * 100 + "%";
  hole.style.background = "white";
  hole.style.borderRadius = "50%";
  hole.style.position = "absolute";
  hole.style.top = "50%";
  hole.style.left = "50%";
  hole.style.transform = "translate(-50%, -50%)";

  wheel.appendChild(hole);

  // dropdown
  const dropdown = document.createElement("div");
  dropdown.style.position = "absolute";
  dropdown.style.top = size + 10 + "px";
  dropdown.style.left = "50%";
  dropdown.style.transform = "translateX(-50%) scale(0.95)";
  dropdown.style.background = "white";
  dropdown.style.borderRadius = "12px";
  dropdown.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
  dropdown.style.padding = "10px";
  dropdown.style.width = "220px";
  dropdown.style.maxHeight = "250px";
  dropdown.style.overflowY = "auto";
  dropdown.style.opacity = "0";
  dropdown.style.pointerEvents = "none";
  dropdown.style.transition = "all 0.25s ease";

  // fill items
  sdgs.forEach((name, i) => {
    const item = document.createElement("div");
    item.textContent = `${i+1}. ${name}`;
    item.style.padding = "8px";
    item.style.borderRadius = "8px";
    item.style.cursor = "pointer";

    item.classList.add("sdg-item");

    item.dataset.id = colors[i];

    item.addEventListener("mouseenter", () => {
      item.style.background = "#f3f3f3";
    });
    item.addEventListener("mouseleave", () => {
      item.style.background = "transparent";
    });

    dropdown.appendChild(item);
  });

  // toggle dropdown
  let open = false;
  wheel.addEventListener("click", (e) => {
    e.stopPropagation();
    open = !open;

    dropdown.style.opacity = open ? "1" : "0";
    dropdown.style.pointerEvents = open ? "auto" : "none";
    dropdown.style.transform = open
      ? "translateX(-50%) scale(1)"
      : "translateX(-50%) scale(0.95)";
  });

  // click outside closes
  document.addEventListener("click", () => {
    open = false;
    dropdown.style.opacity = "0";
    dropdown.style.pointerEvents = "none";
    dropdown.style.transform = "translateX(-50%) scale(0.95)";
  });

  // assemble
  wrapper.appendChild(wheel);
  wrapper.appendChild(dropdown);
  container.appendChild(wrapper);
}

export {createSDGWheel};