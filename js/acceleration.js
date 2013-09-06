/*
Modified example from:
http://docs.phonegap.com/en/3.0.0/cordova_accelerometer_accelerometer.md.html#Accelerometer
*/

$(function() {

  //window.addEventListener('resize', resizeCanvas, false)

  $('#acc-action').click(function(e){
    console.log('click...');
      // Wait for Cordova to load
    if(!watching){
      document.addEventListener("deviceready", onDeviceReady, false);
      watching = true;
    }
    });

    // The watch id references the current `watchAcceleration`
    var watchID = null
    var watching = false
    var currentContext
    var canvas = document.createElement('canvas')

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
        var options = { frequency: 50 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    function initializeCanvas(){

      var $referenceElement = $("#acc-action")
      var width = parseFloat($referenceElement.css("width"));

      //currentContext = createContext(width, 200)
      var canvas = document.getElementById("myCanvas")


      canvas.width  = 300
      canvas.height = 300
      canvas.style.width  = '300px'
      canvas.style.height = '300px'
      canvas.style.top  = '0px'
      canvas.style.left = '0px'      

      //resizeCanvas()
      currentContext = document.getElementById("myCanvas").getContext("2d")
      currentContext.clearRect( 0, 0, currentContext.canvas.width, currentContext.canvas.height)
      currentContext.rect(0,0,300,300);
    }

    function createContext(width, height) {
        
        canvas.width = width
        canvas.height = height

        var parent = $('#content-container')
        parent.append(canvas)
        return canvas.getContext("2d")
    }    

        
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
        var color = "#"+Math.round(acceleration.x)*20+""+Math.round(acceleration.y)*20+"50";
        element.html(color);
        
        currentContext.fillStyle = color;
        currentContext.fill();
    }

    // onError: Failed to get the acceleration
    //
    function onError(e) {
        var element = $('#container');
        element.innerHTML = 'ERROR';
        console.log(e);
    }


});