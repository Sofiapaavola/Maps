const initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  
  initMap();

const myLatlng = new google.maps.LatLng(60.2055, 24.6559);
const myLatlng2 = new google.maps.LatLng(39.9042, 116.4074);
const myLatlng3 = new google.maps.LatLng(32.7767, 96.7970);
const mapOptions = {
 zoom: 12,
 center: myLatlng
}
let map = new google.maps.Map(document.getElementById("map"), mapOptions);
const marker = new google.maps.Marker({
   position: myLatlng,
   title:"Hello World!"
});
const marker2 = new google.maps.Marker({
 position: myLatlng2,
 title:"Hello World!"
});
// To add the marker to the map, call setMap();
marker.setMap(map);
marker2.setMap(map);