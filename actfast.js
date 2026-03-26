let currentStep = 0;

const steps = [{
        title: "Step 1: Stop Communication Immediately",
        content: "Stop replying to the scammer. Do NOT send more money or information. Take screenshots of all messages, receipts, and websites.",
        extra: ""
    },
    {
        title: "Step 2: Contact Your Bank",
        content: "Select your bank below and call them immediately to freeze your account.",
        extra: `
      <select id="bankSelect" onchange="showHotline()">
        <option value="">-- Select Your Bank --</option>
        <option value="maybank">Maybank</option>
        <option value="cimb">CIMB</option>
        <option value="public">Public Bank</option>
        <option value="rhb">RHB Bank</option>
        <option value="hongleong">Hong Leong Bank</option>
        <option value="ambank">Ambank</option>
        <option value="bankislam">Bank Islam</option>
        <option value="standardchartered">Standard Chartered</option>
      </select>

      <div id="hotlineBox"></div>
    `
    },
    {
        title: "Step 3: Contact NSRC",
        content: "Call the National Scam Response Centre immediately within 24 hours.",
        extra: `
      <div class="hotline">
        📞 Hotline: 997 <br>
        ⏰ 8am – 8pm daily
      </div>
    `
    },
    {
        title: "Step 4: Secure Your Accounts",
        content: "Change all your passwords and enable two-factor authentication for your bank, email, and social media.",
        extra: ""
    },
    {
        title: "Step 5: Lodge Police Report",
        content: "Go to the nearest police station or submit an online report. Bring all your evidence.",
        extra: `
      <div class="checklist">
        <p>Please confirm you have brought:</p>
        <label><input type="checkbox" id="docMyKad" onchange="updateDocumentChecklist()"> MyKad (IC)<span class="checkmark"></span></label><br>
        <label><input type="checkbox" id="docProof" onchange="updateDocumentChecklist()"> Proof of transaction<span class="checkmark"></span></label><br>
        <label><input type="checkbox" id="docChat" onchange="updateDocumentChecklist()"> Chat/message records<span class="checkmark"></span></label>
      </div>
    `
    }
];

function loadStep() {
    const step = steps[currentStep];

    document.getElementById("stepTitle").innerText = step.title;
    document.getElementById("stepContent").innerText = step.content;
    document.getElementById("extraContent").innerHTML = step.extra;
    document.getElementById("doneCheck").checked = false;

    updateProgress();
    updateCallButton();
}

/* Progress Bar */
function updateProgress() {
    let progress = (currentStep / steps.length) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}

/* CALL BUTTON */
function updateCallButton() {
    const callBtn = document.getElementById("callBtn");
    callBtn.style.display = "none";

    // Step 2: Bank
    if (currentStep === 1) {
        const bank = document.getElementById("bankSelect") ? document.getElementById("bankSelect").value : "";

        if (bank) {
            const numbers = {
                maybank: "0358914744",
                cimb: "0362047788",
                public: "0321763555",
                rhb: "0392068118",
                hongleong: "0376268899",
                ambank: "0321788888",
                bankislam: "0326990900",
                standardchartered: "1300888888"
            };

            callBtn.href = "tel:" + numbers[bank];
            callBtn.style.display = "block";
        }
    }

    // Step 3: NSRC
    if (currentStep === 2) {
        callBtn.href = "tel:997";
        callBtn.style.display = "block";
    }
}

/* Bank Hotline */
function showHotline() {
    const bank = document.getElementById("bankSelect").value;
    const box = document.getElementById("hotlineBox");

    const hotlines = {
        maybank: "📞 Maybank Hotline: 03-5891 4744",
        cimb: "📞 CIMB Hotline: 03-6204 7788",
        public: "📞 Public Bank Hotline: 03-2177 3555",
        rhb: "📞 RHB Hotline: 03-9206 8118",
        hongleong: "📞 Hong Leong Hotline: 03-7626 8899",
        ambank: "📞 Ambank Hotline: 03-2178 8888",
        bankislam: "📞 Bank Islam Hotline: 03-2690 0900",
        standardchartered: "📞 Standard Chartered Hotline: 1300-888-888"
    };

    box.innerHTML = bank ? `<div class="hotline">${hotlines[bank]}</div>` : "";

    updateCallButton();
}

function updateDocumentChecklist() {
    const allChecked = ["docMyKad", "docProof", "docChat"].every(id => {
        const el = document.getElementById(id);
        return el ? el.checked : false;
    });

    // mark global done checkbox only on step 5
    if (currentStep === 4) {
        document.getElementById("doneCheck").checked = allChecked;
    }
}

/* Next Step */
function nextStep() {
    const checked = document.getElementById("doneCheck").checked;

    if (!checked) {
        alert("Please complete this step before continuing.");
        return;
    }

    currentStep++;

    if (currentStep < steps.length) {
        loadStep();
    } else {
        document.getElementById("progressBar").style.width = "100%";
        document.getElementById("stepBox").innerHTML = `
      <h2>✅ You're Done!</h2>
      <p>You have completed all the important steps. Stay safe and alert!</p>
    `;
    }
}

/* Start */
loadStep();

const homeScreen = document.querySelector('.logo')

homeScreen.addEventListener('click', () => {
  window.location.href = "index.html";
});