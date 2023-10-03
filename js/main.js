
document.addEventListener("DOMContentLoaded", function() {
    const showButton = document.getElementById("menu");
    const hideButton = document.getElementById("overlay-x");
    const panel = document.getElementById("overlay-menu");

    // Function to show the panel
    function showPanel() {
        panel.style.display = "block";
		document.body.style.overflow = "hidden"; 
    }

    // Function to hide the panel
    function hidePanel() {
        panel.style.display = "none";
		document.body.style.overflow = "auto"; 
    }

    // Event listener for the show button
    showButton.addEventListener("click", showPanel);

    // Event listener for the hide button
    hideButton.addEventListener("click", hidePanel);

    // Get references to all the buttons by their class name
    const buttons = document.querySelectorAll('.menu-box');

    // Function to set the body's overflow property to "auto"
    function setBodyOverflowAuto() {
        document.body.style.overflow = 'auto';
    }

    // Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', hidePanel);
    });
});
