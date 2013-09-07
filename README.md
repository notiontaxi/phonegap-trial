#PhoneGap#

The readme page and the source code of this repository was written for the course 'Current Trends in Web Standards-based UI Design', which took place at the HTW Berlin.

You can [download](https://build.phonegap.com/apps/541639/builds) the app and test it.
  
[Here](http://prezi.com/-yhprmlndddg/untitled-prezi/?utm_campaign=share&utm_medium=copy) you can find the corresponding presentation.




## What is PhoneGap? ##
PhoneGap is an open source (MIT license), cross platform framework. It allows the developer to write mobile applications in HTML, CSS and Javascript. With this single codebase PhoneGap can build native codes for iOS, Android, BlackBerry and other platforms which enables the developer to access the hardware of a mobile device. 
In other words: PhoneGap bridges the gap between web applications and native applications.

## Why do we need PhoneGap?##
One of the first questions, which you will ask your customer, when you want to develop software which can be used by smart phones and / or tablets is: “Which platforms should be supported?”  In most cases the answer will be something like: “Any platform”. From this point on, you can offer two different approaches to your customer. One is a website, which can be accessed by any mobile device with any platform. Once written in HTML, CSS and Javascript and running everywhere. The big disadvantage with this solution is, that you can`t access the hardware (camera, accelerator, GPS, etc.) of the device (for now). Another possible solution is the development of native applications. This means that you have to learn lots of programming languages, APIs and concepts. 


* iOS
  * Objective-C 
* Android 
  * Java (Dalvik VM)
* BlackBerry
  * Java/C++  
* Windows Phone
  * C#
  * VB.NET
  * JavaScript  
* Nokia
  * C++
  * Flash

*Listing 1: Platforms and their programming languages*

As you can see, both approaches have their benefits and disadvantages. The idea of mobile development tools like PhoneGap is to join the benefits of both approaches: 
  * The application is cross-platform
  * The apps are written in JS, HTML & CSS
  * You don’t need to know any native code
  * The application has access to the device (see listing 2)
The only disadvantage is, that the performance will never be as good as it would be with a native app.

![APIs availability for each device with PhoneGap](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing2.jpg "Title")
*Listing 2: APIs availability for each device with PhoneGap*

## History of PhoneGap ##
PhoneGap was founded by Nitobi (Vancouver, Canada). They started with JavaScript development and the idea to tailor Web applications for the mobile web in the late nineties. In the beginning there were only few possibilities for mobile web applications without any access to the hardware. In other words, there were only a couple of HTML and CSS files glued with JavaScript. For the hardware access, Nitobi developed a plugin structure for the different platforms. From 2008 on, PhoneGap has got support from several companies like Google, Blackberry and Windows. In 2009, PhoneGap won the  “top emerging enterprise technology” award for the category “cross-platform mobile app development”. The Version 1.0 was released in summer 2011. In October in the same year, Adobe purchased PhoneGap and donated the codebase to the Apache Foundation. In order to separate Adobes distribution of PhoneGap and the distribution from Apache, the latter was named Apache Cordova.
Adobes motives to buy this source code probably were the decreasing usage of Adobe Flash on - especially mobile - websites and the need to provide tools for mobile developing in Adobe Dreamweaver.

## How does PhoneGap work? ##
The basic idea is the usage of a so-called Chromeless Browser. A browser without any user interface elements, which is used as a blank platform for any application written in HTML, CSS and JavaScript. The browser has Access to the hardware of the device. In this way, the developer can access the hardware via the JavaScript API.
The plugin architecture allows to register all plugins which are needed for the application. The framework also allows to write and use own plugins. Every plugin has a specific native code for each supported platform and one implementation for the JavaScript API. 
Listing 3 shows the communication between the different layers. The native PhoneGap plug-ins are interacting with OS and the WebView (which is part of the Chromeless Browser). For all these functionalities which don‘t need a native implementation (for example rendering and HTML5 features), the WebView can communicate directly with the operating system.
  
![PhoneGap architecture](http://html5hu.files.wordpress.com/2011/10/phonegap-architecture-by-ibm-29-july-2011-modules-instead-plug-ins.jpg "PhoneGap architecture")
*Listing 3: PhoneGap architecture*

## Developing with PhoneGap ##
PhoneGap offers two different approaches to develop applications. Either with a SDK for each supported platform and building the application by yourself or with the usage of GitHub (uploading the code is also possible) and the PhoneGap build service. 
With the first approach the developer has full control over the whole building process. He can browse the native code and use IDE build-in device emulators. As already mentioned a SDK for each supported platform and different IDEs are needed. Developing for Android, Windows Phone and iOS means that at least two operating systems are required. Another interesting point is that choosing this way involves not worrying about public or private repositories and if the project should be open source or not.
The second approach is an „easy-as-it-can-be-solution“ for building mobile applications. But building doesn't mean debugging. This implies that updating the application on the phone is required every time it will be tested. Hydration provides a simple solution by delivering the updates directly to the device. 
How easy the build and update process is by using the PhoneGap build service, will be shown below.
  
![Account type: Adobe ID or github](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing5.jpg "Account types")
*Listing 5: Account type: Adobe ID or github*
  
The conjunction with GitHub is one of PhoneGaps biggest advantages. When signed in via the GitHub account, the developer can browse and choose all of his - private or public - repositories.
  
![Service agreement: free or paid](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing6.jpg "Service agreements")
*Listing 6: Service agreement: free or paid*
  
For open source projects or beginners who just want to test PhoneGap, the so called Free plan can be chosen. With unlimited open source and one private application all functionalities (including Hydration) can be used.

![Choice of the source codes origin](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing7.jpg "source code origin")
*Listing 7: Choice of the source codes origin*
  
As mentioned before, for each project a GitHub repository can be chosen. Alternatively the upload of a zipped file is possible.

![choosing a GitHub repository and enable/disable Hydration](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing8.jpg "choosing a GitHub repository")
*Listing 8: Choosing a GitHub repository and enable/disable Hydration*
  
![Building the application for the different platforms](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing9.png "Building the application")
*Listing 9: Building the application for the different platforms*
  
Once the source code is uploaded or the project is connected to a GitHub repository, rebuilds are possible and the ready-build applications for all platforms are available for download.

![Update detection and automatic update with Hydra](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing10.png "Use Hydra")

![Update detection and automatic update with Hydra](https://raw.github.com/notiontaxi/phonegap-trial/master/img/listing11.png "Hydra is good for you")
  
*Listing 10 and 11: Update detection and automatic update with Hydra*


## One simple example application ##
In this repository you can find a sample application, where you can see
  * How to use the [config.xml](https://build.phonegap.com/docs/config-xml)
  * How to use the [accelerometer](http://docs.phonegap.com/en/3.0.0/cordova_accelerometer_accelerometer.md.html#Accelerometer)
  * How to use the [geolocation](http://docs.phonegap.com/en/3.0.0/cordova_geolocation_geolocation.md.html#Geolocation) together with the [Google Maps API](https://developers.google.com/maps/mobile-apps?hl=de)
  * How to use the [camera](http://docs.phonegap.com/en/3.0.0/cordova_camera_camera.md.html#Camera)

## Sources ##
### Listings ###

[ 1 ] ROSS, Marcus: PhoneGap (2013) Page 2
  
[ 2 ] http://phonegap.com/about/feature/
  
[ 3 ] http://html5hu.files.wordpress.com/2011/10/phonegap-architecture-by-ibm-29-july-2011-modules-instead-plug-ins.jpg
  
[ 4 - 9 ] https://build.phonegap.com
  
[ 10 - 11 ]	Sceenshots from the authors device
  
### Literature ###

ROSS, Marcus:  PhoneGap (2013).
  
LUNNY, Andrew: PhoneGap Beginner’s Guide (2011).
