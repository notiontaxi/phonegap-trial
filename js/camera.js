
$(function() {

  var $canvas = $('#cam-canvas')
  var pictureSource; 
  var destinationType;

  $('#cam-action').click(function(e){
    document.addEventListener("deviceready", onDeviceReady, false);
  });

  $('#take-photo').click(function(e){
    navigator.camera.getPicture(
      drawPicture, 
      onError, { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: true });
 
  })


  // Wait for cordova
  function onDeviceReady() {
    console.log('starting camera example');
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;    
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