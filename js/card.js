var myHeaders = new Headers();
myHeaders.append("clientId", );
myHeaders.append("Authorization",);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// Make the API call using fetch
fetch("https://api-na.myconnectwise.net/v4_6_release/apis/3.0/service/tickets?conditions=board/name=\"Help Desk\" AND status/name Not Contains \">closed\" AND status/name Not Contains \">Cancelled\" AND status/name Not Contains \"Off Board\" AND status/sort=4&orderBy=id asc&fields=id,summary,status,contact", requestOptions)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Initialize an object to store unique 'id' values as keys
    var uniqueIds = {};

    // Loop through the data to count unique 'id' values
    data.forEach(ticket => {
      uniqueIds[ticket.id] = true;
    });

    // Get the count of unique 'id' values
    var countTickets = Object.keys(uniqueIds).length;

    // Print the result
    console.log("Current number of tickets:", countTickets);
    document.getElementById('ticketCount').innerText = String(countTickets);
  })
  .catch(error => console.log('error', error));
