const initMap = () => {
  let myLatlng = { lat: 60.2055, lng: 24.6559 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatlng,
    zoom: 8,
    styles: [
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "weight": 1
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "weight": 0.8
              }
          ]
      },
      {
          "featureType": "landscape",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      }
  ]
  });
  map.panTo(myLatlng);
  return map;
};

const my_map = initMap();

// const locations = () => {

// }

const myLocation = new google.maps.LatLng(60.2055, 24.6559);
const myLocation2 = new google.maps.LatLng(39.9042, 116.4074);
const myLocation3 = new google.maps.LatLng(32.7767, -96.7970);

let espoo = () => {
  new google.maps.Marker({
    position: myLocation,
    map: my_map,
    title: "Hello World!"
  });
  my_map.panTo(myLocation);
};
document.getElementById("espooButton").addEventListener("click", espoo);

let beijing = () => {
  new google.maps.Marker({
    position: myLocation2,
    map: my_map,
    title: "Hello World!"
  });
  my_map.panTo(myLocation2);
};
document.getElementById("beijingButton").addEventListener("click", beijing);

let dallas = () => {
  new google.maps.Marker({
    position: myLocation3,
    map: my_map,
    title: "Hello World!"
  });
  my_map.panTo(myLocation3);
};
document.getElementById("dallasButton").addEventListener("click", dallas);

var url =
  "https://newsapi.org/v2/top-headlines?" + "country=us&" + "apiKey=e7de72f0c374405ca3e9de4e1da36d13";
var req = new Request(url);
fetch(req).then(function(response) {
  console.log(response.json());
});
