function increaseProgressBar() {
    var progressBar = document.querySelector('.progress-bar');
    var currentWidth = progressBar.offsetWidth;
    var newWidth = currentWidth + 100; 
    progressBar.style.width = newWidth + 'px';
}
// Function to add input boxes
function addInputBox() {
    var inputContainer = document.getElementById("friendInputs");
    var inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("class", "input-box");
    inputBox.setAttribute("placeholder", "Friend's Name");
    inputContainer.appendChild(inputBox);
    inputContainer.appendChild(document.createElement("br"));

    // Move the add button to the bottom of the input boxes
    var addButton = document.getElementById("addMoreNames");
    inputContainer.appendChild(addButton);
}

// Event listener to add input box when the button is clicked
document.getElementById("addMoreNames").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default button behavior
    addInputBox(); // Call the function to add input box
});

