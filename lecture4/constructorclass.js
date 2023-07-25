class Song {
    constructor(title, arthist) {
        this.title = title;
        this.arthist = arthist;
        this.fullname = `${title} by ${arthist}`;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.title);
console.log(mySong.arthist);
console.log(mySong.fullname);