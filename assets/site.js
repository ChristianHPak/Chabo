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

$(document).ready(function(){
    $.ajax({
        url: queryURL,
        type: "GET",
        dataType: "xml",
        success: xmlParser,
    })
});

function xmlParser(xml) {
    $(xml).find("members").each(function() {
        $("#membersShowHere").append('<div class="members">' + $(this).find("steamID64").text() + "  " + '</div>')
        console.log($(this).find("steamID64").text())
    });
}