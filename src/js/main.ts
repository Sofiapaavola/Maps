const initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  
  initMap();


  var myLatlng = new google.maps.LatLng(60.2055, 24.6559);
var myLatlng2 = new google.maps.LatLng(41.002012, 28.980606);
var mapOptions = {
 zoom: 12,
 center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var marker = new google.maps.Marker({
   position: myLatlng,
   title:"Hello World!"
});
var marker2 = new google.maps.Marker({
 position: myLatlng2,
 title:"Hello World!"
});
// To add the marker to the map, call setMap();
marker.setMap(map);
marker2.setMap(map);