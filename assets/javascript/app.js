
var gifArray = ["Cloud Strife ", "Sephiroth", "Tifa Lockhart", "Aerith Gainsborough","Barret Wallace","Yuffie Kisaragi","Red XIII","Vincent Valentine","Cid Highwind"];

      
function displayGif() 
    {
    var inputSearch = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ inputSearch +"&limit=10&api_key=xeDhSZfWtTw8VX5iZ4r1d6wSxdNTEhbH";

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
                console.log(response);
                console.log(response.data[0]);
                $("#movies-view").empty();
                for (var i = 0; i< response.data.length; i++)
                {
                var imgStill = response.data[i].images.fixed_height_still.url;
                var imgAnimate = response.data[i].images.fixed_height.url;
                //$("#movies-view").append("<div class= 'card' style='width: 13rem;'><img id='pix' src=" + imgURL + ">"+"</div>");
                var image =$("<img>");
                image.attr("src",imgStill);
                image.attr("stillData", imgStill);
                image.attr("animateData", imgAnimate);
                image.addClass("card");
                $("#movies-view").append(image);
                var rating = response.data[i].rating;
                //$("#movies-view").append("<p> Rating: " + rating + "</p>");

                /*
                var gifDiv = $("<div class= card >");
                var imgURL = response.data[i].images.fixed_width_still.url;
                var image = $("<img>").attr("src", imgURL);
                gifDiv.append(image);
                $("#movies-view").prepend(gifDiv);
                */
                };
          
            });

    };
//$(".gif-btn").on("click",displayGif);
$(document).on("click", ".gif-btn", displayGif);



function renderButtons() 
    {
        $("#buttons-view").empty();
        for (var i = 0; i < gifArray.length; i++) 
            {
            var a = $("<button>");
            a.addClass("gif-btn btn btn-secondary");
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

//$(document).on("click", ".gif-btn", displayGif);

renderButtons();


// ajax pull

    // to search use "q"
    // to limit it to 10 use "limit=10"
    // show the rating you want by using "rating=(p,pg,etc)"

// ajaz response

    // still gifs only
    // show 10 at a time
    // list them on the page
    // have premade category
    // show still
        //when click gif plays
    // show title
    // show rating

