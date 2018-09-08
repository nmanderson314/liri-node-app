require("dotenv").config();
var request = require("request");

//takes the command from the terminal
var userCommand = process.argv[2];
//takes the additional input required for few of the commands
var userInput = process.argv[3];

function validateInput(){
    console.log(`
    Command entered = ${userCommand}
    Search value specified = ${userInput}
    `)
    if((userCommand === "concert-this" || userCommand === "spotify-this-song" || userCommand === "movie-this") && (userInput === '' || userInput === undefined)){
        console.log(`Missing additional input necessary to run request. Using defaulted value for search.`)
    };

    if (userCommand != "concert-this" && userCommand != "spotify-this-song" && userCommand != "movie-this" && userCommand != "do-what-it-says"){
        console.log(`A valid command was not entered.`)
    };
}

function bandsInTown(){
    //uses bands in town API to return Name of Venue, Venue Location, and Date of event MM/DD/YYYY

    "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

}

function spotify(){
    //song in the terminal window to retun Artist(s), song name, preview link, album
    //Ace of Base default

}

function omdb(){
    //movie title, year, imdb rating, rotten tomatoes rating, country of origin, language, plot, actors
    //Mr. Nobody default
    //api key = trilogy
    
    //default to MrNobody if no user input
    if(userInput===''|| userInput === undefined){
        userInput = 'Mr. Nobody'
    };

    request(`http://www.omdbapi.com/?t=${userInput}&y=&plot=short&apikey=trilogy`, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
    
    // Parse the body of the site
    console.log(`
    Title: + ${JSON.parse(body).Title}
    Year: + ${JSON.parse(body).Year}
    IMBD Rating: + ${JSON.parse(body).imdbRating}
    Country: + ${JSON.parse(body).Country}
    Language: + ${JSON.parse(body).Language}
    Plot: + ${JSON.parse(body).Plot}
    Actors: + ${JSON.parse(body).Actors}
    
    `);

//////////////////    //Missing Rotten Tomatoes Rating: + ${JSON.parse(body).Year}

  }
});

}

function doWhatItSays(){

}

//////////////////////////////////////////////////////////

validateInput();
if(userCommand === "concert-this"){
    bandsInTown();
}
if(userCommand === "spotify-this-song"){
    spotify();
}
if(userCommand === "movie-this"){
    omdb();
}
if(userCommand ==='do-what-it-says'){
    doWhatItSays();
}