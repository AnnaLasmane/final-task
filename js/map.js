let map;

function initMap() {
    const jurmala = { lat: 56.96630, lng: 23.744458 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: jurmala,
    });
    const marker = new google.maps.Marker({
        position: jurmala,
        map: map,
    });
}