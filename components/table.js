var table = document.getElementById("table1");
var url = "https://api.twilio.com/2010-04-01/Accounts/??/Messages.json";

async function loadTable(url, table) {
  var tableHead = table.querySelector("thead");
  var tableBody = table.querySelector("tbody");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic ");

  var formdata = new FormData();

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    var response = await fetch(url, requestOptions);
    var result = await response.json();

    // Clear existing table content
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";

    // Create table headers
    var headerRow = document.createElement("tr");
    var headers = ["Date", "Time", "To", "Body", "Status"];

    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);

    // Populate table rows with data
    result.messages.forEach(function(message) {
      var row = document.createElement("tr");

      var dateSent = new Date(message.date_sent);
      var formattedDate = dateSent.toLocaleDateString();
      var formattedTime = dateSent.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });

      var dateCell = document.createElement("td");
      dateCell.textContent = formattedDate;
      row.appendChild(dateCell);

      var timeCell = document.createElement("td");
      timeCell.textContent = formattedTime;
      row.appendChild(timeCell);

      var toCell = document.createElement("td");
      toCell.textContent = message.to;
      row.appendChild(toCell);

      var bodyCell = document.createElement("td");
      bodyCell.textContent = message.body;
      row.appendChild(bodyCell);

      var statusCell = document.createElement("td");
      statusCell.textContent = message.status;
      row.appendChild(statusCell);

      tableBody.appendChild(row);
    });

  } catch (error) {
    console.log('error', error);
  }
}

document.getElementById('table-button').addEventListener('click', function() {
    loadTable(url, table);
});

loadTable(url, table);
