// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    const sentance = `${this.uploader} watched all ${this.time} of ${this.title}`;
    console.log(sentance);
  }
}

// 3. Instantiate a new Video instance and call the watch() method.

const video1 = new Video("My Fault", "Leah", "2 hours");
video1.watch();

// 4. Instantiate a second Video instance with different values.

const video2 = new Video("Harry Potter", "Chaim", "2.5 hours");
video2.watch();

// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

const downloads = [
  { title: "Spiderman", uploader: "John", time: "4 hours" },
  { title: "Batman", uploader: "Marry", time: "3 hours" },
  { title: "Ironman", uploader: "John", time: "5 hours" },
  { title: "Thor", uploader: "Mike", time: "2.5 hours" },
  { title: "Deadpool", uploader: "Marry", time: "1.5 hours" },
];

// 6. Bonus: Loop through the array to instantiate those instances.

const videos = downloads.map(
  (title, uploader, time) => new Video(title, uploader, time)
);

console.log(videos);
