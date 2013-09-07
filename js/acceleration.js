
$(function() {


  var watchID = null
  var watching = false
  var $canvas = $('#acc-canvas')


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
        var options = { frequency: 100 };
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        console.log('start acc watching');
    }    

    function onSuccess(acceleration) {
        var $element = $('#acc-text');

        var r = (Math.round(acceleration.x)*20)%245
        var g = (Math.round(acceleration.y)*20)%245
        var b = (Math.round(acceleration.z)*20)%245

        r = (r < 0) ? (r * -1) : r
        g = (g < 0) ? (g * -1) : g
        b = (b < 0) ? (b * -1) : b

        r += 10;
        g += 10;
        b += 10 ; 

        var color = 'rgb('+r+','+g+','+b+')';
        $canvas.css('background-color', color)

        var invertedColor = 'rgb('+(255-r)+','+(255-g)+','+(255-b)+')';
        var text = color+" \n"+"X:"+acceleration.x+" Y:"+acceleration.y+" Z:"+acceleration.z
        $element.css('color', invertedColor)
        $element.html(text)   

    }

    function onError(e) {
        var element = $('#acc-text');
        element.innerHTML = 'ERROR';
        console.log(e);
    }
        

    function stopWatching() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            console.log('stop acc watching');
            watchID = null;
        }
    }



});