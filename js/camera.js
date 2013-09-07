
$(function() {

  var $canvas = $('#cam-canvas')

  $('#cam-action').click(function(e){
    document.addEventListener("deviceready", onDeviceReady, false);
  });

  $('#take-photo').click(function(e){
    navigator.camera.getPicture(
      drawPicture, 
      onError, { 
        quality: 50,
        destinationType: navigator.camera.DestinationType.DATA_URL 
      });
  })


  // Wait for cordova
  function onDeviceReady() {
    console.log('starting camera example');
  }

  function drawPicture(data){
    console.log(data)
    var image = $('#picture-frame')[0]
    image.style.display = 'block'
    image.src = "data:image/jpeg;base64," + data
  }

  function onError(e) {
      console.log(e);
  }

});