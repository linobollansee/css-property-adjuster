// List of font options
const fontOptions = [
    "Arial, sans-serif",
    "Arial Black, sans-serif",
    "Calibri, sans-serif",
    "Cambria, serif",
    "Candara, sans-serif",
    "Comic Sans MS, sans-serif",
    "Consolas, sans-serif",
    "Constantia, serif",
    "Corbel, sans-serif",
    "Courier New, monospace",
    "Franklin Gothic Medium, sans-serif",
    "Gabriola, sans-serif",
    "Georgia, serif",
    "Impact, sans-serif",
    "Lucida Console, monospace",
    "Lucida Sans Unicode, sans-serif",
    "Microsoft Sans Serif, sans-serif",
    "Palatino Linotype, serif",
    "Segoe Print, sans-serif",
    "Segoe Script, sans-serif",
    "Segoe UI, sans-serif",
    "Tahoma, sans-serif",
    "Times New Roman, serif",
    "Trebuchet MS, sans-serif",
    "Verdana, sans-serif",
    "Webdings, sans-serif",
    "Wingdings, sans-serif"
];

// Dropdown element for font family
const fontFamilyDropdown = document.getElementById('fontFamily');

// Function to populate the font family dropdown
function populateFontDropdown() {
    // Iterating through each font option in the fontOptions array
    fontOptions.forEach(fontOption => {
        // Creating a new option element for the dropdown
        const optionElement = document.createElement('option');

        // Setting the value attribute of the option to the font option
        optionElement.value = fontOption;

        // Setting the displayed text content of the option to the font name (extracted from the fontOption)
        optionElement.textContent = fontOption.split(',')[0];

        // Appending the created option element to the dropdown menu
        fontFamilyDropdown.appendChild(optionElement);
    });
}

// Call the function to populate the font family dropdown
populateFontDropdown();