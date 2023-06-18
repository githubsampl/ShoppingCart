
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (email === "") {
      alert("Please enter your email.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password === "") {
      alert("Please enter a password.");
      return;
    }
  
    if (confirmPassword === "") {
      alert("Please confirm your password.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  
    alert("Sign up successful!");
  
    document.querySelector(".signup-form").reset();
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
