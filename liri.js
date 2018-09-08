require("dotenv").config();

//takes the command from the terminal
var userCommand = process.argv[2];
//takes the additional input required for few of the commands
var userInput = process.argv[3];

function validateInput(){
    if((userCommand === "concert-this" || userCommand === "spotify-this-song" || userCommand == "movie-this") && userInput === ''){
        console.log(`Missing additional input necessary to run request.`)
    }
    else if(userCommand === "do-what-it-says"){
        return;
    }
    else{
        console.log(`A valid command was not entered.`)
    }
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