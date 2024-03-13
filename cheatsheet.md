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
