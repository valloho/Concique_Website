class Event {
    constructor(name, image, id, likes, views, location, dates, tags) {
        this.name = name;
        this.image = image;
        this.id = id;
        this.likes = likes;
        this.views = views;
        this.location = location;
        this.dates = dates;
        this.tags = tags;
    }
}

class searchClubModel {

    getEvents() {
        return events;
    }




}
let events = [

    new Event(
        "SportBoys",
        "images/EventTest2.png",
        2,
        43,
        312,
        "District 1",
        ["2022-06-22", "2022-06-23", "2022-06-24", "2022-06-25", "2022-06-28", "2022-06-29", "2022-06-30"],
        ["nightClub", "sportsClub"]
    ),
    new Event(
        "SingAndSwing",
        "images/EventTest3.png",
        3,
        69,
        420,
        "District 4",
        ["2022-06-24", "2022-06-25", "2022-06-26"],
        ["nightClub", "danceClub", "karaokeClub"]
    ),
    new Event(
        "MidlifeCrisisClub",
        "images/landingpage_bar.jpg",
        4,
        187,
        666,
        "District 5",
        ["2022-06-22", "2022-06-24"],
        ["karaokeClub"]
    ),
    new Event(
        "LetsKillJavascript",
        "images/landingpage_bar.jpg",
        4,
        187,
        666,
        "District 5",
        ["2022-06-24"],
        ["nightClub"]
    ),
    new Event(
        "CallMedicalAssistance",
        "images/landingpage_bar.jpg",
        4,
        187,
        666,
        "District 5",
        ["2022-06-24"],
        ["sportsClub"]
    )];


const model = new searchClubModel();

module.exports = model;