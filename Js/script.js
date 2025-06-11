console.log("java script is running")

  function validateForm() {
    const name = document.getElementById('name-input').value;
    const dob = document.getElementById('dob-input').value;

    if (!name || !dob) {
      alert('Please fill in both your name and date of birth.');
    } else {
      alert(`Hai, ${name}! Tanggal lahir kamu adalah ${dob}.`);
    }
  }

function validateForm() {
    const name = document.getElementById('name-input').value.trim();
    const dob = document.getElementById('dob-input').value;
    const message = document.getElementById('message-input').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !dob || !gender || !message) {
      alert("All fields are required!");
      return;
    }
  }