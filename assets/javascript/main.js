$(document).ready(function() {

    $("#search-btn").click(function(e) {

        e.preventDefault();
    
        var searchTerm = $("#search-term").val();

        console.log();

        if (searchTerm!=="") {

            var urlQuery = "https://www.googleapis.com/youtube/v3/search?\
            &part=snippet\
            &q="+searchTerm+"\
            &type=video\
            &key=AIzaSyCr58jufRj8j_ZF9qNWzpjpqHfNlIggNjA";
            
            $.ajax({
                url: urlQuery,
                method: "GET"
            }).then(function(response) {
                console.log(response);
            });

        }
    
    });

});
