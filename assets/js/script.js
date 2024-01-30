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

// Element to be adjusted and code display area
const adjustableElement = document.getElementById('adjustableElement');
const cssCodeElement = document.getElementById('cssCode');

// Function to update CSS based on user input
function updateCSS() {
    // Fetch values from input controls
    const width = document.getElementById('width').value + 'px';
    const height = document.getElementById('height').value + 'px';
    const margin = document.getElementById('margin').value + 'px';
    const padding = document.getElementById('padding').value + 'px';
    const borderRadius = document.getElementById('borderRadius').value + 'px';
    const boxShadow = document.getElementById('boxShadow').value + 'px ' +
        document.getElementById('boxShadow').value + 'px ' +
        document.getElementById('boxShadow').value + 'px #888888';
    const background = document.getElementById('background').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const color = document.getElementById('color').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const textAlign = document.getElementById('textAlign').value;
    const textShadow = document.getElementById('textShadow').value + 'px ' +
        document.getElementById('textShadow').value + 'px ' +
        document.getElementById('textShadow').value + 'px #888888';

    const outline = document.getElementById('outline').value + 'px';
    const outlineColor = document.getElementById('outlineColor').value;
    const letterSpacing = document.getElementById('letterSpacing').value + 'px';
    const lineHeight = document.getElementById('lineHeight').value;
    const opacity = document.getElementById('opacity').value;
    const textDecoration = document.getElementById('textDecoration').value;
    const fontWeight = document.getElementById('fontWeight').value;

    const borderWidth = document.getElementById('lineWidth').value + 'px';
    const borderStyle = document.getElementById('lineStyle').value;
    const borderColor = document.getElementById('borderColor').value;
    const visibility = document.getElementById('visibility').value;
    const overflow = document.getElementById('overflow').value;
    const cursor = document.getElementById('cursor').value;

    // Apply styles to the adjustable element
    adjustableElement.style.width = width;
    adjustableElement.style.height = height;
    adjustableElement.style.margin = margin;
    adjustableElement.style.padding = padding;
    adjustableElement.style.borderRadius = borderRadius;
    adjustableElement.style.boxShadow = boxShadow;
    adjustableElement.style.background = background;
    adjustableElement.style.fontFamily = fontFamily;
    adjustableElement.style.color = color;
    adjustableElement.style.fontSize = fontSize;
    adjustableElement.style.textAlign = textAlign;
    adjustableElement.style.textShadow = textShadow;
    adjustableElement.style.outline = `${outline} solid ${outlineColor}`;
    adjustableElement.style.letterSpacing = letterSpacing;
    adjustableElement.style.lineHeight = lineHeight;
    adjustableElement.style.opacity = opacity;
    adjustableElement.style.textDecoration = textDecoration;
    adjustableElement.style.fontWeight = fontWeight;
    adjustableElement.style.borderWidth = borderWidth;
    adjustableElement.style.borderStyle = borderStyle;
    adjustableElement.style.borderColor = borderColor;
    adjustableElement.style.visibility = visibility;
    adjustableElement.style.overflow = overflow;
    adjustableElement.style.cursor = cursor;

    // Generate CSS code string
    const cssCode = `width: ${width};
        height: ${height};
        margin: ${margin};
        padding: ${padding};
        border-radius: ${borderRadius};
        box-shadow: ${boxShadow};
        background: ${background};
        font-family: ${fontFamily};
        color: ${color};
        font-size: ${fontSize};
        text-align: ${textAlign};
        text-shadow: ${textShadow};
        outline: ${outline} solid ${outlineColor};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        opacity: ${opacity};
        text-decoration: ${textDecoration};
        font-weight: ${fontWeight};
        border-width: ${borderWidth};
        border-style: ${borderStyle};
        border-color: ${borderColor};
        visibility: ${visibility};
        overflow: ${overflow};
        cursor: ${cursor};`;

    // Display the generated CSS code
    cssCodeElement.innerText = cssCode;
}

// List of input controls to track for changes
const sliders = document.querySelectorAll('input[type="range"], input[type="color"], select');

// Add event listeners to input controls for real-time updates
sliders.forEach(slider => {
    slider.addEventListener('input', updateCSS);
});

// Initial update to display default styles
updateCSS();

// Define a function named copyToClipboard
function copyToClipboard() {
    // Get the HTML element with the ID 'cssCode'
    const cssCode = document.getElementById('cssCode');

    // Use the Clipboard API to write the text content of 'cssCode' to the clipboard
    navigator.clipboard.writeText(cssCode.innerText);
    alert("The CSS code has been copied to the clipboard!");
}