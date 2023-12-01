// displays current time & date using jQuery
function displayCurrentDateTime() {
    const currentDate = new Date();
    const formattedDateTime = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;

    $('#currentDateTime').text(formattedDateTime);
}

// light dark mode toggle using jQuery
function toggleDarkMode() {
    $('body').toggleClass('dark-mode');
}

// change text on hover using jQuery
function changeTextOnHover(elementId, newText) {
    const element = $('#' + elementId);

    if (element) {
        const originalText = element.text();

        element.hover(
            function () {
                element.text(newText);
            },
            function () {
                element.text(originalText);
            }
        );
    }
}

// update nested list contents using jQuery
function updateNestedListContents() {
    const nestedList = $('#nestedListId');
    const nestedListItems = nestedList.find('li');

    // add new item at beginning
    nestedList.prepend('<li>Tennis Ball</li>');

    // remove last item
    nestedList.children(':last').remove();

    // example of html()
    nestedListItems.eq(1).html('Happy <strong>Toy!</strong>');

    // set new class
    nestedListItems.addClass('new-class');

    // add number
    const introSentence = $('#introNestedSentence');
    introSentence.text(`${introSentence.text()} (${nestedListItems.length} items)`);
}

// call functions when page loads using jQuery
$(document).ready(function () {
    displayCurrentDateTime();

    // refresh for time
    setInterval(displayCurrentDateTime, 1000);

    // dark mode button
    $('#toggleDarkModeButton').click(toggleDarkMode);

    // interactive text
    changeTextOnHover('top', 'Hovering over the title!');
    changeTextOnHover('currentDateTime', 'Hovering over the current date and time!');

    $('#updateNestedListButton').click(updateNestedListContents);
});
