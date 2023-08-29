export default function streetMap() {
    const coords = [44.758532218038226, 10.665754847153554];
    const addressText = 'Sede Operativa: Via Giacomo Brodolini';

    let map = L.map('map').setView(coords, 8.5);

    let myIcon = L.icon({
        iconUrl: 'assets/i/static/map-icon.png',
        iconSize: [38, 38],
        iconAnchor: [38, 38],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    L.marker(coords, {icon: myIcon})
        .bindTooltip(addressText, {
            direction: 'right',
            offset: [-10, -30],
            permanent: false,
        })
        .addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 24,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
}


