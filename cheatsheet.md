# HTML Essentials Cheat Sheet

## HTML Tables
- **Purpose:** Display tabular data.
- **Basic Syntax:**
  - `<table>`: Creates a table.
  - `<tr>`: Table row.
  - `<th>`: Table header cell.
  - `<td>`: Table data cell.
- **Attributes:**
  - `rowspan`: Allows a cell to span across multiple rows.
  - `colspan`: Allows a cell to span across multiple columns.

## Formatting Tags
- **Bold Text:** `<b>` or `<strong>` for important text.
- **Italic Text:** `<i>` or `<em>` for emphasized text.
- **Underline Text:** `<u>` (use sparingly, mainly for hyperlinks).
- **Strikethrough:** `<del>` for deleted text.
- **Inserted Text:** `<ins>` for added text.
- **Highlighted Text:** `<mark>` for marked or highlighted text.

## Lists
- **Unordered Lists (`<ul>`):** For a list without a specific order. Uses bullets.
- **Ordered Lists (`<ol>`):** For a list with a specific order. Uses numbers.
- **List Item (`<li>`):** Individual items in a list.
- **Nested Lists:** Lists within lists for hierarchical data.

## Paths
- **Absolute Paths:**
  - Specify the full URL to a resource.
  - Example: `"http://www.example.com/images/picture.jpg"`
- **Relative Paths:**
  - Specify the path to a resource relative to the current file.
  - Example: `"images/picture.jpg"` for a file in the same domain.
- **Usage:** Important for linking to internal and external web pages, images, or other resources.


## Naming in HTML
- **Don't Use Upper Case Letters:** Always use lower case to avoid confusion and ensure consistency.
- **Avoid White Spaces:** Use dashes (`-`) instead of spaces in names (e.g., `my-class`).
- **Don't Start with Numbers/Special Characters:** Names should begin with a letter.
- **Use Kebab-Case:** Separate words with dashes for readability (e.g., `my-class-name`).

---

## CSS Basics
- **What is CSS:** CSS stands for Cascading Style Sheets, used for styling HTML elements.

## 3 Ways to Implement CSS
1. **Inline CSS:** Directly within an HTML element's `style` attribute.
2. **Internal Style Sheet:** Within a `<style>` tag in the HTML document's `<head>`.
3. **External Style Sheet:** Linking an external `.css` file using the `<link>` tag.

## CSS Priority
- **Limit Use of `!important`:** Avoid unless absolutely necessary, as it overrides other styling rules.

## Selectors
- **Tag Selector:** Targets HTML elements directly (e.g., `p`, `div`).
- **Class Selector:** Targets elements with a specific class (e.g., `.my-class`).
- **ID Selector:** Targets an element with a specific ID (e.g., `#my-id`).

## Colors
- **Picking a Color:** Use the color picker tool from browser dev tools for precision.
- **Color Formats:**
  - **RGB:** Red, Green, Blue (e.g., `rgb(255, 99, 71)`).
  - **RGBA:** RGB with Alpha channel for opacity (e.g., `rgba(255, 99, 71, 0.5)`).
  - **HSL:** Hue, Saturation, Lightness (e.g., `hsl(9, 100%, 64%)`).
  - **HEX:** Hexadecimal color codes (e.g., `#FF6347`).
  - **Name:** Standard color names (e.g., `tomato`).

## Some CSS Properties
- **background-color:** Sets the background color of an element.
- **border-radius:** Defines the radius of an element's corners.
- **margin:** Sets the space around elements.

---

## CSS: Floats and Clearing
- **`float`**: Allows an element to be pushed to the left or right, letting other elements flow around it.
- **`clear`**: Clears floats on the left, right, or both sides of an element.

## CSS: Padding vs. Margin
- **`padding`**: Space between an element's border and its content. Does not collapse.
- **`margin`**: Space between two elements, measured from borders outward. Can collapse.

## CSS: Backgrounds
- **Gradients**: Create a gradient background with `linear-gradient` or `radial-gradient`.
- **Size and Repeat**: Control the scaling and repetition of the background image with `background-size` and `background-repeat`.
- **Position**: Specify the starting position of the background image with `background-position`.
- **Shorthand**: Combine multiple background properties with the `background` shorthand.
- **Attachment**: Set the background as fixed relative to the viewport with `background-attachment`.

## CSS: Box-Sizing
- **`border-box`**: Width and height include padding and border.
- **`content-box`**: Width and height apply only to the content.

## CSS: Display Property
- **`block`**: Element takes up the full width, regardless of content.
- **`inline`**: Element takes up only as much width as its content.
- **`inline-block`**: Elements flow like inline elements but retain block features.

## CSS: Viewport Units
- **`vw` (viewport width)**: 1% of the viewport's width.
- **`vh` (viewport height)**: 1% of the viewport's height.

## Git: Stash Command
- **`git stash`**: Temporarily shelves changes made to your working copy.

---

## Icons in Web Design
- Icons can be added as:
  - **Images**: Standard image files like PNG or JPG.
  - **SVG**: Scalable Vector Graphics for high-quality, scalable icons.
  - **External Icon Libraries**: Utilize libraries like FontAwesome for a wide range of icons.

## CSS Flexbox
- **`display: flex;`**: Establishes a flex container.
- **`flex-wrap: wrap | nowrap;`**: Controls whether the flex items are forced onto one line or can wrap onto multiple lines.
- **`flex-direction: row | row-reverse | column | column-reverse;`**: Defines the direction flex items are placed in the flex container.
- **`gap: <unit>;`**: Sets the gap between flex items.
- **`justify-content: ...;`**: Aligns flex items along the main axis (horizontal by default).
- **`align-items: ...;`**: Aligns flex items along the cross axis (vertical by default).

### Note on Flex Containers
- A flex container can also be a flex item within another flex container (nested flex).

## Flex Item Properties
- **`flex-shrink`**: Defines the ratio of how much the flex item will shrink relative to the rest of the flex items.
- **`flex-grow`**: Defines the ratio of how much the flex item will grow relative to the rest of the flex items.
- **`flex-basis`**: Specifies the initial length of a flex item.
- **`order`**: Controls the order in which a flex item appears in the flex container.
- **`align-self`**: Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.
- **`flex`**: A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` combined.

# JavaScript DOM Cheat Sheet

## Understanding the DOM
- **DOM:** Document Object Model, a tree-like structure that represents the webpage in the browser.
- **Tree Structure:** Every element is a node and can be a parent, child, or sibling to another node.

## Selecting Elements
- **getElementById:** Selects a single element by its ID.
  ```javascript
  document.getElementById('id');
  ```
- **getElementsByTagName:** Selects all elements of a specified tag name.
  ```javascript
  document.getElementsByTagName('tag');
  ```
- **getElementsByClassName:** Selects all elements with a specified class name.
  ```javascript
  document.getElementsByClassName('class');
  ```
- **querySelector:** Selects the first element that matches a specified CSS selector.
  ```javascript
  document.querySelector('.class');
  ```
- **querySelectorAll:** Selects all elements that match a specified CSS selector.
  ```javascript
  document.querySelectorAll('div.myClass');
  ```
## Manipulating the DOM
- **textContent:** Sets or returns the text content of an element.
  ```javascript
  element.textContent = 'New text';
  ```
- **innerHTML:** Sets or returns the HTML content of an element.
  ```javascript
  element.innerHTML = '<span>New HTML content</span>';
  ```
- **style:** Changes the inline style of an element.
  ```javascript
  element.style.color = 'blue';
  ```
- **createElement:** Creates a new element node.
  ```javascript
  var newDiv = document.createElement('div');
  ```
- **appendChild:** Adds a new child node to an element as the last child node.
  ```javascript
  parentElement.appendChild(newDiv);
  ```
- **insertBefore:** Inserts a new node before a specified existing child node.
  ```javascript
  parentElement.insertBefore(newDiv, existingChild);
  ```
## Event Handling
- **addEventListener:** Attaches an event handler to an element.
  ```javascript
  element.addEventListener('click', function() {
    // code to execute on click
  });
  ```
- **Event Types:** 'click', 'mouseenter', 'mouseleave', 'submit', 'load', 'resize', etc.
- **Removing Event Listeners:**
  ```javascript
  element.removeEventListener('click', functionName);
  ```