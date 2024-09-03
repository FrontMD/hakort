async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    const mapContainer = document.querySelector('[data-js="footerMapContainer"]')
    let coordsText = mapContainer.dataset.coords
    let coordsArr = coordsText.split(" ")

    coordsArr = coordsArr.map(item => item.split(",").reverse())

    console.log(coordsArr[0])

    const map = new YMap(
        mapContainer,
        {
            location: {
                center: coordsArr[0],
                zoom: 16
            }
        },
        [
            new YMapDefaultSchemeLayer({}),
            new YMapDefaultFeaturesLayer({})
          ]
    );

    coordsArr.forEach(coords => {        
        const markerElement = document.createElement('img');
          markerElement.className = 'map-block__placemark';
          markerElement.src = "./img/placemark.png";
          map.addChild(new YMapMarker({coordinates: coords}, markerElement));
    });

}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
})