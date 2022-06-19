class Event {

    constructor(name, image, id, likes, views) {

        this.name = name;
        this.image = image;
        this.id = id;
        this.likes = likes;
        this.views = views;
    }
}

class SearchPage {

    addEvent(events) {

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
}

document.addEventListener("DOMContentLoaded", function (event) {

    let events = [

        new Event("Event2", "images/EventTest2.png", 2, 43, 312),
        new Event("Event3", "images/EventTest3.png", 3, 69, 420),
        new Event("Event4", "images/landingpage_bar.jpg", 4, 187, 666)

    ]

    new SearchPage().addEvent(events);
});