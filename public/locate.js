// Creating a map and tiles
const mymap = L.map('issMap').setView([0, 0], 1.5);

const attribution =
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

// Creating a marker with a custom icon
const issIcon = L.icon({
    iconUrl: 'img/iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
let first = true;

let globLat,globLon,globAlt;

async function getISS() {
    try{
        const response = await fetch(api_url);
        const data = await response.json();
    
        const { latitude, longitude, altitude } = data;
        const alt_km = altitude * 1.609344;
    
        globLat = latitude;
        globLon = longitude;
        globAlt = alt_km;
    
        marker.setLatLng([latitude, longitude]);
        if (first) {
            centerMap();
            first = false;
        }
    
        document.getElementById('lat').textContent = latitude.toFixed(2) + '°';
        document.getElementById('lon').textContent = longitude.toFixed(2) + '°';
        document.getElementById('alt').textContent = alt_km.toFixed(2) + ' km';
    }
    catch(err) {
        console.log(`Internal Server Error : ${err}`);
        alert('Some Error occured, Please try again');
    }

}

getISS();
window.setInterval(() => { getISS(); }, 1000);

function centerMap() {
    mymap.setView([globLat, globLon], 2);
}

async function saveData() {
    const data = {
        coords: {
            lat: globLat,
            lon: globLon,
            alt: globAlt
        }
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
        downloadFile(json);
    } catch(err) {
        console.log("Error", err.stack);
        console.log("Error", err.name);
        console.log("Error", err.message);
        console.log(`Internal Server Error: ${err}`);
        alert('Some Error occured, Please try again');
    }
}