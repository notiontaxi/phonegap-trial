
$(function() {


  var watchID = null
  var watching = false
  var $canvas = $('#myCanvas')


  $('#acc-action').click(function(e){
    console.log('start acc watching');
    if(!watching){
      document.addEventListener("deviceready", onDeviceReady, false);
      watching = true;
    }
    });

  $('#acc-action-stop').click(function(e){
    console.log('stop acc watching');
    if(watching){
      stopWatching();
      watching = true;
    }
    });  

    // Wait for cordova
    function onDeviceReady() {
        startWatching();
    }

    function startWatching() {
        var options = { frequency: 50 };
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }    

    function onSuccess(acceleration) {
        var element = $('#text');
        //var text = 'Acceleration X: ' + acceleration.x;

        var r = Math.round(acceleration.x)*20)%255
        var g = Math.round(acceleration.y)*20)%255
        var b = Math.round(acceleration.y)*20)%255

        var color = "#"+r+""+g+""+b;
        var invertedColor = "#"+255-r+""+255-g+""+255-b;

        element.html(color)    
        $canvas.css({
            background-color : color
          , color: invertedColor
        });
    }

    function onError(e) {
        var element = $('#container');
        element.innerHTML = 'ERROR';
        console.log(e);
    }
        

    function stopWatching() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }



});