# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. It's command line node app that takes in parameters and gives you back data. 

*It will search **Spotify** for songs and **OMDB** for movies.

**Node Packages used for this program:**
* Node-Spotify-API
* Axios
* Moment
* DotEnv

![Included Node Packages](img-1.png);


**This App performs following 5 functions:**
* **Spotify-this-song**
   ![Function Spotify-this-song](spotify.png); 
   * This function will search Spotify API for the required song. 
   **Command to run in Terminal:** node liri.js spotify-this-song '<song name here>'
   ![Terminal Spotify-this-song](spotify-run.png); 
   * This command will display following details of the required song:
        ** Artist(s)
        ** Song Name
        ** Album
        ** Preview Link

* Movie-this
* Do-what-it-says
* Log File
* R