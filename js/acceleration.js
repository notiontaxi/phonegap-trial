/*
Modified example from:
http://docs.phonegap.com/en/3.0.0/cordova_accelerometer_accelerometer.md.html#Accelerometer
*/

$(function() {

  $('#acc-action').click(function(e){
    console.log('click...');
      // Wait for Cordova to load
    if(!watching){
      document.addEventListener("deviceready", onDeviceReady, false);
      watching = true;
    }
    });

    // The watch id references the current `watchAcceleration`
    var watchID = null;
    var watching = false;
    var $canvas = $('#myCanvas');
    var ctx = $canvas[0].getContext("2d");

    

    // Cordova is ready
    //
    function onDeviceReady() {
        initializeCanvas();
        startWatch();
    }

    // Start watching the acceleration
    //
    function startWatch() {
        console.log('start watching');
        // Update acceleration every 3 seconds
        var options = { frequency: 75 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    function initializeCanvas(){

      $canvas.css({
          width:'100%'
        , height:'100%'
      })

      console.log("setting canvas rect to: width="+$canvas.css('width')+" height="+$canvas.css('height'))

      ctx.rect(0,0,$canvas.css('width'),$canvas.css('height'));
      ctx.fillStyle="red";
      ctx.fill();
    }


    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = $('#text');
        //var text = 'Acceleration X: ' + acceleration.x;
        var color = "#"+Math.round(acceleration.x)*20+"5050";
        element.html(color);

        ctx.fillStyle = color;
        ctx.fill();
    }

    // onError: Failed to get the acceleration
    //
    function onError(e) {
        var element = $('#container');
        element.innerHTML = 'ERROR';
        console.log(e);
    }


});