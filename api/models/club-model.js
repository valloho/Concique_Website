class Date {
    constructor(dateName, dateNumber, id) {
        this.dateName = dateName;
        this.dateNumber = dateNumber;
        this.id = id;
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


class ClubOfTheWeek{
    constructor(name, image, likes, views, id) {
        this.name = name;
        this.image = image;
        this.likes = likes;
        this.views = views;
        this.id = id;
    }
}

class ClubModel {
    static COTW_ID = 1;
    static DATE_ID = 1;
    static PLACE_ID = 1;

    constructor() {
        this.places = new Map();

    }

    addDates(date) {
        if (!this.places.get(date)) {
            date.id = ClubModel.DATE_ID++;
            this.places.set(date, new Map());
        }
    }

    getDates() {
        return Array.from(this.places.keys());
    }

    addClubOfTheWeek(clubOfTheWeek) {
        clubOfTheWeek.id = ClubModel.COTW_ID++;
    }

    addPlace(date, place) {
        if (!this.places.get(date)) {
            throw new Error(`Unknown place date ${date.dateNumber}`)
        }
        place.id = ClubModel.PLACE_ID++;
        this.getPlacesAsMap(date).set(place.id, place);
    }

    getPlaces(date) {
        return Array.from(this.getPlacesAsMap(date).values());
    }

    resolveDate(date) {
        if (typeof date === "string") {
            for (const [_date, places] of this.places.entries()){
                if (_date.dateNumber === date) {
                    return _date;
                }
            }
            throw new Error(`Unknown place date ${date}`)
        }
        return date;
    }

    getPlacesAsMap(date) {
        return this.places.get(this.resolveDate(date));
    }

    getDate(id) {
        for (const [date, placesAsMap] of this.places.entries()) {
            const places = Array.from(placesAsMap.values());
            if (places.find(place => place.id === id)) {
                return date;
            }
        }
        return null;
    }

    getPlace(id){
        if (typeof id !== "number") {
            throw new Error(`The ID must be a number, but it is a ${typeof id}`);
        }

        let place = null;

        const date = this.getDate(id);
        if (date) {
            place = this.places.get(date).get(id);
        }
        return place;
    }

    getClubOfTheWeek(id){
        if (!id) {
            throw new Error(`ID${id} doesn't exist`);
        }
        return clubOfTheWeeK1;
    }

    createPlace(date, place) {
        this.addPlace(date, place);
        return place;
    }

    updatePlace(id, place) {
        const placeToUpdate = this.getPlace(id);
        if (!placeToUpdate) {
            throw new Error(`Place with ID: ${id} doesn't exist and can't be updated`);
        }
        Object.assign(placeToUpdate, place);
        return placeToUpdate;
    }

    deletePlace(id) {
        let placeDeleted = false;
        const date = this.getDate(id);
        if (date) {
            placeDeleted = this.places.get(date).delete(id);
        }
        return placeDeleted;
    }
}

const model = new ClubModel();
const june25Date = new Date("Saturday, 25 June", "25.6", );
model.addDates(june25Date);
model.addPlace(june25Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(june25Date, new Place("Volksgarden", "images/landingpage_club.jpg",
    "578", "2784"));
model.addPlace(june25Date,new Place("Club bob loves clubbing", "images/landingpage_bar.jpg", "5622", "43"));
const june24Date = new Date("Friday, 24 June", "24.6");
model.addDates(june24Date);
model.addPlace(june24Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(june24Date, new Place("Volksgarden", "images/landingpage_club.jpg",
    "578", "2784"));
model.addPlace(june24Date, new Place("Crazy Brudi", "images/landingpage_club.jpg",
    "69", "12940"));
const june23Date = new Date("Thursday, 23 June", "23.6");
model.addDates(june23Date)
model.addPlace(june23Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(june23Date, new Place("Crazy Brudi", "images/landingpage_club.jpg",
    "69", "12940"));
const clubOfTheWeeK1 = new ClubOfTheWeek("Praterdome", "images/landingpage_club.jpg",
    "632", "30000", "2")
model.addClubOfTheWeek(clubOfTheWeeK1);

module.exports = model;