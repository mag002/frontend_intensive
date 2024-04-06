/**
 *  Step 1: query the button and the list container (ul)
 *  Step 2: store those elements to 2 variables
 *  Step 3: console.log those variables to verify the elements
 */

var addTaskBtn = document.getElementById("add-task-btn");
var taskList = document.getElementById("task-list");
var inputHTML = document.getElementById("new-task")


/**
 * Step 1: create a new function with name is addNewTodoItem(newItemContent) with 1 parameter is item content;
 * Step 2: Create a new <li> element
 * Step 3: add newItemContent from parameter to <li> textContent
 * Step 4: add new <li> item into task container (ul) with appendChild
 * Step 5: execute addNewTodoItem function to add the new li item
 */

function addNewTodoItem(newItemContent) {
    var newLiHTML = document.createElement("li");
    newLiHTML.textContent = newItemContent;
    newLiHTML.addEventListener("click", function () {
        //  toggle done status for each li item (change element style)

    })
    // taskList.insertBefore()
    taskList.appendChild(newLiHTML);
}


/**
 * Step 1: Add event listener for "click" event to button
 * Step 2: On that event trigger addNewTodoItem function with the parameter is user input
*/
addTaskBtn.addEventListener("click", function () {
    var inputValue = inputHTML.value;
    addNewTodoItem(inputValue);
})


/**
## Exercise Requirements

### Apple Page Tasks (Due Wednesday)
- **Menu Status Check:**
  - Conduct research on how to use if/else statements to verify the menu's current state.
  - Dive into manipulating the class list for DOM elements.

- **Responsive Navbar Update:**
  - Post-update, add functionality to toggle the navigation menu in mobile view using an event handler.

### To-Do List Enhancements (Due Saturday)
- **Task Completion Check:**
  - Investigate the use of if/else statements to check whether tasks are marked as done and if the list is empty.
  - Explore the `insertBefore` method to add new items at the top of the task list.

- **Task Interaction:**
  - Implement a way to toggle the 'done' status for each task, changing the element's style to `textDecoration: line-through`.

- **Task Addition via Form Submission:**
  - Facilitate the addition of new tasks when the user presses 'Enter' in the input field, by handling the submit event on a form element.

*/
