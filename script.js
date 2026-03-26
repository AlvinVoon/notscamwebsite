const data = [
  {title:"Phone Scams",desc:"Imposters pretend to be authorities demanding payment.",img:"https://cdn-icons-png.flaticon.com/512/1001/1001371.png"},
  {title:"Malware Scams",desc:"Downloading unsafe apps infects your device.",img:"https://cdn-icons-png.flaticon.com/512/4245/4245906.png",badge:".APK"},
  {title:"Job Scams",desc:"Offers that are too good to be true.",img:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",badge:"JOB OFFER"},
  {title:"Phishing Scams",desc:"Fake links steal your personal data.",img:"https://cdn-icons-png.flaticon.com/512/565/565547.png"},
  {title:"Mule Account Scams",desc:"Using your bank account for illegal transfers.",img:"https://cdn-icons-png.flaticon.com/512/3062/3062634.png"},
  {title:"e-Commerce Scams",desc:"Items never arrive after payment.",img:"https://cdn-icons-png.flaticon.com/512/891/891462.png"},
  {title:"Investment Scams",desc:"Fake schemes promising high returns.",img:"https://cdn-icons-png.flaticon.com/512/2920/2920263.png"},
  {title:"Cash Reward Scams",desc:"Fake rewards for personal info.",img:"https://cdn-icons-png.flaticon.com/512/2331/2331970.png",badge:"CASH BACK"},
  {title:"Loan Scams",desc:"Upfront payments for fake loans.",img:"https://cdn-icons-png.flaticon.com/512/3135/3135706.png"},
  {title:"Love Scam",desc:"Fake relationships to extract money.",img:"https://cdn-icons-png.flaticon.com/512/1077/1077035.png"},
  {title:"QR Scams",desc:"Malicious QR codes steal data.",img:"https://cdn-icons-png.flaticon.com/512/159/159469.png",badge:"SCAN"}
];

const grid = document.getElementById("grid");

data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-top">
      ${item.badge ? `<div class="badge">${item.badge}</div>` : ""}
      <img src="${item.img}" />
    </div>
    <div class="card-body">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
    <div class="arrow">›</div>
  `;

  card.onclick = () => alert(item.title);

  grid.appendChild(card);
});