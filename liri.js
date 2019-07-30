require("dotenv").config();

//Core node package for reading/writing files
var fs = require("fs");
var keys = require("./keys.js");
//var log = require("./log.txt");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");
var category = process.argv[2]
var search = process.argv[3]
var appendData = "";



// spotify-this-song function
var spotifyThisSong = function (songName) {
    spotify.search({ type: 'track', query: songName, limit: 1 })
        .then(function (data) {

            //JSON.stringify(data);
            var songArtist = ("Artist(s):" + " " + (JSON.stringify(data.tracks.items[0].artists[0].name)));
            var songName = ("Song:" + " " + (JSON.stringify(data.tracks.items[0].name)));
            var songAlbum = ("Album:" + " " + (JSON.stringify(data.tracks.items[0].album.name)));
            var songLink = ("Preview Link:" + " " + (JSON.stringify(data.tracks.items[0].preview_url)));
            appendData = songArtist + "\n" + songName + "\n" + songAlbum + "\n" + songLink;
            console.log(appendData);
            logFile();
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
            // console.log(response.data);
            var movieTitle = ("Title: " + response.data.Title);
            var movieYear = ("Year: " + response.data.Year);
            var movieRating1 = ("IMDB Rating: " + response.data.imdbRating);
            var movieRating2 = ("Rotten Tomatoes Rating: " + response.data.Metascore);
            var movieCountry = ("Country: " + response.data.Country);
            var movieLanguage = ("Language: " + response.data.Language);
            var moviePlot = ("Plot " + response.data.Plot);
            var movieActors = ("Actors: " + response.data.Actors);
            appendData = movieTitle + "\n" + movieYear + "\n" + movieRating1 + "\n" + movieRating2 + "\n" + movieCountry + "\n" + movieLanguage + "\n" + moviePlot + "\n" + movieActors;
            console.log(appendData)
            logFile();
        })

        .catch(function (error) {
            if (error) {
                console.log(error)
            }

        });
}


var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
       // console.log(dataArr);
        spotifyThisSong(dataArr[1]);

    })
}


// if/else on the category songs/movie.
if (category === "Spotify-this-song") {
    spotifyThisSong(search);
} else if (category === "Movie-this") {
    this.findMovie(search);
} else if (category === "Do-what-it-says"){
    doWhatItSays();
}


// //log.txt => Append search results on log.txt file
// // If the file didn't exist, then it gets created on the fly.
var logFile = function () {
    fs.appendFile("log.txt", appendData + "\n", "utf8", function (err) {
        if (err) {
            console.log("Error occurred: ", err);
        } else {
            console.log("Content Added!")
        }
    })
}
