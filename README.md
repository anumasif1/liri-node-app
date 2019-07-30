# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. It's command line node app that takes in parameters and gives you back data. 

*It will search **Spotify** for songs and **OMDB** for movies.

**Node Packages used for this program:**
* Node-Spotify-API
* Axios
* Moment
* DotEnv

![Included Node Packages](img-1.png)


**This App performs following 4 functions:**
1. **Spotify-this-song**

   ![Function Spotify-this-song](spotify.png)
   * This function will search Spotify API for the required song. 
   **Command to run in Terminal:** node liri.js spotify-this-song "song name here"

   ![Terminal Spotify-this-song](spotify-run.png)

   * This command will display following details of the required song:
      * Artist(s)
      * Song Name
      * Album
      * Preview Link

2. **Movie-this**

    ![Function Movie-this](movie-this.png)
    * This function will search OMDB API for the required movie name.

     **Command to run in Terminal:** node liri.js Movie-this "movie name here"
     ![Terminal Movie-this](movie-this-run.png)
     * This command will display following details of the required movie:
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
S
3. **Do-what-it-says**

![Function Do-what-it-says](do-what.png)
This function takes the command to random.txt file. It reads the file and performs Spotify-this-song on the saved song in the file. 

**Command to run in Terminal:** node liri.js Do-what-it-says
 ![Terminal Do-what-it-saysd](do-what-run.png)


4. **Log File**

![Function LogFile](log-file.png)
This function is being performed after every search. It appends all the results in log.txt file every time a search is performed.
![Log File](log.png)

* In order to see what action to perform code takes process.argv[2] as a category to check which function to call. 
    * If the category = Spotify-this-song, it will search Spotify
    * If the category = Movie-this, it will search OMDB
    * If the category = Do-what-it-says, it will read random.txt
    * If none of the above then it will display "Please enter the category of your search."

* Code runs the Spotify-this-song on "The Sign" or Movie-this on "Mr Nobody" as defaualt if no name is given with the search.

