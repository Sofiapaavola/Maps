!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var o,n,l=(o={lat:60.2055,lng:24.6559},(n=new google.maps.Map(document.getElementById("map"),{center:o,zoom:8,styles:[{featureType:"road",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#000000"},{weight:1}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#000000"},{weight:.8}]},{featureType:"landscape",stylers:[{color:"#ffffff"}]},{featureType:"water",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{elementType:"labels",stylers:[{visibility:"off"}]},{elementType:"labels.text",stylers:[{visibility:"on"}]},{elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{elementType:"labels.icon",stylers:[{visibility:"on"}]}]})).panTo(o),n),r=new google.maps.LatLng(60.2055,24.6559),i=new google.maps.LatLng(39.9042,116.4074),s=new google.maps.LatLng(32.7767,96.797);document.getElementById("espooButton").addEventListener("click",(function(){new google.maps.Marker({position:r,map:l,title:"Hello World!"}),l.panTo(r)}));document.getElementById("beijingButton").addEventListener("click",(function(){new google.maps.Marker({position:i,map:l,title:"Hello World!"}),l.panTo(i)}));document.getElementById("dallasButton").addEventListener("click",(function(){new google.maps.Marker({position:s,map:l,title:"Hello World!"}),l.panTo(s)}));var a=new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=e7de72f0c374405ca3e9de4e1da36d13");fetch(a).then((function(e){console.log(e.json())}))}]);