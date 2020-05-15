// #define DEBUGLEVEL 3
#include <DebugUtils.h>  // used to simplyify debugging
// ^^^ this line must be at the top
#include <Arduino.h>            // Framework
#include <DNSServer.h>          // AP Mode
#include <ESPAsyncWebServer.h>  // Web server
#include <ESPmDNS.h>            // Host name resolve
#include <SPIFFS.h>             // files
#include <WiFi.h>               // main WiFi library

#include <dwd.hpp>

#define AP_SSID "5G_Test_Antenna"
#define AP_HOST "5G_Test_Antenna"

// const TickType_t xDelay2 = 2 / portTICK_PERIOD_MS;  // 2Ms
TIMER timer(5000);
int loopI = 0;

/* Put your SSID & Password */
char wifi_ssid[32] = AP_SSID;
char wifi_password[63] = {0};
char Host_Name[32] = AP_HOST;

/* Put IP Address details */
IPAddress local_ip(192, 168, 0, 1);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

AsyncWebServer server(80);
DNSServer dnsServer;

// void notFound(AsyncWebServerRequest *request);

void setup() {
    // DEBUGSERIALBEGIN(BAUD);  // Serial.begine under debug utils
    delay(1000);

    DEBUGWHILENOTSERIAL;
    DEBUGPRINTLN1("Here we go!!!");

    WiFi.mode(WIFI_AP);
    WiFi.softAP(wifi_ssid, wifi_password);
    delay(250);
    WiFi.softAPConfig(local_ip, gateway, subnet);
    DEBUGPRINTLN1(WiFi.softAPIP());

    server.on("/", HTTP_GET, [](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/index.html", "text/html");
    });
    server.on("/error", HTTP_GET, [](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/error.html", "text/html");
    });
    server.on("/favicon.ico", HTTP_GET, [](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/favicon.ico", "image/x-icon");
    });
    server.onNotFound([](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/index.html", "text/html");
    });

    server.begin();
    DEBUGPRINTLN1("HTTP server started");

    if (!MDNS.begin(Host_Name)) {  //http://5G_Test_Antenna.local
        DEBUGPRINTLN1("Error setting up MDNS responder!");
    } else {
        DEBUGPRINTLN1("Created local DNS");
        MDNS.addService("http", "tcp", 80);
    }

    delay(5000);
}

void loop() {
    if (timer.checkInterval(true))
        DEBUGPRINTLN3(loopI++);
    delay(900);
}
