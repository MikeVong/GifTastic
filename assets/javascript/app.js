
var gifArray = ["Cloud Strife ", "Sephiroth", "Tifa Lockhart", "Aerith Gainsborough","Barret Wallace","Yuffie Kisaragi","Red XIII","Vincent Valentine","Cid Highwind"];

      
function displayGif() 
    {
    var inputSearch = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=FF7_"+ inputSearch +"&limit=10&api_key=xeDhSZfWtTw8VX5iZ4r1d6wSxdNTEhbH";

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
                console.log(response);
                console.log(response.data[0]);
                $("#movies-view").empty();
                for (var i = 0; i< response.data.length; i++)
                {
                var still = response.data[i].images.fixed_width_still.url;
                var animate = response.data[i].images.fixed_width.url;
                var rating = response.data[i].rating;
                var title = response.data[i].title;
                var card = $("<div class='card' style='width; 13rem;'>")
                var rate = $("<div class='card-body'> <h5>").text("Rating: " + rating);
                
                var img = $("<img class='card-img-top'>");
                img.attr("src", still);
                img.attr("data-still", still);
                img.attr("data-animate", animate);
                img.attr("data-state","still");
                img.addClass("action");
                card.append(img);
                card.append(title);
                card.append(rate);
                
                $("#movies-view").append(card);

                

                //$("#movies-view").append("<div class= 'card' style='width: 13rem;'><img id='pix'src=" + still + ">"+"<div class='card-body'>"+"<h5 class='card-title'>"+"Rating: "+rating+"<button class='btn btn-primary'id='switch'>"+"Action"+"</button>"+"</div>"+ "</div>");
                
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

