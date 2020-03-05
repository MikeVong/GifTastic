// create array of pre-search
var searchArr =[];
// create a search button using jquery
$("#btnSearch").on('click', function()
    {
    var inputSearch = $("#inputSearch").val();
    console.log(inputSearch);
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+ inputSearch +'&api_key=xeDhSZfWtTw8VX5iZ4r1d6wSxdNTEhbH';
    $.ajax({
            url = queryURL,
            method : "GET",
           });
    });
// what happen after the button is push

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

