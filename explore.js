class Date {
    constructor(date, id , ...places) {
        this.date = date;
        this.id = id;
        this.places = places;
    }

}

class Place {
    constructor(name, image, id, likes, views) {
        this.name = name;
        this.image = image;
        this.id = id;
        this.likes = likes;
        this.views = views;
    }

}

class ExplorePage{

    addDates(dates){
        for (const date of dates){
            this.addDateToDOM(date);
            for (const place of date.places){
                this.addPlaceToDOM(date, place);
            }
        }
    }

    addDateToDOM(date){
        let newSection = document.createElement("section");
        newSection.setAttribute("id", date.id);
        newSection.setAttribute("class", "date");

        let newHeader = document.createElement("h3");
        newHeader.setAttribute("class", "dateText");
        newHeader.append(date.date)
        newSection.append(newHeader);

        document.querySelector("#batch1").append(newSection);
    }
    /*
    Comment: Not finished yet! works without it tho!
    addBatchToDOM(date, batch){
        let batchDiv = document.createElement("div");
        batchDiv.setAttribute("id", batch.id);

        let centreDiv5 = document.createElement("div");
        centreDiv5.setAttribute("class", "center");
        let centreDiv6 = document.createElement("div");
        centreDiv6.setAttribute("class", "center");

        let loadMore = document.createElement("div");
        loadMore.setAttribute("class", "loadMore");

        loadMore.append(centreDiv5);
        loadMore.append(centreDiv6);

        let moreDays = document.createElement("a");
        moreDays.setAttribute("id", "loadMoreText")
        moreDays.append("more days");
        centreDiv5.append(moreDays);

        let chevronDown = document.createElement("ion-icon");
        chevronDown.setAttribute("name", "chevron-down");
        chevronDown.setAttribute("id", "scrollDownIcon");
    }*/

    addPlaceToDOM(date, place){
        let newPlace = document.createElement("article");
        newPlace.setAttribute("id", place.id);

        let centreDiv1 = document.createElement("div");
        centreDiv1.setAttribute("class", "center");
        let centreDiv2 = document.createElement("div");
        centreDiv2.setAttribute("class", "center");
        let centreDiv3 = document.createElement("div");
        centreDiv3.setAttribute("class", "center");
        let centreDiv4 = document.createElement("div");
        centreDiv4.setAttribute("class", "center");

        newPlace.append(centreDiv1);

        let clubIMG = document.createElement("img");
        clubIMG.setAttribute("src", place.image)
        clubIMG.setAttribute("class", "otherClubsImg");
        centreDiv1.append(clubIMG);

        newPlace.append(centreDiv2);
        let newLabel = document.createElement("label");
        newLabel.setAttribute("class", "articleText");
        newLabel.append(place.name);
        centreDiv2.append(newLabel);
        let arrow = document.createElement("div");
        arrow.setAttribute("class", "arrow");
        let circle = document.createElement("div");
        circle.setAttribute("class", "circle")
        circle.append(arrow);
        centreDiv2.append(circle);

        newPlace.append(centreDiv3);
        let iconBorder1 = document.createElement("div");
        iconBorder1.setAttribute("class", "iconBorder");
        centreDiv3.append(iconBorder1);

        let heart = document.createElement("ion-icon");
        heart.setAttribute("name", "heart");
        iconBorder1.append(heart);
        let likesValue = document.createElement("label");
        likesValue.setAttribute("class", "values");
        likesValue.append(place.likes);
        iconBorder1.append(likesValue);

        newPlace.append(centreDiv4);
        let iconBorder2 = document.createElement("div");
        iconBorder2.setAttribute("class", "iconBorder");
        centreDiv4.append(iconBorder2);

        let eye = document.createElement("ion-icon");
        eye.setAttribute("name", "eye");
        iconBorder2.append(eye);
        let viewsValue = document.createElement("label");
        viewsValue.setAttribute("class", "values");
        viewsValue.append(place.views);
        iconBorder2.append(viewsValue);

        document.getElementById(date.id).append(newPlace);
    }
}


document.addEventListener("DOMContentLoaded", function (event) {
    let dates = [
            new Date("Friday, 17 June", "17/6/22",
                new Place("Praterdome","images/landingpage_club.jpg", "1", "632", "30000"),
                new Place("Crazy Brudi", "images/landingpage_club.jpg", "2", "69", "1294")),
            new Date("Saturday, 18 June", "18/6/22",
                new Place("DJ Kahled's home", "images/landingpage_bar.jpg", "3", "74", "3321"),
                new Place("Club bob loves clubbing", "images/landingpage_bar.jpg", "4", "43", "5622"))
    ];
    new ExplorePage().addDates(dates)
});