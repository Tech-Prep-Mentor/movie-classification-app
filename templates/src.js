const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {  //when form is submitted, the event is happened
    event.preventDefault(); // Prevent the form from actually submitting
    window.location.href = "dashboard.html"; // Redirect to dashboard
});

