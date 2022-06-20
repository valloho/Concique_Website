class Event {

    constructor(name, image, id, likes, views, location, date, tag) {

        this.name = name;
        this.image = image;
        this.id = id;
        this.likes = likes;
        this.views = views;
        this.location = location;
        this.date = date;
        this.tag = tag;
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
    addFilteredEvents(eventType, events, location, date, tag) {

        for (const event of events) {

            if (location === "All locations" || event.location === location &&
                event.date === date &&
                tag === ("Any " + eventType) || event.tag === tag) {

                this.addEventToDOM(event);
                console.log(event.date + " === " + date);
            }
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
        "adultClub"
    ]

    const barTags = [

        "beerBar",
        "irishPubBar",
        "musicBar",
        "wineBar"
    ]


    let events = [

        new Event("Event2", "images/EventTest2.png", 2, 43, 312, "District 1", "2022-06-20", clubTags[1]),
        new Event("Event3", "images/EventTest3.png", 3, 69, 420, "District 2", "2022-09-24", clubTags[0]),
        new Event("Event4", "images/landingpage_bar.jpg", 4, 187, 666, "District 5", "2022-07-14", clubTags[3])
    ]

    let searchPage = new SearchPage();
    searchPage.addEventType(eventType);
    searchPage.addEventLocations(eventLocations);
    searchPage.addEventTags(clubTags);

    let form = document.getElementById("inputForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        document.querySelector("article").remove();
        let location = document.getElementById("where").value;
        console.log(location);
        let date = document.querySelector('input[type="date"]').value;
        console.log(date);
        let tag = document.getElementById("what").value;
        console.log(tag);

        searchPage.addFilteredEvents(eventType, events, location, date, tag)
        document.getElementById("results").scrollIntoView();
    })
});