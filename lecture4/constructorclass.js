class Song {
    constructor(title, arthist) {
        this.title = title;
        this.arthist = arthist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.arthist);