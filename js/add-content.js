// displays current time & date
function displayCurrentDateTime() {
    
    const currentDate = new Date();

    // date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; //add one since months start at 0
    const day = currentDate.getDate();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // convert to 12 hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // If hours is 0, set it to 12

    // format date & time
    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;

    
    document.getElementById('currentDateTime').innerText = formattedDateTime;
}

// light dark mode toggle
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');

    // dark mode
    body.classList.toggle('dark-mode', !isDarkMode);
}

//change text on hover
function changeTextOnHover(elementId, newText) {
    const element = document.getElementById(elementId);

    if (element) {
        // save original text
        const originalText = element.innerText;

        //events for hover
        element.addEventListener('mouseover', function () {
            element.innerText = newText;
        });

        element.addEventListener('mouseout', function () {
            element.innerText = originalText;
        });
    }
}



function updateNestedListContents() {
    // reference
    const nestedList = document.getElementById('nestedListId'); 
    const nestedListItems = nestedList.getElementsByTagName('li');

    // add new item at beginning
    const newNestedItem = document.createElement('li');
    newNestedItem.innerText = 'Tennis Ball';
    nestedList.insertBefore(newNestedItem, nestedList.firstChild);

    // remove last item
    nestedList.removeChild(nestedList.lastChild);

    // example of innerHTML
    nestedListItems[1].innerHTML = 'Happy <strong>Toy!</strong>';

    // set new class
    for (let i = 0; i < nestedListItems.length; i++) {
        nestedListItems[i].classList.add('new-class'); 
    }

    // add number
    const introSentence = document.getElementById('introNestedSentence'); // Replace 'introNestedSentence' with the actual ID
    introSentence.innerText += ` (${nestedListItems.length} items)`;
}

// call functions when page loads
window.onload = function () {
    displayCurrentDateTime();

    // refresh for time
    setInterval(displayCurrentDateTime, 1000);

    // dark mode button
    const toggleButton = document.getElementById('toggleDarkModeButton');
    toggleButton.addEventListener('click', toggleDarkMode);

    // interactive text
    changeTextOnHover('top', 'Hovering over the title!');
    changeTextOnHover('currentDateTime', 'Hovering over the current date and time!');

    const updateNestedListButton = document.getElementById('updateNestedListButton');
    updateNestedListButton.addEventListener('click', updateNestedListContents);
};
