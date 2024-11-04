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