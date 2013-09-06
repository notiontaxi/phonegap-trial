
$(function() {


  var watchID = null
  var watching = false
  var $canvas = $('#geo-canvas')
  var map


  $('#geo-action').click(function(e){
    if(!watching){
      document.addEventListener("deviceready", onDeviceReady, false);
      watching = true;
    }
    });

  $('#geo-action-stop').click(function(e){
    if(watching){
      stopWatching();
      watching = false;
    }
    });  

    // Wait for cordova
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(drawMap, onError);
    }

    function drawMap(myLocation) {
      console.log('starting geo example');
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(myLocation.coords.latitude, myLocation.coords.longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map($canvas[0], mapOptions);
    }    

    function stopWatching() {
      console.log('stopping geo example');
    }

    function onError(e) {
        var element = $('#geo-text');
        element.innerHTML = 'ERROR';
        console.log(e);
    }

});