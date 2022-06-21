const model = require("../models/searchBar-model");

class searchBarController {
    static REQUIRED = ["name", "image", "likes", "views", "location", "dates", "tags"];

    getEvents(req, res) {
        const events = model.getEvents();
        try {
            res.send(events)
        }catch (e) {
            throw new Error("Something went wrong!")
        }
    }

    checkEventProperties(res, place, id) {
        let result = true;

        const mandatoryNames = [...searchBarController.REQUIRED];

        if (id) {
            mandatoryNames.push("id");
        }

        const containedNames = mandatoryNames.filter(c => c in place);
        if (containedNames.length < mandatoryNames.length) {
            const necessary = mandatoryNames.join(", ");
            const contained = containedNames.length === 0 ? "none of those" : "only " + containedNames.join(", ");
            res.status(400).send(`Event data must include ${necessary}, but ${contained} present.`);
            result = false;
        }

        if (id && result) {
            if (place.id !== id) {
                res.status(400).send(`Event data can only be updated if the id in the path (${id}) and the id in the body (${place.id}) match.`);
                result = false;
            }
        }
        return result;
    }
}

module.exports = new searchBarController();