document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "Nasy123" && password === "student-nf23") {
      window.location.href = "success.html";
    } else {
      alert("Username dan password salah. Coba login kembali.");
    }
  });