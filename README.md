# CSS Property Adjuster

CSS Property Adjuster is a website and tool to facilitate web styling and design. Its functionality lies in its ability to seamlessly adjust CSS properties with a user-friendly interface, providing an unparalleled experience. The tool's intuitive design allows users to effortlessly manipulate various CSS properties with instantaneous feedback, which not only accelerates website development but also enhances the precision of design decisions.

![Preview](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-preview.png)

## Features

### Existing Features

- The Header

  - At the top of the page, there is the header showcasing the name of the website and tool:
  CSS Property Adjuster. The deliberately chosen Arial font ensures simplicity and reliability, minimizing potential confusion while engaging with the input-controls designed to style the adjustable element on the page.

  ![Header](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-header.png)

- The Input-controls

  - The main content of the page features input-controls enabling to customize the following CSS properties: width, height, margin, padding, border-radius, box-shadow, background, font-family, color, font-size, text-align, text-shadow, outline, letter-spacing, line-height, opacity, text-decoration, font-weight, border-width, border-style, border-color, visibility, overflow, and cursor.

  ![Input-controls](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-input-controls.png)

- The Adjustable-element

  - The adjustable-element undergoes real-time updates and is automatically styled based on the current configuration of the input-controls.

  ![Adjustable-element](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-adjustable-element.png)

- The CSS code

  - A designated box contains real-time updated CSS code corresponding to the configurations of the input-controls.

  ![CSS-box](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-css-box.png)

- The footer
  
  - Within the footer, there is a checkbox for alphabetically sorting the CSS code and another button for copying the generated CSS code to the clipboard. Upon clicking the "Copy to Clipboard" button, a JavaScript alert is triggered to confirm the action has occured.

  ![Footer](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-footer.png)

### Features Left to Implement

- The prospect of incorporating supplementary controls presents an exciting opportunity to enhance the functionality of the CSS Property Adjuster, providing additional features to fine-tune the styling of the adjustable element. This potential integration holds the promise of a more versatile and comprehensive toolset, enabling users to exert greater precision and creativity.

- As innovative technology continues to advance, the introduction of new devices with custom resolutions creates new opportunities for the website's responsive design. The emergence of these devices prompts the refinement of media queries, enabling more precise and effective tailoring of content for diverse screen sizes and resolutions.

## Testing

### Google Lighthouse

Google Lighthouse assessed this project based on its performance, accessibility, adherence to best practices, and SEO.

![Google Lighthouse](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-lighthouse.png)

### Manual Testing

- [x] Testing Width slider control
- [x] Testing Height slider control
- [x] Testing Margin slider control
- [x] Testing Padding slider control
- [x] Testing Border Radius slider control
- [x] Testing Box Shadow slider control
- [x] Testing Background color picker
- [x] Testing Font Family dropdown menu
- [x] Testing Text Color color picker
- [x] Testing Font size slider control
- [x] Testing Text Align dropdown menu
- [x] Testing Text Shadow slider control
- [x] Testing Outline slider control
- [x] Testing Outline Color color picker
- [x] Testing Letter Spacing slider control
- [x] Testing Line Height slider control
- [x] Testing Opacity Slider control
- [x] Testing Text Decoration dropdown menu
- [x] Testing Font Weight dropdown menu
- [x] Testing Border Width slider control
- [x] Testing Border Style dropdown menu
- [x] Testing Border Color color picker
- [x] Testing Visibility dropdown menu
- [x] Testing Overflow dropdown menu
- [x] Testing Cursor dropdown menu

- [x] Testing Sort Alphabetically checkbox
- [x] Testing Copy to Clipboard button

### Validator Testing

- HTML
  - No errors were found with the W3C HTML Validator [https://validator.w3.org/](https://validator.w3.org/)

  ![W3C HTML Validator](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-html-validator.png)

- CSS
  - No errors were found with the W3C CSS Validator (Jigsaw) [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

  ![W3C CSS Validator (Jigsaw)](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-css-validator.png)

- Javascript
  - No errors were found with the JSHint JavaScript Validator [https://jshint.com/](https://jshint.com/)

  ![JSHint JavaScript Validator](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-js-validator.png)

### Bugs

- Initially, the oversight of not disabling user selection in CSS resulted in a frustrating user experience, as the input controls were susceptible to malfunctioning and frequently accidently selected instead of being precisely controlled. This issue was promptly addressed and successfully rectified.

![Selection bug](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-selection-bug.png)

- The employment of three-character hexadecimal values in shorthand notation for the input-controls results in HTML validator errors, requiring an extension to six characters. This change has also been implemented.

![Shorthand bug](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-shorthand-bug.png)

- In the process of developing the JavaScript code for the alphabetical ordering checkbox, an effort was made to introduce a new independent function. Unfortunately, this resulted in various features becoming unresponsive. Subsequently, the new function was removed, and the existing function was updated with if-else code.

### Unfixed Bugs

- Since all known bugs have been resolved, it appears that none remain. In theory, since the behavior of the website could vary across different browsers (even outdated versions), it would still be possible to downgrade to lower functionality coding methods for even higher website compatibility.

## Deployment

- Deployment to GitHub Pages was completed for the website. The deployment process involves the following steps:
  - Within the GitHub repository, access the Settings tab.
  - Choose the Pages tab, set the "main branch" from the dropdown menu in the source section.
  - After selecting the "main branch", the page will automatically refresh, displaying a detailed ribbon to confirm the successful deployment.

You can access the live link at this location. - [https://linobollansee.github.io/css-property-adjuster/](https://linobollansee.github.io/css-property-adjuster/)

## Credits

### Content

- NotePad++ emerged as an exceptionally efficient tool in this project, offering precision and speed. Its user-friendly interface and lightweight design allowed to seamlessly navigate and manipulate project code, enhancing overall productivity.

- Codeanywhere's online integrated development environment (IDE) was utilized for indentation formatting, composing commit messages, and pushing code and files to the Github repository. 

- The Generative Pre-trained Transformer (GPT) model from ChatGPT 3.5 contributed to the following:

  - ChatGPT assisted in building the first version of the input-controls and recommending optimal default values to enhance the interface presentation.

  - ChatGPT contributed to the improvement of the JavaScript functionality responsible for populating the font family dropdown from an array and optimizing the event listeners. In order to get the best results, many specially-edited versions of the source code were inputted to ChatGPT, thereby increasing the chances of obtaining valuable responses. From the possible solutions, arrow functions were determined to be the best choice, aligning with modern coding practices. 
  
  - IMPORTANT: Mentor approval was sought to ensure that the code syntax used in this project was permissible. As a precautionary measure, additional comments were incorporated into the source code to demonstrate adequate comprehension.

  - ChatGPT contributed to the HTML, CSS, and JavaScript code comments in this project. Code comments are considered completely safe, as they do not pose any risk of disrupting the functioning code. It is advised to give variables and values meaningful names initially, as this is essential for generating high-quality comments from ChatGPT. Comments were further manually edited in an effort to make them as descriptive and clear as possible.

  - ChatGPT contributed to the composition of the README.md file by transforming sections of written text into a third-person perspective, aiming to achieve a refined and professional style. Additionally, incorporated minor details aligned with the subject's theme to enhance overall clarity.

### Media

- Favicons used on this website were generated at [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)

- In this project, a deliberate decision was made to minimize the use of media, considering the primary focus on generating many different CSS styles within an adjustable element through JavaScript. The strategic exclusion of extensive media elements stems from a desire to eliminate potential sources of confusion for users. By eschewing unnecessary media, the project aims to streamline the user experience, ensuring that attention remains squarely on the core objective.

## Other General Project Advice

- During the development of a new feature, adopting an incremental and iterative approach proves advantageous for facilitating smoother development and simplifying the debugging process. Introducing too many features simultaneously increases the complexity too quickly, making it considerably more challenging to trace issues when something doesn't work as expected.

- Creating an ingenious JavaScript function or building an extensive JavaScript array demands a significant investment of time. It becomes crucial to protect them through the establishment of backups. Given the vulnerability of files to accidental overwriting during intense development, it underscores the necessity of maintaining multiple copies as a precautionary measure.

- Employing consistent comments in your code that closely mirror your commit messages is a commendable practice. This alignment facilitates a streamlined development process, allowing you to swiftly locate specific code sections by simply utilizing the CTRL-F search function. The parallel structure of comments and commit messages enhances code readability and aids in maintaining a cohesive and easily navigable codebase.