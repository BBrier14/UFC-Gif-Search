//Create API Key variable to avoid typing the entire number
var apikey = "Gk7GE3hsWMc3uSKfYG0G6GF3VEn8rZIS"
var fighters = ["Conor McGregor", "Nate Diaz", "Ben Askren", "Jon Jones", "Henry Cejudo", "Max Holloway", "Khabib Nurmagomedov", "Kamuru Usman",
    "Robert Whittaker", "Stipe Miocic", "Zhang Weili"]

//This On-Click event searches for the value of the name entered and creates a div with a gif and the rating and appends it to the html
$('#find-fighter').on("click", function (event) {
    event.preventDefault();

    var fighter = $('#fighter-input').val();
    var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + fighter + "&api_key=" + apikey;

    $.ajax({
        url: queryurl,
        method: 'GET'
    })
        .then(function (response) {
            var results = response.data;
            console.log(response);

            for (var i = 0; i < 10; i++) {
                var fighterDiv = $('<div>');
                var p = $('<p>').text("Rating: " + results[i].rating);
                var fighterImage = $('<img>');
                var hr = $('<hr>')

                fighterImage.attr("src", results[i].images.fixed_height_still.url);
                fighterImage.attr("data-still", results[i].images.fixed_height_still.url);
                fighterImage.attr("data-animate", results[i].images.fixed_height.url);
                fighterImage.attr("data-state", "still");
                fighterImage.addClass("gif");
                fighterDiv.append(fighterImage);
                fighterDiv.append(p);
                fighterDiv.append(hr);
                $('#fighter-view').prepend(fighterDiv);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    renderButtons();
});


//This Function creates a button with a class, attribute, text, and appends the button list
function renderButtons() {
    $("#fighter-button").empty();

    for (var i = 0; i < fighters.length; i++) {
        var a = $('<button>');
        a.addClass('fighter');
        a.attr("data-name", fighters[i]);
        a.text(fighters[i])
        $("#fighter-button").append(a);
    }
}

//This On-Click Event takes the value of the name and pushes it into the fighter array, which is later made into a button
$("#find-fighter").on("click", function (event) {
    event.preventDefault();

    var fighter = $("#fighter-input").val().trim();
    fighters.push(fighter);
    renderButtons();
})

// //This Function will find the value of whatever button is clicked and display ten gifs
function displayFighterGif() {
    var chosenFighter = $(this).attr("data-name");
    var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + chosenFighter + "&api_key=" + apikey;

    $.ajax({
        url: queryurl,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(response);

        for (var i = 0; i < 10; i++) {
            var fighterDiv = $('<div>');
            var p = $('<p>').text("Rating: " + results[i].rating);
            var fighterImage = $('<img>');
            var hr = $('<hr>')

            fighterImage.attr("src", results[i].images.fixed_height_still.url);
            fighterImage.attr("data-still", results[i].images.fixed_height_still.url);
            fighterImage.attr("data-animate", results[i].images.fixed_height.url);
            fighterImage.attr("data-state", "still");
            fighterImage.addClass("gif");
            fighterDiv.append(fighterImage);
            fighterDiv.append(p);
            fighterDiv.append(hr);
            $('#fighter-view').prepend(fighterDiv);
        }
    })
}

//Create a function to show fighter gifs when button is clicked
$(document).on("click", ".fighter", displayFighterGif);


//This on-click function will decide if the gif is still or animated and do the opposite upon a click
$("#fighter-view").on("click", ".gif", function (event) {
    event.preventDefault();

    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})


//Render fighter buttons upon opening of page
renderButtons()


