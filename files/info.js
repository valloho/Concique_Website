class Place{}

class infoBar {

    addToDOM(places) {

        for (const place of places){
            this.addPlaceToDOM(Object.assign(new Place(), place));
        }
    }

    addPlaceToDOM(place) {

        let div = document.createElement("div");
        div.id = place.id;
        document.getElementById("title_img").append(div);

        let h1 = document.createElement("h1");
        h1.append(place.name);
        div.append(h1);

        let img = document.createElement("img");
        img.src = place.image;
        img.setAttribute("class", "bar_img");
        h1.append(img);

        let p = document.createElement("p");
        p.append(place.description); //missing still
        document.getElementById("description").append(p);
    }

}

document.addEventListener("DOMContentLoaded", async function () {
    const infobar = new infoBar();

    const response = await fetch(`/api/bar/places/`); //places route fehlt!!
    if (!response.ok) {
        throw new Error(`Fetch error, something went wrong. status: ${response.status}`);
    }
    const places = await response.json();
    for (const place of Array.from(places).reverse()) {
        const placesJSON = await fetch(`/api/bar/places/${place.id}`);
        const places = await placesJSON.json();
        infobar.addToDOM(places);
    }


});
