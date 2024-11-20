document.addEventListener('DOMContentLoaded', (event) => {
  const formControls = document.querySelectorAll('.form-control');

  formControls.forEach(control => {
      control.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
              event.preventDefault(); // Prevent the default form submission
              // You can add any additional logic here, e.g., form validation
              console.log('Enter key pressed in form control');
          }
      });
  });
});

function submitForm(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        const form = event.target.closest('form'); // Find the closest form element
        if (form) {
            form.submit(); // Submit the form
        }
    }
}

function toggleProfileEditInputs() { 
    const input1 = document.getElementById('first_name');
    const input2 = document.getElementById('last_name');
    const input3 = document.getElementById('email');
    const input4 = document.getElementById('phone');
    const input5 = document.getElementById('password');
    const input6 = document.getElementById('username');

    input1.disabled = !input1.disabled;
    input2.disabled = !input2.disabled;
    input3.disabled = !input3.disabled;
    input4.disabled = !input4.disabled;
    input5.disabled = !input5.disabled;
    input6.disabled = !input6.disabled;

    if (saveButton.style.visibility === "hidden") { 
        saveButton.style.visibility = "visible"; 
    } else { 
        saveButton.style.visibility = "hidden"; 
    }
}

function send() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic ");

  var messageInput = document.getElementById('message');
  var messageContent = messageInput.value;

  var formdata = new FormData();
  formdata.append("To", "+14077147158");
  formdata.append("From", "+18445591471");
  formdata.append("Body", messageContent);

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
  };

  fetch("https://api.twilio.com/2010-04-01/Accounts/??/Messages.json", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  // Clear the textarea after sending the message
  messageInput.value = "";
}