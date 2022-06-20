/*
class Category {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}


class Batch {
    constructor(number, id) {
        this.number = number;
        this.id = id;
    }
}
*/
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

class PlaceModel {
    /*
    static CATEGORY_ID = 1;
    static BATCH_ID = 1;
     */
    static DATE_ID = 1;
    static PLACE_ID = 1;

    constructor() {
        /*
        this.batches = new Map();
        this.dates = new Map();
         */
        this.places = new Map();
    }
    /*

    addCategory(category) {
        if (!this.batches.get(category)){
            category.id = PlaceModel.CATEGORY_ID++;
            this.batches.set(category, new Map());
        }
    }

    getCategories() {
        return Array.from(this.batches.keys());
    }

    addBatches(batch) {
        if (!this.dates.get(batch)){
            batch.id = PlaceModel.BATCH_ID++;
            this.dates.set(batch, new Map());
        }
    }
    getBatches() {
        return Array.from(this.dates.keys());
    }
     */

    addDates(date) {
        if (!this.places.get(date)) {
            date.id = PlaceModel.DATE_ID++;
            this.places.set(date, new Map());
        }
    }

    getDates() {
        return Array.from(this.places.keys());
    }

    addPlace(/*category, batch,*/ date, place) {
        /*
        if (!this.batches.get(category)) {
            throw new Error(`Unknown batch category ${category.name}`)
        }else if (!this.dates.get(batch)) {
            throw new Error(`Unknown place batch ${batch.number}`)
        }else */if (!this.places.get(date)) {
            throw new Error(`Unknown place date ${date.dateNumber}`)
        }
        place.id = PlaceModel.PLACE_ID++;
        this.getPlacesAsMap(date).set(place.id, place);
    }

    getPlaces(date) {
        return Array.from(this.getPlacesAsMap(date).values());
    }
    /*
    resolveCategory(category) {
        if (typeof category === "string") {
            for (const [_category, batches] of this.batches.entries()){
                if (_category.name === category) {
                    return _category;
                }
            }
            throw new Error(`Unknown batch category ${category}`)
        }
        return category;
    }
    resolveBatch(batch) {
        if (typeof batch === "string") {
            for (const [_batch, dates] of this.dates.entries()){
                if (_batch.number === batch) {
                    return _batch;
                }
            }
            throw new Error(`Unknown place batch ${batch}`)
        }
        return batch;
    }
     */

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
    /*
    getBatchesAsMap(category) {
        return this.batches.get(this.resolveCategory(category))
    }

    getDatesAsMap(batch) {
        return this.dates.get(this.resolveBatch(batch))
    }*/

    getPlacesAsMap(date) {
        return this.places.get(this.resolveDate(date));
    }
    /*
    getCategory(id) {
        for (const [category, batchesAsMap] of this.batches.entries()) {
            const batches = Array.from(batchesAsMap.values());
            if (batches.find(batch => batch.number === id)) {
                return category;
            }
        }
        return null;
    }

    getBatch(id) {
        for (const [batch, datesAsMap] of this.places.entries()) {
            const dates = Array.from(datesAsMap.values());
            if (dates.find(date => date.date === id)) {
                return batch;
            }
        }
        return null;
    }

     */

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

    createPlace(/*category, batch, */date, place) {
        this.addPlace(/*category, batch, */date, place);
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
        /*
        const category = this.getCategory(id);
        const batch = this.getBatch(id);
         */
        const date = this.getDate(id);
        if (/*category && batch && */date) {
            placeDeleted = this.places.get(date).delete(id);
        }
        return placeDeleted;
    }
}

const model = new PlaceModel();
/*
const clubCategory = new Category("Club");
model.addCategory(clubCategory);
const batch1Batch = new Batch("batch1");
model.addBatches(batch1Batch);

 */
const june23Date = new Date("Thursday, 23 June", "23.6");
model.addDates(june23Date)
model.addPlace(june23Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(june23Date, new Place("Crazy Brudi", "images/landingpage_club.jpg",
    "69", "12940"));
const june24Date = new Date("Friday, 24 June", "24.6");
model.addDates(june24Date);
model.addPlace(june24Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(june24Date, new Place("Volksgarden", "images/landingpage_club.jpg",
    "578", "2784"));
model.addPlace(june24Date, new Place("Crazy Brudi", "images/landingpage_club.jpg",
    "69", "12940"));
/*
const batch2Batch = new Batch("batch2");
model.addBatches(batch2Batch);

 */
const june25Date = new Date("Saturday, 25 June", "25.6", );
model.addDates(june25Date);
model.addPlace(june25Date, new Place("Praterdome", "images/landingpage_club.jpg",
    "632", "30000"));
model.addPlace(june25Date, new Place("Volksgarden", "images/landingpage_club.jpg",
    "578", "2784"));
model.addPlace(june25Date,new Place("Club bob loves clubbing", "images/landingpage_bar.jpg", "5622", "43"));

module.exports = model;