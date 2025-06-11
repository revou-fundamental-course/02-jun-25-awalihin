
// validasi form
function validateForm() {
    const name = document.getElementById('name-input').value;
    const dob = document.getElementById('dob-input').value;

    if (!name || !dob) 
    // Ketika Value Kosong
    {alert('Please fill in both your name and date of birth.');
    } 
    // Ketika Value Tidak Kosong
    else {
      alert(`Hai, ${name}! Tanggal lahir kamu adalah ${dob}.`);
    }
  }

function validateForm() {
    const name = document.getElementById('name-input').value.trim();
    const dob = document.getElementById('dob-input').value;
    const message = document.getElementById('message-input').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !dob || !gender || !message) 
    // Ketika Value Kosong
     {
      alert("All fields are required!");
      return;
    }
  }

let indexBanner = 0;

showBanner();

/// Increment index
function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    // DOM Banner
    const listImage = document.getElementsByClassName("banner-img");

    // Reset index
    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }

    /// Looping to hide all banner
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexBanner].style.display = "block";
}

setInterval(nextBanner, 5000);

// Memasukkan nama sebelum masuk website
function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name === '') {
      alert('Nama tidak boleh kosong!');
      return;
    }

    document.getElementById('greeting').textContent = `Hi ${name}, welcome to Motor Stylish!`;
    document.getElementById('popup').style.display = 'none';
    document.getElementById('main-content').classList.remove('blur');
  }
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById('name-input').value.trim();
    const dob = document.getElementById('dob-input').value;
    const message = document.getElementById('message-input').value.trim();
    const genderEl = document.querySelector('input[name="gender"]:checked');

    if (!name || !dob || !genderEl || !message) {
      alert("All fields are required!");
      return;
    }

    const gender = genderEl.value;

    document.getElementById('output').innerHTML = `
      <p><strong>Hai, ${name}!</strong></p>
      <p>Date Of Birth: ${dob}</p>
      <p>Gender: ${gender}</p>
      <p>Ur Message: "${message}"</p>
    `;
  });