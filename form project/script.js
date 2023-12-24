document.getElementById("validationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
  
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("departureTimeError").textContent = "";
    document.getElementById("numTicketsError").textContent = "";
  

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var departureTime = document.getElementById("departureTime").value.trim();
    var numTickets = document.getElementById("numTickets").value;
  

    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
    } else if (name.length > 30) {
      document.getElementById("nameError").textContent = "Name cannot exceed 30 characters.";
    }
  

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
    }
  

    var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (departureTime === "") {
      document.getElementById("departureTimeError").textContent = "Departure time is required.";
    } else if (!timeRegex.test(departureTime)) {
      document.getElementById("departureTimeError").textContent = "Invalid time format. Please use 24-hour format (e.g., 13:45).";
    }
  
 
    if (numTickets === "") {
      document.getElementById("numTicketsError").textContent = "Number of tickets is required.";
    } else if (numTickets < 1 || numTickets > 10 || !Number.isInteger(+numTickets)) {
      document.getElementById("numTicketsError").textContent = "Invalid number of tickets. Please enter an integer between 1 and 10.";
    }}