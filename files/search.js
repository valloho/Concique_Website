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

class SearchPage {

    // Add Event Type
    addEventType(type) {

        document.querySelector(".pageTitle").append("Search for a " + type);
    }

    // Add Event Location
    addEventLocations(locations) {

        for (const location of locations) {

            this.addEventLocationToDOM(location);
        }
    }

    addEventLocationToDOM(location) {

        let eventLocation = document.createElement("option");
        eventLocation.append("District " + location);
        document.querySelector("#where").append(eventLocation);
    }

    // Add Event Tag
    addEventTags(tags) {

        for (const tag of tags) {

            this.addEventTagToDOM(tag);
        }
    }

    addEventTagToDOM(tag) {

        let eventTag = document.createElement("option");
        eventTag.append(tag);
        document.querySelector("#what").append(eventTag);
    }

    // Add Event
    addEvents(events) {

        for (const event of events) {

            this.addEventToDOM(event);
        }
    }

    addEventToDOM(event) {

        // Create article
        let article = document.createElement("article");
        article.setAttribute("id", event.id);

        // Create wallPaper
        let wallPaper = document.createElement("div");
        wallPaper.setAttribute("class", "wallPaper");
        let image = document.createElement("img");
        image.setAttribute("src", event.image);
        image.setAttribute("class", "wallPaperImage");
        wallPaper.append(image);

        // Create name
        let name = document.createElement("h2");
        name.setAttribute("class", "name");
        name.append(event.name);

        // Create detailsButton
        let detailsButtonContainer = document.createElement("div");
        detailsButtonContainer.setAttribute("class", "detailsButtonContainer");
        let detailsButton = document.createElement("button");
        detailsButton.setAttribute("type", "button");
        detailsButton.setAttribute("class", "detailsButton");
        let buttonIcon = document.createElement("ion-icon");
        buttonIcon.setAttribute("name", "chevron-forward-outline");
        buttonIcon.setAttribute("class", "detailButtonIcon");
        detailsButton.append(buttonIcon);
        detailsButtonContainer.append(detailsButton);

        // Create likeLabel
        let likeLabel = document.createElement("button");
        likeLabel.setAttribute("type", "text");
        likeLabel.setAttribute("class", "infoLabel");
        let likeIcon = document.createElement("ion-icon");
        likeIcon.setAttribute("name", "heart");
        let likeCount = document.createElement("label");
        likeCount.append(event.likes);
        likeLabel.append(likeIcon);
        likeLabel.append(likeCount);

        // Create viewsLabel
        let viewsLabel = document.createElement("button");
        viewsLabel.setAttribute("type", "text");
        viewsLabel.setAttribute("class", "infoLabel");
        let viewsIcon = document.createElement("ion-icon");
        viewsIcon.setAttribute("name", "eye");
        let viewsCount = document.createElement("label");
        viewsCount.append(event.views);
        viewsLabel.append(viewsIcon);
        viewsLabel.append(viewsCount);

        // Add properties to article
        article.append(wallPaper);
        article.append(name);
        article.append(detailsButtonContainer);
        article.append(likeLabel);
        article.append(viewsLabel);

        // Add article to page
        document.querySelector("#clubList").append(article);
    }

    // Filter locations
    addFilteredEvents(events, location, date, tag) {

        for (const event of events) {

            console.log("EVENT " + event.name);

            // Check location
            if ((location !== "All locations" && event.location !== location)) {

                continue;
            }

            // Check dates
            let correctDate = false;

            for (let i = 0; i < event.dates.length; i++) {

                if (event.dates[i] === date) {

                    correctDate = true;
                    break;
                }
            }

            if (!correctDate) {

                continue;
            }

            // Check tags
            let correctTag = false;

            for (let i = 0; i < event.tags.length; i++) {

                if (event.tags[i] === tag) {

                    correctTag = true;
                    break;
                }
            }

            if (!correctTag && tag !== "Any Club") {

                continue;
            }

            // Add Event
            this.addEventToDOM(event);
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    let eventType = "Club";

    const eventLocations = [1, 2, 3, 4, 5];

    const clubTags = [

        "nightClub",
        "danceClub",
        "karaokeClub",
        "adultClub",
        "sportsClub"
    ]

    const barTags = [

        "beerBar",
        "irishPubBar",
        "musicBar",
        "wineBar"
    ]


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
        )
    ]

    console.log(clubTags[1]);
    let searchPage = new SearchPage();
    searchPage.addEventType(eventType);
    searchPage.addEventLocations(eventLocations);
    searchPage.addEventTags(clubTags);

    let form = document.getElementById("inputForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let articles = document.getElementsByTagName("article");

        while (articles.length > 0) {

            articles[0].remove();
        }

        let location = document.getElementById("where").value;
        console.log(location);
        let date = document.querySelector('input[type="date"]').value;
        console.log(date);
        let tag = document.getElementById("what").value;
        console.log(tag);

        searchPage.addFilteredEvents(events, location, date, tag);
        document.getElementById("results").scrollIntoView();
    })
});