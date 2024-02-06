/*
Credit Acknowledgements:

This JavaScript code benefited significantly from the valuable content
available in the Code Institute's JavaScript Essentials lessons.

The author used support provided by ChatGPT 3.5, extending beyond the realm of
JavaScript Essentials. This assistance primarily focused on code modernization,
incorporating arrow functions, and enhancing clarity by eliminating the function
keyword. These refinements were specifically applied to the functions
responsible for dynamically populating the font family dropdown and optimizing
event listeners for input controls.

Furthermore, the script development was enriched by referencing JavaScript
resources on w3schools.com, particularly for implementing a Clipboard Copy
function.

Special thanks to Mentor Dick Vlaanderen for suggesting the utilization of font
arrays in JavaScript instead of listing them as options directly in the HTML page.
Additionally, the mentor played a crucial role in brainstorming new feature
ideas, all of which were successfully implemented by the author. The last feature
to be added in JavaScript was an alphabetical sorting checkbox. 
*/

// List of font options
const fontOptions = [
    "Arial, sans-serif",
    "Calibri, sans-serif",
    "Cambria, serif",
    "Candara, sans-serif",
    "Consolas, sans-serif",
    "Constantia, serif",
    "Corbel, sans-serif",
    "Gabriola, sans-serif",
    "Georgia, serif",
    "Impact, sans-serif",
    "Tahoma, sans-serif",
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

    // Sort alphabetically if the checkbox is checked
    const sortAlphabetically = document.getElementById('sortCheckbox').checked;

    // Generate CSS code string
    let cssCode;
    if (sortAlphabetically) {
        cssCode = `background: ${background};
            border-color: ${borderColor};
            border-radius: ${borderRadius};
            border-style: ${borderStyle};
            border-width: ${borderWidth};
            box-shadow: ${boxShadow};
            color: ${color};
            cursor: ${cursor};
            font-family: ${fontFamily};
            font-size: ${fontSize};
            font-weight: ${fontWeight};
            height: ${height};
            letter-spacing: ${letterSpacing};
            line-height: ${lineHeight};
            margin: ${margin};
            opacity: ${opacity};
            outline: ${outline} solid ${outlineColor};
            overflow: ${overflow};
            padding: ${padding};
            text-align: ${textAlign};
            text-decoration: ${textDecoration};
            text-shadow: ${textShadow};
            visibility: ${visibility};
            width: ${width};
        `;
    } else {
        cssCode = `width: ${width};
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
            cursor: ${cursor};
        `;
    }

    // Display the generated CSS code
    cssCodeElement.innerText = cssCode;
}

// List of input controls to track for changes
const sliders = document.querySelectorAll('input[type="range"], input[type="color"], select');

/* This arrow function employs the Math.random() function to generate a
pseudorandom floating-point number. It then scales this value by multiplying it
with 16777215, which covers the complete range of possible hexadecimal color
values (0x000000 to 0xFFFFFF). The resultant number is converted to a
hexadecimal string representation using the .toString(16) method. If necessary,
leading zeros are added to ensure the string consists of six hexadecimal
digits. Finally, the '#' character is prepended to signify the resultant string
as a valid hexadecimal color code.
*/
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

function randomizeInputs() {
    // Set random width between 50 and 500 pixels (increments of 1)
    document.getElementById('width').value = Math.floor(Math.random() * 451) + 50;

    // Set random height between 50 and 300 pixels (increments of 1)
    document.getElementById('height').value = Math.floor(Math.random() * 251) + 50;

    // Set random margin between 0 and 50 pixels (increments of 1)
    document.getElementById('margin').value = Math.floor(Math.random() * 51);

    // Set random padding between 0 and 30 pixels (increments of 1)
    document.getElementById('padding').value = Math.floor(Math.random() * 31);

    // Set random border radius between 0 and 50 pixels (increments of 1)
    document.getElementById('borderRadius').value = Math.floor(Math.random() * 51);

    // Set random box shadow between 0 and 10 pixels (increments of 1)
    document.getElementById('boxShadow').value = Math.floor(Math.random() * 11);

    // Set random background color (no fixed increments)
    document.getElementById('background').value = getRandomColor();

    // Set random font family from available options (increments of 1)
    document.getElementById('fontFamily').selectedIndex = Math.floor(Math.random() * fontOptions.length);

    // Set random text color (no fixed increments)
    document.getElementById('color').value = getRandomColor();

    // Set random font size between 10 and 50 pixels (increments of 1)
    document.getElementById('fontSize').value = Math.floor(Math.random() * 41) + 10;

    // Set random text alignment (left, center, right) (no fixed increments)
    document.getElementById('textAlign').value = ['left', 'center', 'right'][Math.floor(Math.random() * 3)];

    // Set random text shadow between 0 and 5 pixels (increments of 0.1)
    document.getElementById('textShadow').value = (Math.floor(Math.random() * 51) / 10);

    // Set random outline width between 0 and 5 pixels (increments of 1)
    document.getElementById('outline').value = Math.floor(Math.random() * 6);

    // Set random outline color (no fixed increments)
    document.getElementById('outlineColor').value = getRandomColor();

    // Set random letter spacing between -2 and 5 pixels (increments of 1)
    document.getElementById('letterSpacing').value = Math.floor(Math.random() * 8) - 2;

    // Set random line height between 1 and 2.0 (increments of 0.1)
    document.getElementById('lineHeight').value = Math.floor(Math.random() * 11) / 10 + 1;

    // Set random opacity between 0.1 and 1.0 (increments of 0.1)
    document.getElementById('opacity').value = (Math.floor(Math.random() * 10) + 1) / 10;

    // Set random text decoration (none, underline, overline, line-through) (no fixed increments)
    document.getElementById('textDecoration').value = ['none', 'underline', 'overline', 'line-through'][Math.floor(Math.random() * 4)];

    // Set random font weight (normal, bold) (no fixed increments)
    document.getElementById('fontWeight').value = ['normal', 'bold'][Math.floor(Math.random() * 2)];

    // Set random line width between 0 and 10 pixels (increments of 1)
    document.getElementById('lineWidth').value = Math.floor(Math.random() * 11);

    // Set random line style (solid, dashed, dotted, double) (no fixed increments)
    document.getElementById('lineStyle').value = ['solid', 'dashed', 'dotted', 'double'][Math.floor(Math.random() * 4)];

    // Set random border color (no fixed increments)
    document.getElementById('borderColor').value = getRandomColor();

    // Set visibility to 'visible' (no fixed increments)
    document.getElementById('visibility').value = 'visible';

    // Set random overflow (visible, hidden, scroll) (no fixed increments)
    document.getElementById('overflow').value = ['visible', 'hidden', 'scroll'][Math.floor(Math.random() * 3)];

    // Set random cursor style (no fixed increments)
    document.getElementById('cursor').value = ['auto', 'cell', 'col-resize', 'crosshair', 'pointer', 'move', 'not-allowed'][Math.floor(Math.random() * 7)];

    // Trigger the updateCSS function to apply the random values
    updateCSS();
}

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