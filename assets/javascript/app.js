
var gifArray = ["Cloud Strife ", "Sephiroth", "Tifa Lockhart","Yuffie Kisaragi","Vincent Valentine","Cid Highwind"];

      
function displayGif() 
    {
    var inputSearch = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ inputSearch +"&limit=10&api_key=xeDhSZfWtTw8VX5iZ4r1d6wSxdNTEhbH";

    $.ajax(
        {
          url: queryURL,
          method: "GET"
        })
        .then(function(response) 
                {
                console.log(response);
                console.log(response.data[0]);
                $("#gif-view").empty();
                for (var i = 0; i< response.data.length; i++)
                {
                var still = response.data[i].images.fixed_height_still.url;
                var animate = response.data[i].images.fixed_height.url;
                var rating = response.data[i].rating;
                var card = $("<div class='card'>")
                var rate = $("<div class='card-body'> <h5>").text("Rating: " + rating);
                var img = $("<img class='card-img-top'>");
                img.attr("src", still);
                img.attr("data-still", still);
                img.attr("data-animate", animate);
                img.attr("data-state","still");
                img.addClass("action");
                card.append(img);
                card.append(rate);
                $("#gif-view").append(card);
                };
          
            });

    };
//$(".gif-btn").on("click",displayGif);
$(document).on("click", ".gif-btn", displayGif);

// This function lets the image click back and forth between still and animated 
$(document).on("click", ".action", function(){
    var state = $(this).attr("data-state");
    if(state == "still"){
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    } else{
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
 })


function renderButtons() 
    {
        $("#buttons-view").empty();
        for (var i = 0; i < gifArray.length; i++) 
            {
            var a = $("<button>");
            a.addClass("gif-btn btn btn-warning");
            a.attr("data-name", gifArray[i]);
            a.text(gifArray[i]);
            $("#buttons-view").append(a);
            }
    };

$("#add-gif").on("click", function(event) 
    {
    event.preventDefault();
    var gifAdd = $("#gif-input").val().trim();
    gifArray.push(gifAdd);
    renderButtons();
    });

renderButtons();

