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
        "Praterdome",
        "images/praterdom.jpg",
        1,
        43,
        312,
        "District 2",
        ["2022-06-24", "2022-06-25"],
        ["nightClub", "party"]
    ),
    new Event(
        "Volksgarten",
        "images/volksgarten_inside1.jpg",
        2,
        69,
        420,
        "District 1",
        ["2022-06-23", "2022-06-24", "2022-06-25"],
        ["nightClub", "danceClub"]
    ),
    new Event(
        "Loco",
        "images/loco.jpg",
        3,
        187,
        666,
        "District 9",
        ["2022-06-20", "2022-06-21", "2022-06-22", "2022-06-23", "2022-06-24", "2022-06-25", "2022-06-26"],
        ["nightClub"]
    ),
    new Event(
        "Flex",
        "images/flex.jpg",
        4,
        187,
        666,
        "District 1",
        ["2022-06-23", "2022-06-24"],
        ["nightClub", "music"]
    ),
    new Event(
        "Grelle Forelle",
        "images/grelleforelle.jpg",
        5,
        187,
        666,
        "District 12",
        ["2022-06-24", "2022-06-25"],
        ["nightClub", "music", "electronic"]
    )];


const model = new searchClubModel();

module.exports = model;