// ---------------------------------------------------------------- //
// DM2007 RM3 ESP8266 Lesson
// Re-written by Jake Tan
// Using Arduino IDE 1.8.19
// Using NodeMCU ESP8266 1.0 (ESP 12-E)
// Tested on February 2023
// ---------------------------------------------------------------- //

/************************** Configuration ***********************************/

#include "secrets.h"

/************************ Example Starts Here *******************************/

String a;

// set up the 'words' feed
AdafruitIO_Feed *words = io.feed("words");

void setup() {
  // start the serial connection
  Serial.begin(115200);

  // wait for serial monitor to open
  while(! Serial);

  Serial.print("Connecting to Adafruit IO");

  // connect to io.adafruit.com
  io.connect();

  // wait for a connection
  while(io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  // we are connected
  Serial.println();
  Serial.println(io.statusText());
}

void loop() {
  // io.run(); is required for all sketches.
  // it should always be present at the top of your loop
  // function. it keeps the client connected to
  // io.adafruit.com, and processes any incoming data.
  io.run();

  while(Serial.available()) {
    a = Serial.readString();// read the incoming data as string
    sendWord();
  }



  // Adafruit IO is rate limited for publishing, so a delay is required in
  // between feed->save events. In this example, we will wait three seconds
  // (1000 milliseconds == 1 second) during each loop.
  delay(3000);
}

void sendWord() {
  Serial.print("sending -> ");
  Serial.println(a);

  words->save(a);
}
