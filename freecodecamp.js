function helloName(firstName, lastName) {
    if (typeof (lastName) == null || typeof (lastName) === "undefined") {
        return "Hello " + firstName + "!";
    }
    return "Hello " + firstName + " " + lastName + "!";
}

console.log(helloName("Anadi"));


function abSquare(number1, number2) {
    if (number1 < 0 || number2 < 0) {
        return undefined;
    }
    return Math.round(Math.pow(number1, 2) + Math.pow(number2, 2) + number1 * number2 * 2);
}

console.log(abSquare(10, 0));


var collections = {
    "1": {
        "artist_name": "Yolane Laguerre",
        "album_name": "Mrs",
        "genre": "country",
        "track_name": [
            "Rev",
            "ably",
            "helyuo"
        ]
    },
    "2": {
        "artist_name": "Viola Errowe",
        "album_name": "Honorable",
        "genre": "rock",
        "track_name": []
    },
    "3": {
        "artist_name": "Teena Comford",
        "genre": "jazz"
    },
    "4": {
        "artist_name": "Millicent Gribbell",
        "album_name": "Ms",
        "genre": "hip hop",
        "track_name": [
            "bongy",
            "kitty"
        ]
    }
};

function updateCollections(id, prop, value) {
    if (id == null || id == "undefined") {
        console.error("Id not found!")
        return collections;
    }
    if (prop == null || prop == "undefined") {
        console.error("property not defined!");
        return collections;
    }
    if (value == "undefined") {
        console.error("value not defined!");
        return collections;
    }

    if (value === null || value === "") {
        delete collections[id][prop];
    } else if (prop === "track_name") {
        collections[id][prop] = collections[id][prop] || [];
        collections[id][prop].push(value);
    } else {
        collections[id][prop] = value;
    }

    return collections;

}

console.log(JSON.stringify(updateCollections(undefined, "album_name", "Anadi")));

function printArrayElements(array) {
    array.forEach(element => console.log(element));
}

printArrayElements(["anadi", "asddsd", "dsdadasdasda", "sdasda"]);