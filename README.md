# CSS Property Adjuster

CSS Property Adjuster is a website and tool to facilitate web styling and design. Its functionality lies in its ability to seamlessly adjust CSS properties with a user-friendly interface, providing an unparalleled experience. The tool's intuitive design allows users to effortlessly manipulate various CSS properties with instantaneous feedback, which not only accelerates website development but also enhances the precision of design decisions.

## Features

### Existing Features

- The Header

  - At the top of the page, there is the header showcasing the name of the website and tool:
  CSS Property Adjuster. The deliberately chosen Arial font ensures simplicity and reliability, minimizing potential confusion while engaging with the input-controls designed to style the adjustable element on the page.

- The Input-controls

  - The main content of the page features input-controls enabling to customize the following CSS properties: width, height, margin, padding, border-radius, box-shadow, background, font-family, color, font-size, text-align, text-shadow, outline, letter-spacing, line-height, opacity, text-decoration, font-weight, border-width, border-style, border-color, visibility, overflow, and cursor.

- The Adjustable-element

  - The adjustable-element undergoes real-time updates and is automatically styled based on the current configuration of the input-controls.

- The CSS code

  - A designated box contains real-time updated CSS code corresponding to the configurations of the input-controls.

- The footer
  
  - Within the footer, there is a checkbox for alphabetically sorting the CSS code and another button for copying the generated CSS code to the clipboard. Upon clicking the "Copy to Clipboard" button, a JavaScript alert is triggered to confirm the action has occured.

### Features Left to Implement

- The prospect of incorporating supplementary controls presents an exciting opportunity to enhance the functionality of the CSS Property Adjuster, providing additional features to fine-tune the styling of the adjustable element. This potential integration holds the promise of a more versatile and comprehensive toolset, enabling users to exert greater precision and creativity.

- As innovative technology continues to advance, the introduction of new devices with custom resolutions creates new opportunities for the website's responsive design. The emergence of these devices prompts the refinement of media queries, enabling more precise and effective tailoring of content for diverse screen sizes and resolutions.

## Testing

Google Lighthouse assessed this project based on its performance, accessibility, adherence to best practices, and SEO.

![Google Lighthouse](https://linobollansee.github.io/css-property-adjuster/readme/media/css-property-adjuster-lighthouse.png)

### Validator Testing

### Bugs

- Initially, the oversight of not disabling user selection in CSS resulted in a frustrating user experience, as the input controls were susceptible to malfunctioning and frequently accidently selected instead of being precisely controlled. This issue was promptly addressed and successfully rectified.

- The employment of three-character hexadecimal values in shorthand notation for the input-controls results in HTML validator errors, requiring an extension to six characters. This change has also been implemented.

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

### Media

- Favicons used on this website were generated at [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)

- In this project, a deliberate decision was made to minimize the use of media, considering the primary focus on generating many different CSS styles within an adjustable element through JavaScript. The strategic exclusion of extensive media elements stems from a desire to eliminate potential sources of confusion for users. By eschewing unnecessary media, the project aims to streamline the user experience, ensuring that attention remains squarely on the core objective.

## Other General Project Advice

- During the development of a new feature, adopting an incremental and iterative approach proves advantageous for facilitating smoother development and simplifying the debugging process. Introducing too many features simultaneously increases the complexity too quickly, making it considerably more challenging to trace issues when something doesn't work as expected.

- Creating an ingenious JavaScript function or building an extensive JavaScript array demands a significant investment of time. It becomes crucial to protect them through the establishment of backups. Given the vulnerability of files to accidental overwriting during intense development, it underscores the necessity of maintaining multiple copies as a precautionary measure.

- Employing consistent comments in your code that closely mirror your commit messages is a commendable practice. This alignment facilitates a streamlined development process, allowing you to swiftly locate specific code sections by simply utilizing the CTRL-F search function. The parallel structure of comments and commit messages enhances code readability and aids in maintaining a cohesive and easily navigable codebase.