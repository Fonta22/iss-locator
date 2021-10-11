# ISS-Locator

ISS-Locator uses the `wheretheiss.at` API to **geolocate** the **International Space Station** in real time.
This project was inspired by [Daniel Shiffman](https://github.com/shiffman) and [Where the ISS at](https://wheretheiss.at/).

## Requirements

### [Express](https://www.npmjs.com/package/express)

To install **express** you just need to run this command in your terminal:

```
npm i express
```

## Serving

To start serving ISS-Locator, do the following steps:

- Run `app.js`

- Navigate to `localhost:3000` in your browser

## Libraries used

These are the **libraries** that were used. Without them the project would'nt be possible to be made!

There is no need to install them because are already imported with [jsDelivr](https://www.jsdelivr.com/) and [unpkg](https://unpkg.com/) in the **HTML**.

### [Leaflet](https://leafletjs.com/)

Map **interface**.

### [OpenStreetMap](https://www.openstreetmap.org/)

The actual **map engine** that displays the visuals.

### [Bootstrap](https://getbootstrap.com/)

Used for the **styling**.

## API used

[Where the ISS at](https://wheretheiss.at)'s API actually provides all the data used for the project!

You can find all the information on how to use it here: https://wheretheiss.at/w/developer