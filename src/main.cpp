#define DEBUGLEVEL -1
#include <DebugUtils.h>  // used to simplyify debugging
// ^^^ this line must be at the top
#include <Arduino.h>            // Framework
#include <DNSServer.h>          // AP Mode
#include <ESPAsyncWebServer.h>  // Web server
#include <SPIFFS.h>             // to save a log
#include <WiFi.h>               // main WiFi library
#include <html.h>

#include <dwd.hpp>

#define BAUD 115200
#define AP_SSID "5G_Test_Antenna"

TIMER timer(5000);
int loopI = 0;

char wifi_ssid[32] = AP_SSID;
char wifi_password[63] = {0};

/* IP Address details */
IPAddress local_ip(192, 168, 0, 1);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

DNSServer dnsServer;
AsyncWebServer server(80);

void handleRoot(AsyncWebServerRequest* request);

void setup() {
    long randNumber;
    DEBUGSERIALBEGIN(BAUD);  // Serial.begine under debug utils
    DEBUGWHILENOTSERIAL;
    DEBUGPRINTLN1("Here we go!!!");

    randNumber = random(1, 99);
    sprintf(wifi_ssid, "%s_%d", AP_SSID, (int)randNumber);
    DEBUGPRINT1("SSID: ");
    DEBUGPRINTLN1(wifi_ssid);

    WiFi.disconnect();
    WiFi.mode(WIFI_OFF);
    WiFi.mode(WIFI_AP);
    WiFi.softAPConfig(local_ip, gateway, subnet);
    WiFi.softAP(wifi_ssid);
    delay(250);
    DEBUGPRINTLN1(WiFi.softAPIP());

    delay(250);

    SPIFFS.begin();
    server.on("/", handleRoot);
    server.on("/bundle.modern.js", HTTP_GET, [](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/bundle.modern.js", " text/javascript");
    });
    server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/style.css", "text/css");
    });
    server.on("/favicon.ico", HTTP_GET, [](AsyncWebServerRequest* request) {
        request->send(SPIFFS, "/favicon.ico", "image/x-icon");
    });
    server.onNotFound(handleRoot);

    dnsServer.start(53, "*", local_ip);
    server.begin();
    delay(250);
}

void loop() {
    dnsServer.processNextRequest();
    if (timer.checkInterval(true))
        DEBUGPRINTLN3(loopI++);
    delay(1);
}

void handleRoot(AsyncWebServerRequest* request) {
    DEBUGPRINTLN2("Server Root accessed");
    String html;

    html += htmlData;
    request->send(200, "text/html", html);
}
