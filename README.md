<p align="center">
  <a href="" rel="noopener">
 <img width=300px height=300px src="https://i.imgur.com/wh8ryeh.jpg" alt="Project logo"></a>
</p>

<h1 align="center">ESP32-5G-Test-Antenna-Joke</h1>


<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Release](https://img.shields.io/github/release/tterb/PlayMusic.svg?style=flat)]()
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

### Code for ESP32 to open a WiFi network with the SSID "5G Test Antenna" and a captive portal. containing a dummy data logger.
### The project is written using [Arduino](https://github.com/espressif/arduino-esp32) and [PlatformIO](https://github.com/platformio).
### The JavaScript portion of the project is written using [Preact](https://github.com/preactjs) & [Microbundle](https://github.com/developit/microbundle).
## The repository for the JS content used is [5G-Test-Antenna-Preact](https://github.com/RoiEf/Illuminati-5G-test-antenna-Preact)

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Making changes](#making_changes)
- [TODO](#todo)

## 🧐 About <a name = "about"></a>
### This project have 3 goals in mind.
#### 1. It's not the code - It's the idea:
The code in this project is very basic. there is nothing special about it. The important thing about this project is anoying some Clueless and Gullible conspiracy belevers and advocats. **Enjoy setting up this as a joke**
#### 2. It's not the idea. It's the Code...
The code in this project is very basic. A beginner in the field of IoT can easily learn from it and use it as an example on how to set a ESP32 micro-controller as a stand alone Access-Point.
#### 3. This project featurs elements written in JavaScript using ***Preact.js & Microbundle***
I beleve that the two are a great combination when there is a need to serve JS content from a IoT device.
This project use this combination, but in the most basic form of it.
**It can be a good learning repository for this type of combination**

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and deployment purposes.

### Prerequisites
This project was built using PlatformIO over VS-Code
Working on windows I also use [Git-SCM](https://git-scm.com/)
Given the nature of the project, I'm not going to go over how to install the three.
I'm also not going to explaing how to port this code for use with the official Arduino IDE.

### Installing
In order to get the project, just do a  *Git: checkout* to this repository.
Then run the *build* command in PlatformIO.
This will update all project libraries from GitHub.com and you are good to go.

### 🚀 Deployment <a name = "deployment"></a>
### After *build* complete seccessfully:
**First** use the ***Upload File Sysyem image***  PlatformIO Task.
This will create a \#SPIFFS directory on the ESP32 flash memory with the JavaScript, CSS and Icon files required for the HTML served by the ESP's web-server to work properly. 

**Then** just Upload the project to a ESP32 Device using the PlatformIO ***Upload*** Task.

### 🎈 Usage <a name="usage"></a>
Connect the ESP device containing the code to a USB Charger or a portable compatible power source.
The ESP device will run the code and create a WiFi network with the SSID of >5G_Test_Antenna_\#\#.
Where the \#\# will be replaced with a rundom number between 1 and 99. \(The number will change on each reboot\)

<img width=200px height=400px src="images\wifinetworks.png">

# Making changes to the code <a name="making_changes"></a>
## Editing the ESP32 IoT code:
All code is inside the *src* directory. the code is in C++ and using the *Arduino* Framework.
## Editing the HTML code:
The HTML code is inside *include\html.h*.
the code is inside a char arrey variable and set to **PROGMEM** mode to save ram.
The original HTML code is inside *html\index.html*. This is only for referance!!!
## Editing the CSS code:
The CSS code is inside *data\style.css*. This is also the actual fle that is being uploaded to the device and **NOT** just for referance.
## Editing the JavaScript code:
### The JS code is in a seperate repository!!!
It's location: [5G-Test-Antenna-Preact](https://github.com/RoiEf/Illuminati-5G-test-antenna-Preact)
Working on the code itself is beond the scope of this decomentation. **BUT:**
After finishing a build in the *5G-Test-Antenna-Preact* project, you need to copy the file "bundle.modern.js" from the *build* directory at the "Preact" project into the *data* directory in this project.

You might also need to copy and update other files such as *styles.css" or other, if you make any changed to them.

## TODO <a name="todo"></a>
### Add more lines of imaginery text into the dummi log displayed in the bogus terminal box.