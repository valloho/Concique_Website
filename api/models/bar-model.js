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

class BarModel {
    static DATE_ID = 1;
    static PLACE_ID = 1;

    constructor() {
        this.places = new Map();

    }

    addDates(date) {
        if (!this.places.get(date)) {
            date.id = BarModel.DATE_ID++;
            this.places.set(date, new Map());
        }
    }

    getDates() {
        return Array.from(this.places.keys());
    }

    addPlace(date, place) {
        if (!this.places.get(date)) {
            throw new Error(`Unknown place date ${date.dateNumber}`)
        }
        place.id = BarModel.PLACE_ID++;
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
        const numberID = parseInt(id)
        if (typeof numberID !== "number") {
            throw new Error(`The ID must be a number, but it is a ${typeof numberID}`);
        }

        let place = null;

        const date = this.getDate(numberID);
        if (date) {
            place = this.places.get(date).get(numberID);
        }
        return place;
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

const modelBar = new BarModel();
const june25Date = new Date("Saturday, 25 June", "25.6", );
modelBar.addDates(june25Date);
modelBar.addPlace(june25Date, new Place("Moby Dick", "images/bars/moby-dick.jpg",
    "69", "12940"));
modelBar.addPlace(june25Date, new Place("Loos Bar", "images/bars/loos-bar.jpg",
    "69", "12940"));
const june24Date = new Date("Friday, 24 June", "24.6");
modelBar.addDates(june24Date);
modelBar.addPlace(june24Date, new Place("Eissalon Bar", "images/bars/eissalon-bar.jpg",
    "632", "30000"));
modelBar.addPlace(june25Date, new Place("Kleinod", "images/bars/kleinod.jpg",
    "632", "30000"));
modelBar.addPlace(june25Date, new Place("Luster", "images/bars/luster.jpg",
    "632", "30000"));
modelBar.addPlace(june24Date, new Place("Moby Dick", "images/bars/moby-dick.jpg",
    "69", "12940"));
modelBar.addPlace(june24Date, new Place("Loos Bar", "images/bars/loos-bar.jpg",
    "69", "12940"));
const june23Date = new Date("Thursday, 23 June", "23.6");
modelBar.addDates(june23Date)
modelBar.addPlace(june23Date, new Place("Eissalon Bar", "images/bars/eissalon-bar.jpg",
    "632", "30000"));
modelBar.addPlace(june23Date, new Place("Kleinod", "images/bars/kleinod.jpg",
    "632", "30000"));
modelBar.addPlace(june23Date, new Place("Luster", "images/bars/luster.jpg",
    "632", "30000"));
modelBar.addPlace(june23Date, new Place("Moby Dick", "images/bars/moby-dick.jpg",
    "69", "12940"));
modelBar.addPlace(june23Date, new Place("Loos Bar", "images/bars/loos-bar.jpg",
    "69", "12940"));

module.exports = modelBar;