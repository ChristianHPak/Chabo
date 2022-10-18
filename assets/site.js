// http://steamcommunity.com/gid/<GroupID>/memberslistxml/?xml=1


let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1))
});

// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
var apiKey = "DE0CA2613230BD6C712C1C561A7D5DB2";
var steamId = "76561198125213172"
var appId = "730"
// var queryURL = "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=" + appId + "&key=" + apiKey + "&steamid=" + steamId;
var queryURL = "http://steamcommunity.com/gid/29094493/memberslistxml/?xml=1"

console.log(queryURL)

/*$(document).ready(function() {
    $.getJSON( "ajax/test.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
       
        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "body" );
      });  
});

/* $(document).ready(function () {
    $.ajax({
        url: queryURL,
        type: "GET",
        dataType: "xml",
        success: xmlParser,

    })
});

// Turn on Allow CORS Google Extension
 function xmlParser(xml) {
    $(xml).find("members").each(function () {
        $("#membersShowHere").push('<div class="members">' + $(this).find("steamID64").text() + " " + '</div>')
        var Profile = (($(this).find("steamID64").text()));
        var userId = [];
        let text = " "
        for (var i = 0, charsLength = Profile.length; i < charsLength; i += 17) {
            userId.push(Profile.substring(i, i + 17));
        }
        userId.forEach(myFunction);
        document.getElementById("eachId").innerHTML = text;

        function myFunction(item) {
            text += item + "<br>";
        }

    });
} */
