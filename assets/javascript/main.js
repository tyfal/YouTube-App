$(document).ready(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB3ZeNms-1h0PYumxqRZuO_Ga9QdEZmQB4",
        authDomain: "app-247702.firebaseapp.com",
        databaseURL: "https://app-247702.firebaseio.com",
        projectId: "youtube-app-247702",
        storageBucket: "",
        messagingSenderId: "699752805064",
        appId: "1:699752805064:web:a34e44bf66e03e1c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database service
    var database = firebase.database();

    $("#search-btn").click(function (e) {

        e.preventDefault();

        var searchTerm = $("#search-term").val();

        console.log();

        if (searchTerm !== "") {

            var urlQuery = "https://www.googleapis.com/youtube/v3/search?\
            &part=snippet\
            &q="+ searchTerm + "\
            &type=video\
            &key=AIzaSyCr58jufRj8j_ZF9qNWzpjpqHfNlIggNjA";

            $.ajax({
                url: urlQuery,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i < response.items.length; i++) {
                    var id = response.items[i].id.videoId;
                    var thumb = response.items[i].snippet.thumbnails.default.url;
                    // var vid = getVid(id);
                    var img = getVidOption(thumb, id);
                    $("#results-container").append(img);
                }
            });

        }

    });

    $("img").click(function() {
        console.log("clicked!");
    });

});


function getVidOption(thumb, id) {

    var img = $("<img>");
    img.attr("src", thumb);
    img.attr("vidId", id);
    img.click(function() {writeVidData(id)});

    return img;

}


function writeVidData(id) {
    firebase.database().ref('vids/').set({
      vidId: id
    });
  }
