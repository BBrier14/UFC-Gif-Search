//Create API Key variable to avoid typing the entire number
var apikey = "Gk7GE3hsWMc3uSKfYG0G6GF3VEn8rZIS"
var fighters = ["McGregor", "Diaz", "Askren", "Jones"]
//Create on-click event to find the value of the name the user entered and make an AJAX call
// $('#find-fighter').on("click", function(event) {
//     event.preventDefault();
//     console.log("test");

//     var fighter = $('#fighter-input').val();
//     var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + fighter + "&api_key=" + apikey;

//     $.ajax({
//         url: queryurl,
//         method: 'GET'
//     })
//     .then(function(response) {
//         console.log(queryurl);
//         console.log(response);

//         var results = response.data;

//         for (var i = 0; i < results.length; i++);
//             var fighterDiv = $('<div>');
//             var p = $('<p>').text("Rating: " + results[i].rating);
//             var fighterImage = $('<img>');
//             fighterImage.attr("src", results[i].images.fixed_height.url); 
//             fighterDiv.append(p);
//             fighterDiv.append(fighterImage);
//             $('#fighter-view').append(fighterDiv);

           
//     })
//     renderButtons();
// });

//Create a function to render a button when a fighter is chosen
function renderButtons() {
    $("#fighter-button").empty();

    for (var i = 0; i < fighters.length; i++) {
        var a = $('<button>');
        a.addClass('fighter');
        a.attr("data-name", fighters[i]);
        a.text(fighters[i])
        $("#fighter-button").append(a);

}}

$("#find-fighter").on("click", function(event){ 
    event.preventDefault();

    var fighter = $("#fighter-input").val().trim();
    fighters.push(fighter);
    renderButtons();
})

renderButtons();
