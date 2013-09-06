
$(function() {

  var screenOrientation = function() {}

  screenOrientation.prototype.set = function(str, success, fail) {
    cordova.exec(null, null, "ScreenOrientation", "set", [str]);
  };
  navigator.screenOrientation = new screenOrientation();


  var watchID = null
  var watching = false
  var $canvas = $('#myCanvas')


  $('#acc-action').click(function(e){
    if(!watching){
      document.addEventListener("deviceready", onDeviceReady, false);
      watching = true;
    }
    });

  $('#acc-action-stop').click(function(e){
    if(watching){
      stopWatching();
      watching = false;
    }
    });  

    // Wait for cordova
    function onDeviceReady() {
        startWatching();
    }

    function startWatching() {
        navigator.screenOrientation.set('portrait')
        var options = { frequency: 300 };
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        console.log('start acc watching');
    }    

    function onSuccess(acceleration) {
        var element = $('#text');

        var r = (Math.round(acceleration.x)*20)%245
        var g = (Math.round(acceleration.y)*20)%245
        var b = (Math.round(acceleration.y)*20)%245

        r = (r < 0) ? (r * -1) : r
        g = (g < 0) ? (g * -1) : g
        b = (b < 0) ? (b * -1) : b

        r += 10
        g += 10
        b += 10  

        var color = "#"+r+""+g+""+b;
        var invertedColor = "#"+255-r+""+255-g+""+255-b;

        element.html(color)    
        $canvas.css({
            'background-color' : color
          , 'color': invertedColor
        });
    }

    function onError(e) {
        var element = $('#container');
        element.innerHTML = 'ERROR';
        console.log(e);
    }
        

    function stopWatching() {
        if (watchID) {
            navigator.screenOrientation.set('fullSensor')
            navigator.accelerometer.clearWatch(watchID);
            console.log('stop acc watching');
            watchID = null;
        }
    }



});