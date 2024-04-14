/**
 *  Step 1: query the button and the list container (ul)
 *  Step 2: store those elements to 2 variables
 *  Step 3: console.log those variables to verify the elements
 */

var addTaskBtn = document.getElementById("add-task-btn");
var taskList = document.getElementById("task-list");
var inputHTML = document.getElementById("new-task")
var form = document.querySelector("form")
var checkAll = document.getElementById("check-all")


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


    // Pass by reference

    // side effect

    // closure
    newLiHTML.addEventListener("click", function (event) {
        var currentElement = event.target;
        currentElement.classList.toggle("done");

    })


    // taskList.insertBefore()
    // if (empty or not)
    if (taskList.textContent.trim() == "") { //if scope
        taskList.appendChild(newLiHTML);
    } else {
        var firstItemInList = document.querySelector('ul>li');
        taskList.insertBefore(newLiHTML, firstItemInList);
    }
}


/**
 * Step 1: Add event listener for "click" event to button
 * Step 2: On that event trigger addNewTodoItem function with the parameter is user input
*/
form.addEventListener("click", function (event) {
    event.preventDefault();
    var inputValue = inputHTML.value;
    if (inputValue.trim() == "") {
        alert("Invalid input!")
    } else {
        addNewTodoItem(inputValue);
    }
    inputHTML.value = "";
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
    // document.getElementById('parent').insertBefore(newDiv, currentDiv);)

- **Task Interaction:**
  - Implement a way to toggle the 'done' status for each task, changing the element's style to `textDecoration: line-through`.

- **Task Addition via Form Submission:**
  - Facilitate the addition of new tasks when the user presses 'Enter' in the input field, by handling the submit event on a form element.

- Check All
 * When I click on Check all, select all item (make a background become gray);
 * When I click on Check all again, deselect all item (make a background become white);

- Query checkbox
- Add event on change for checkbox
- if(checkbox value is checked){
    make all li backgroud become grey
    - Query all li
    - for each li element, update style.background / class 
}else{
    make all li backgroud become white
}

// interaction with arr 

// query through arr

*/




checkAll.addEventListener("change", function (event) {
    console.log(event.target.checked) // Apply for checkbox and radio button
})

