
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

    function drawMap(myLocation){
      console.log('starting geo example');

      var myPosition = new google.maps.LatLng(myLocation.coords.latitude,myLocation.coords.longitude)

      var mapOptions = {
        zoom: 15,
        center: myPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      // draw map and center at your position
      var map = new google.maps.Map($canvas[0], mapOptions)

      // place pake at your position
      var marker = new google.maps.Marker({
            position: myPosition,
            map: map,
            title: 'Your position'
        })
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