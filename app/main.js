document.addEventListener("DOMContentLoaded", () => {
    const showLoginFormButton = document.getElementById("conta");
    const homepageContent = document.getElementById("homepageContent");
    const loginForm = document.getElementById("loginForm");

    showLoginFormButton.addEventListener("click", function(event) {
        event.preventDefault()
        homepageContent.style.display = "none";
        loginForm.style.display = "block";
    });
});



