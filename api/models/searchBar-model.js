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

class searchBarModel {

    getEvents() {
        return events;
    }
}
let events = [

    new Event(
        "Loos Bar",
        "images/bars/loos-bar.jpg",
        1,
        43,
        312,
        "District 1",
        ["2022-06-20", "2022-06-21","2022-06-22","2022-06-23", "2022-06-24", "2022-06-25", "2022-06-26"],
        ["coffee", "cocktail", "reservations"]
    ),
    new Event(
        "Moby Dick",
        "images/bars/moby-dick.jpg",
        2,
        69,
        420,
        "District 7",
        ["2022-06-20", "2022-06-21","2022-06-22","2022-06-23", "2022-06-24", "2022-06-25"],
        ["cocktail", "eatery"]
    ),
    new Event(
        "Luster",
        "images/bars/luster.jpg",
        3,
        187,
        666,
        "District 6",
        ["2022-06-21", "2022-06-22", "2022-06-23", "2022-06-24", "2022-06-25"],
        ["cocktail", "eatery", "reservations"]
    ),
    new Event(
        "Kleinod",
        "images/bars/kleinod.jpg",
        4,
        187,
        666,
        "District 1",
        ["2022-06-20", "2022-06-21","2022-06-22","2022-06-23", "2022-06-24", "2022-06-25", "2022-06-26"],
        ["reservation", "cocktail", "eatery"]
    ),
    new Event(
        "Eissalon Bar",
        "images/bars/eissalon-bar.jpg",
        5,
        187,
        666,
        "District 6",
        ["2022-06-21","2022-06-22","2022-06-23", "2022-06-24", "2022-06-25"],
        ["ice", "cocktails"]
    )];


const model = new searchBarModel();

module.exports = model;