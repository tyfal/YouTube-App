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

    var vidRef = firebase.database().ref('vids/');
    vidRef.on('value', function (snapshot) {
        console.log(snapshot.val().vidId);
        var vid = getVid(snapshot.val().vidId);
        $("body").html(vid);
    });

});


/** Creating HTML individual youtube videos
 *
 * @param {string} id
 * 
 * @returns jqury element
 */
function getVid(id) {

    // check if this is already in api
    var embeddedVid = $('<iframe width="'+screen.width+'" height="'+screen.height+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    var src = "https://www.youtube.com/embed/" + id;
    embeddedVid.attr("src", src);
    embeddedVid.attr("vidId", id);

    return embeddedVid;

}