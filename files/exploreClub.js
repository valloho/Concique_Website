class Batch {
    constructor(number, id, ...dates) {
        this.number = number;
        this.id = id;
        this.dates = dates;
    }
}
class Date {
    constructor(dateName, dateNumber, id, ...places) {
        this.dateName = dateName;
        this.dateNumber = dateNumber;
        this.id = id;
        this.places = places;
    }
}

class Place {
    constructor(name, image, likes, views, id) {
        this.name = name;
        this.image = image;
        this.likes = likes;
        this.views = views;
        this.id = id;
    }
}

class ExplorePage{
    addPlaceOfTheWeekToDOM(place){
        let divPOTW = document.createElement("div");
        divPOTW.setAttribute("class", "clubOfTheWeek");

        let centerDiv1 = document.createElement("div");
        centerDiv1.setAttribute("class", "center");
        let centerDiv2 = document.createElement("div");
        centerDiv2.setAttribute("class", "center");
        divPOTW.append(centerDiv1);

        let imgPOTW = document.createElement("img");
        imgPOTW.setAttribute("src", place.image);
        imgPOTW.setAttribute("class", "cotwIMG");
        centerDiv1.append(imgPOTW);

        document.querySelector("#container").append(centerDiv2);

        let nameOfPOTW = document.querySelector("#nameOfCOTW")
        nameOfPOTW.append(place.name);

        document.querySelector("#center").append(divPOTW);
    }

    addBatches(batches){
        try {
            for (const batch of batches) {
                this.addBatchToDOM(batch);
                for (const date of batch.dates) {
                    this.addDateToDOM(batch, date);
                    for (const place of date.places) {
                        this.addPlaceToDOM(batch, date, place)
                    }
                }
            }
        }catch (e){
            swal("error", "No more days can be loaded, please try again tomorrow", "error")
        }
    }

    addBatchToDOM(batch){
        let batchDiv = document.createElement("div");
        batchDiv.setAttribute("name", batch.number);

        let sectionsDiv = document.createElement("div");
        sectionsDiv.setAttribute("id", batch.id);
        batchDiv.append(sectionsDiv);

        document.querySelector("#batches").append(batchDiv);
    }

    addDateToDOM(batch, date){
        let newSection = document.createElement("section");
        newSection.setAttribute("id", date.id);
        newSection.setAttribute("class", "date");

        let newHeader = document.createElement("h3");
        newHeader.setAttribute("class", "dateText");
        newHeader.append(date.date)
        newSection.append(newHeader);

        document.getElementById(batch.id).append(newSection);
    }

    addPlaceToDOM(batch, date, place){
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


document.addEventListener("DOMContentLoaded", function () {
    let clubOfTheWeekDay1 = [
            new Place("Praterdome","images/landingpage_club.jpg", "1", "632", "30000")
    ];
    let clubOfTheWeekDay2 =[
            new Place("DJ Kahled's home", "images/landingpage_bar.jpg", "3", "74", "3321")
    ]

    let clubOfTheWeek = [clubOfTheWeekDay1, clubOfTheWeekDay2];


    let batchClub1 = [
        new Batch("batch1", "batchClub1",
            new Date("Friday, 17 June", "17/6/22",
                new Place("Praterdome","images/landingpage_club.jpg", "1", "632", "30000"),
                new Place("Crazy Brudi", "images/landingpage_club.jpg", "2", "69", "1294")),
            new Date("Saturday, 18 June", "18/6/22",
                new Place("DJ Kahled's home", "images/landingpage_bar.jpg", "3", "74", "3321"),
                new Place("Club bob loves clubbing", "images/landingpage_bar.jpg", "4", "43", "5622")))
    ];
    let batchClub2 = [
        new Batch("batch2", "batchClub2",
            new Date("Sunday, 19 June", "19/6/22",
                new Place("Praterdome","images/landingpage_club.jpg", "5", "632", "30000")),
            new Date("Monday, 20 June", "20/6/22",
                new Place("Club bob loves clubbing", "images/landingpage_bar.jpg", "6", "43", "5622")))
    ];
    let batchesClub = [batchClub1, batchClub2];

    const explorePage = new ExplorePage();
    explorePage.addPlaceOfTheWeekToDOM(clubOfTheWeekDay1[0]);
    let batchNumber = 0;
    explorePage.addBatches(batchesClub[batchNumber]);

    let moreDays = document.getElementById('loadMoreText');
    moreDays.addEventListener("click", function (){
        batchNumber++;
        explorePage.addBatches(batchesClub[batchNumber]);
    });
    let scrollDownIcon = document.getElementById('scrollDownIconArea');
    scrollDownIcon.addEventListener("click", function (){
        batchNumber++;
        explorePage.addBatches(batchesClub[batchNumber]);
    });
});