// Nama pop-up sebelum masuk ke website
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

// Validasi form & tampilkan output
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
        <p>Date of Birth: ${dob}</p>
        <p>Gender: ${gender}</p>
        <p>Your Message: "${message}"</p>
    `;
});

// Banner slideshow
let indexBanner = 0;
showBanner();

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const listImage = document.getElementsByClassName("banner-img");
    if (indexBanner > listImage.length - 1) indexBanner = 0;

    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }
    listImage[indexBanner].style.display = "block";
}

setInterval(nextBanner, 5000);
