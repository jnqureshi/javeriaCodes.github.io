//select the elements where data will be displayed/picked up from
const clear = document.querySelector(".clear"); //querySelector selects the first item with this class
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//css classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//show today's date
const options = {weekday: "long", month: "short", day: "numeric", year: "numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
function addToDo(toDo) {
    const text = `  <li class="item">
                        <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                        <p class="text">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id="0"></i>
                    </li>
                `;
    //before the end of the element (as the last child)
    const position = "beforeend";

    //inserts a text as HTML, into a specified position (before the end of the element (as the last child))
    list.insertAdjacentHTML(position, text);
}

// addToDo("Make a JS project"); //test to see if the item is getting added

//add an item to the list when the user hits the "enter (code 13)" key
document.addEventListener("keyup", function(event) {
    if (event.keycode == 13) {
        //get the value the user entered
        const toDo = input.value;
        
        //if the input is not empty add it to the list
        if (toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }
});


