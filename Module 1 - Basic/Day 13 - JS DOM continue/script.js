// // function name(...parameters) {}
// function functionName() {
//     console.log("1")
//     console.log("2")
//     console.log("3")
//     console.log("4")

// }


// function tinhTong(soThuNhat, soThuHai) {
//     console.log(this)
// }




// var p = document.getElementById("paragraph");

// // addEventListener / on[event]
// p.addEventListener("click", function () {
//     alert("CLICKED!!!")
// })

// p.addEventListener("click", functionName)

// p.onclick = function () {
//     alert("CLICKED!!!")

// }
// p.onclick = functionName;


/*
// JS Basic
    ** Variables:
    - String: "String"
    - Number: 50
    - Bolean: true / false
    - HTMLList/NodeList
    = Syntax: var variableName = value
    ** Functions:
    = Syntax: function functionName(paremeterName, ...){
        lines of code
    }
    - functionName
    - Execute: functionName(1,2,3)
    - "return" keyword, return the value after execute the function.

    ** Comparing / Conditional
    * Comparison
    >
    <
    == Compare value only
    === compare value and variable type
    >=
    <=
    != compare value only
    !== compare value and variable type

    ** Conditional
    if(Boolean){
        lines of code will be executed only the condition return TRUE
    }
*/
// JS DOM
/*
    - Finding elements:
    document.querySelector()
    document.querySelectorAll()

    var element = document.getElementById("id");
    document.getElementsByTagName("tagname");
    document.getElementsByClassName("tagname");

    - Query Elment Attribute / Manipulate element

    element.textContent = "newValue"; (SET new value) textNode of element
    element.textContent (GET current value)
    element.innerHTML = "<p>abc</p>" generate new children nodes 
    element.innerHTML (Get the inside HTML content)

    inputElement.value = "newValue" (Set t the input value)
    inputElement.value (GET the input value)

    - Add event listeners:
    element.addEventListener("click/submit/...", callback)
    element.addEventListener("click/submit/...", functionName) 
    element.addEventListener("click/submit/...", function(){
        functionName();
    })

    element.on[Event] /
    element.onClick = function(){

    }
      element.onClick = functionName; 
*/



/** 
 *  Step 1: Create an HTML file that include 1 input and 2 button
 *  Step 2: Below the input and button, have a <p> tag to show the result
 *  Step 3: Query the input element, p, and button element
 *  Step 4: Create a function that check if the number is positive, negative or zero and Print the result to the <p> tag
 *  Step 5: Add event "click" to button, everytime user click on the button, execute the function you created on step 3
 * 
 */


// document.getElementById('parent').insertBefore(newDiv, currentDiv);)

// Step 1:
var input = document.getElementById('user-input');
var form = document.getElementsByTagName('form')[0]; //
var paragraph = document.querySelector('p');

function checkNumber(number) { // Return ve 1 chuoi~ 
    // check number >0  => positive => in "positive" vao the <p>
    // number <0 => negative
    // number == 0 => zero
    // Stop function to execute lines of code
    // typeof check type of variable
    // Number(), String(), Boolean();

    // neu la positive => chu mau xanh
    // neu la negative => chu mau do
    // neu la zero => chu mau den


    console.log(typeof (number));
    var formattedNumber = Number(number); // 12345 hoac NaN
    if (String(formattedNumber) == 'NaN') {
        alert("Please input a valid number")
        input.value = ''
        return;
    }

    if (number > 0) {
        return "positive";
    }
    if (number < 0) {
        return "negative";
    }
    if (number == 0) {
        return "zero"
    }

}


// debug

var defaultClass = paragraph.classList.value; // result capitalize
var selectOptions = document.querySelector('select');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    console.log(formData.get('user-input'))
    // var result = checkNumber(input.value);
    // paragraph.textContent = result;
    // // truoc khi them class moi
    // // clear het class cu
    // paragraph.classList.value = defaultClass;
    // paragraph.classList.add(result)
})

paragraph.addEventListener("click", function () {
    paragraph.classList.toggle('result')
})

input.addEventListener("change", function (event) {
    console.log(event.target.value);
})