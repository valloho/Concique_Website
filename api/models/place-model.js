class Category{
    constructor(name, id, ...batches) {
        this.name = name;
        this.id = id;
        this.batches = batches;
    }
}


class Batch{
    constructor(number, id, ...dates) {
        this.number = number;
        this.id = id;
        this.dates = dates;
    }
}

class Date {
    constructor(date, id , ...places) {
        this.date = date;
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

class PlaceModel {
    static CATEGORY_ID = 1;
    static BATCH_ID = 1;
    static DATE_ID = 1;
    static PLACE_ID = 1;

    constructor() {
        this.places = new Map();
    }

    addCategory(category) {
        if (!this.places.get(category)){
            category.id = PlaceModel.CATEGORY_ID++;
            this.places.set(category, new Map());
        }
    }

    getCategories() {
        return Array.from(this.places.keys());
    }

    addBatches(batch) {
        if (!this.places.get(batch)){
            batch.id = PlaceModel.BATCH_ID++;
            this.places.set(batch, new Map());
        }
    }

    getBatches() {
        return Array.from(this.places.keys());
    }

    addDates(date) {
        if (!this.places.get(date)) {
            date.id = PlaceModel.DATE_ID++;
            this.places.set(date, new Map());
        }
    }

    getDates() {
        return Array.from(this.places.keys());
    }

    addPlace(category, batch, date, place) {
        if (!this.places.get(category)) {
            throw new Error(`Unknown place category ${category.name}`)
        }else if (!this.places.get(batch)) {
            throw new Error(`Unknown place batch ${batch.number}`)
        }else if (!this.places.get(date)) {
            throw new Error(`Unknown place date ${date.id}`)
        }
        place.id = PlaceModel.PLACE_ID++;
        this.getPlacesAsMap(category, batch, date).set(place.id, place)
    }

    resolveCategory(category) {
        if (typeof category === "string") {
            for (const [_category, _batch, _date, places] of this.places.entries()){
                if (_category.name === category) {
                    return _category;
                }
            }
            throw new Error(`Unknown place category ${category}`)
        }
        return category;
    }
    resolveBatch(batch) {
        if (typeof batch === "string") {
            for (const [_batch, _date, places] of this.places.entries()){
                if (_batch.number === batch) {
                    return _batch;
                }
            }
            throw new Error(`Unknown place batch ${batch}`)
        }
        return batch;
    }

    resolveDate(date) {
        if (typeof date === "string") {
            for (const [_date, places] of this.places.entries()){
                if (_date.id === date) {
                    return _date;
                }
            }
            throw new Error(`Unknown place date ${date}`)
        }
        return date;
    }

    getPlacesAsMap(category, batch, date) {
        return this.places.get(this.resolveCategory(category))
            .get(this.resolveBatch(batch)).get(this.resolveDate(date));
    }

    getCategory(id) {
        for (const [category, placesAsMap] of this.places.entries()) {
            const places = Array.from(placesAsMap.values());
            if (places.find(place => place.id === id)) {
                return category;
            }
        }
        return null;
    }

    getBatch(id) {
        for (const [batch, placesAsMap] of this.places.entries()) {
            const places = Array.from(placesAsMap.values());
            if (places.find(place => place.id === id)) {
                return batch;
            }
        }
        return null;
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

        const category = this.getCategory(id);
        const batch = this.getBatch(id);
        const date = this.getDate(id);
        if (category && batch && date) {
            place = this.places.get(category).get(batch).get(date).get(id);
        }
        return place;
    }

    createPlace(category, batch, date, place) {
        this.addPlace(category, batch, date, place);
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

        const category = this.getCategory(id);
        const batch = this.getBatch(id);
        const date = this.getDate(id);
        if (category && batch && date) {
            placeDeleted = this.places.get(category).get(batch).get(date).get(id);
        }
        return placeDeleted;
    }
}

const model = new PlaceModel();
const clubCategory = new Category("Club");
model.addCategory(clubCategory);
const batch1Batch = new Batch("batch1");
model.addBatches(batch1Batch);
const june23Date = new Date("Thursday, 23 June");
model.addDates(june23Date)
model.addPlace(clubCategory,batch1Batch, june23Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(clubCategory,batch1Batch, june23Date, new Place("Crazy Brudi", "images/landingpage_club.jpg",
    "69", "12940"));
const june24Date = new Date("Friday, 24 June");
model.addDates(june24Date);
model.addPlace(clubCategory,batch1Batch, june24Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(clubCategory,batch1Batch, june24Date, new Place("Volksgarden", "images/landingpage_club.jpg",
    "578", "2784"));
model.addPlace(clubCategory,batch1Batch, june24Date, new Place("Crazy Brudi", "images/landingpage_club.jpg",
    "69", "12940"));
const batch2Batch = new Batch("batch2");
model.addBatches(batch2Batch);
const june25Date = new Date("Saturday, 25 June");
model.addDates(june25Date);
model.addPlace(clubCategory,batch2Batch, june25Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(clubCategory,batch2Batch, june25Date, new Place("Volksgarden", "images/landingpage_club.jpg",
    "578", "2784"));
model.addPlace(clubCategory,batch2Batch, june25Date,new Place("Club bob loves clubbing", "images/landingpage_bar.jpg", "5622", "43"));

module.exports = model;