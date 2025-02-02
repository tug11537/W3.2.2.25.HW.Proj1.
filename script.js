
import { Song, Musician, Playlist } from "./MusicData.js";

const musician1 = new Musician("Broadcast", "Vocals, Synths", "Experimental Electronic");
const musician2 = new Musician("El Michels Affair", "Guitar, Bass, Drums", "Funk / Hip-Hop");
const musician3 = new Musician("Massive Attack and Elizabeth Fraser", "Vocals", "Trip-Hop");

console.log("Musician 1:", musician1);
console.log("Musician 2:", musician2);
console.log("Musician 3:", musician3);

const song1 = new Song("Untitled (City in Progress)", musician1, "Maida Vale Sessions");
const song2 = new Song("Shadow Boxing", musician2, "Return to the 37th Chamber");
const song3 = new Song("Teardrop", musician3, "Mezzanine");

console.log("Song 1:", song1);
console.log("Song 2:", song2);
console.log("Song 3:", song3);

const myPlaylist = new Playlist("myPlaylist", song1, song2, song3);
console.log("Playlist:", myPlaylist);

myPlaylist.getInfo();

//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
