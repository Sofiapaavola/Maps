const initMap = () => {
    let myLatlng = { lat: 60.2055, lng: 24.6559 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
        lat: -33.89296209,
        lng: 151.1163801
        },
        scrollwheel: false,
        zoom: 14
    });
    map.panTo(myLatlng);
    return map;
    }
  
  var overlay = new google.maps.OverlayView();
  overlay.onAdd = function() {}
  overlay.draw = function() {}
  overlay.setMap(map);
  
  function googleProjection(prj) {
    return function(lnglat) {
      ret = prj.fromLatLngToDivPixel(new google.maps.LatLng(lnglat[1],lnglat[0]))
      return [ret.x, ret.y]
    };
  }
  
  map.addListener('idle', function() {
    
    // code to initialize svg and path
    var svg;
    var path;
    if(!svg) {
      var projection = googleProjection(overlay.getProjection());
      var northWest = projection([139.499822,-27.183773]);
      var southEast = projection([155.642935,-38.559921]);
      var width = southEast[0] - northWest[0];
      var height = southEast[1] - northWest[1];
      svg = d3.select(overlay.getPanes().overlayMouseTarget)
              .append("svg")
              .style("position", "absolute")
              .style("top", northWest[1])
              .style("left", northWest[0])
              .attr("height", height)
              .attr("width", width);
      path = d3.geo.path().projection(projection);
    }
    
    // add handler to clear svg contents on zoom change
    map.addListener('zoom_changed', function() {
      if(svg) {
        svg.selectAll("*").remove();
      }
    });
    
    // add handler to clear svg contents on drag drop
    map.addListener('dragend', function() {
      if(svg) {
        svg.selectAll("*").remove();
      }
    });
    
    d3.json('travelzone.json', function(error, data) {
      svg.selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr('transform', 'translate('+(-northWest[0])+' '+(-northWest[1])+')')
        .attr("d", path)
        .attr("fill", "#666666")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "black")
        .on("mouseover", mapMouseOver)
        .on("mouseout", mapMouseOut);
    });
  });
  
  var tipSvg = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('max-width', '400px')
    .style('height', 'auto')
    .style('background-color', '#ffffff')
    .style('opacity', 0)
    .style('width', 600);
  
  function mapMouseOver(d) {
    var tip = '<p>' + d.properties.nsw_loca_2 + '</p>';
    tipSvg.html(tip)
        .style('left', (d3.event.pageX) + 'px')
        .style('top', (d3.event.pageY) + 'px');
    tipSvg.transition()
        .duration(500)
        .style('opacity', 1);
  }
  
  function mapMouseOut(d) {
    tipSvg.transition()
          .duration(500)
          .style('opacity', 0);
  }
  
            
//   let myLatlng = { lat: 60.2055, lng: 24.6559 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: myLatlng,
//     zoom: 8,
//   });
//   map.panTo(myLatlng);
//   return map;
// };

const my_map = initMap();

const myLocation = new google.maps.LatLng(60.2055, 24.6559);
const myLocation2 = new google.maps.LatLng(39.9042, 116.4074);
const myLocation3 = new google.maps.LatLng(32.7767, -96.7970);
const myLocation4 = new google.maps.LatLng(48.1351, 11.5820);
const myLocation5 = new google.maps.LatLng(1.3521, 103.8198);
const myLocation6 = new google.maps.LatLng(40.4168, -3.7038);
const myLocation7 = new google.maps.LatLng(47.4979, 19.0402);
const myLocation8 = new google.maps.LatLng(51.5074, -0.1278);

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

let munich = () => { 
    new google.maps.Marker({
        position: myLocation4,
        map: my_map,
        title: "Hello World!"
      });
      my_map.panTo(myLocation4);
}
document.getElementById("munichButton").addEventListener("click", munich);

let singapore = () => { 
    new google.maps.Marker({
        position: myLocation5,
        map: my_map,
        title: "Hello World!"
      });
      my_map.panTo(myLocation5);
}
document.getElementById("singaporeButton").addEventListener("click", singapore);

let madrid = () => {
    new google.maps.Marker({
        position: myLocation6,
        map: my_map,
        title: "Hello World!"
      });
      my_map.panTo(myLocation6);
}
document.getElementById("madridButton").addEventListener("click", madrid);

let budapest = () => {
    new google.maps.Marker({
        position: myLocation7,
        map: my_map,
        title: "Hello World!"
    });
    my_map.panTo(myLocation7);
}
document.getElementById("budapestButton").addEventListener("click", budapest);


let london = () => {
    new google.maps.Marker({
        position: myLocation8,
        map: my_map,
        title: "Hello World!"
    });
    my_map.panTo(myLocation8);
}
document.getElementById("londonButton").addEventListener("click", london);




