// #define DEBUGLEVEL 3
#include <DebugUtils.h>  // used to simplyify debugging
// ^^^ this line must be at the top
#include <Arduino.h>  // Framework
#include <WiFi.h>     // main WiFi library

#include <dwd.hpp>

#define BAUD 115200
#define AP_SSID "5G_Test_Antenna"
#define AP_HOST "5G_Test_Antenna"

// const TickType_t xDelay2 = 2 / portTICK_PERIOD_MS;  // 2Ms
TIMER timer(5000);
int loopI = 0;

char wifi_ssid[32] = AP_SSID;
char wifi_password[63] = {0};
char Host_Name[32] = AP_HOST;

/* IP Address details */
IPAddress local_ip(192, 168, 0, 1);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

void setup() {
    long randNumber;
    DEBUGSERIALBEGIN(BAUD);  // Serial.begine under debug utils
    DEBUGWHILENOTSERIAL;
    DEBUGPRINTLN1("Here we go!!!");

    randNumber = random(1, 99);
    sprintf(wifi_ssid, "%s_%d", AP_SSID, (int)randNumber);
    DEBUGPRINT1("SSID: ");
    DEBUGPRINTLN1(wifi_ssid);

    WiFi.mode(WIFI_AP);
    WiFi.softAP(wifi_ssid, wifi_password);
    delay(250);
    WiFi.softAPConfig(local_ip, gateway, subnet);
    DEBUGPRINTLN1(WiFi.softAPIP());

    delay(1000);
}

void loop() {
    if (timer.checkInterval(true))
        DEBUGPRINTLN3(loopI++);
    delay(900);
}
