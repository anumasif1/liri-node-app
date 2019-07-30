require("dotenv").config();

//Core node package for reading/writing files
var fs = require("fs");
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");
var category = process.argv[2]
var search = process.argv[3]



// fullSong = [];
// for (var i = 2; i < process.argv.length; i++) {
//     fullSong.push(process.argv[i]);
// }
// fullSong = fullSong.join(" ");


console.log("Search: " + " " + search);

// spotify-this-song function
var spotifySearch = function (songName) {
    spotify.search({ type: 'track', query: songName, limit: 1 })
        .then(function (data) {
            //JSON.stringify(data);
            console.log("Artist(s):" + " " + (JSON.stringify(data.tracks.items[0].artists[0].name)));
            console.log("Song:" + " " + (JSON.stringify(data.tracks.items[0].name)));
            console.log("Album:" + " " + (JSON.stringify(data.tracks.items[0].album.name)));
            console.log("Preview Link:" + " " + (JSON.stringify(data.tracks.items[0].preview_url)));

        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
}

//function for movie search
this.findMovie = function (movie) {
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Metascore);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot " + response.data.Plot);
            console.log("Actore: " + response.data.Actors);
            // console.log("Rating: " + response.data.rating.average);
            // console.log("Network: " + response.data.network.name);
            // console.log("Summary: " + response.data.summary);
        })

        .catch(function (error) {
            if (error) {
                console.log(error)
            }

        });
}


//if/else on the category songs/movie.
if (category === "song") {
    spotifySearch(search);
} else if (category === "movie") {
    this.findMovie(search);
}

if (search === "" && category === "song") {
    search === "The Sign"
} else if (search === "" && category === "movie") {
    search === "Mr Nobody"
}
