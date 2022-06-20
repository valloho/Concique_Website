const model = require("../models/place-model");

class PlaceController {
        static REQUIRED = ["name", "image", "likes", "views"];

        getCategories(req, res){
            res.send(model.getCategories());
        }

        getBatches(req, res){
            res.send(model.getBatches())
        }

        getDates(req, res) {
            res.send(model.getDates());
        }

        getCategoryBatches(req, res) {
            res.send(model.getBatches(req.params.category));
        }

        getBatchDates(req, res) {
            res.send(model.getDates(req.params.batch));
        }

        getDatePlaces(req, res) {
            res.send(model.getPlaces(req.params.dte));
        }

        getPlace(req, res){
            const place = model.getPlace(req.params.id);
            if (place) {
                res.send(place);
            } else {
                res.status(404).send(`Place with ID: ${req.params.id} not found`)
            }
        }
        getPlaces(req, res) {
            res.send(model.getPlaces())
        }




}

module.exports = new PlaceController();