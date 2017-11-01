---
title: Fidget Spinner Switch to NeoPixel
layout: post
date: 2017-09-22 22:41:35 +0000
categories: physcomp
---
I used a glue gun to stick some magnets to a fidget spinner and use it as a switch. This switch was hooked into the Input of my Arduino, and used to animate a basic LED circle.

Instead of using standard LEDs, I decided to use a NeoPixel strip.“NeoPixel” is Adafruit's brand for individually-addressable RGB (Red Green Blue) color pixels.  These strips make it easier to work with light and colours without needing to wire up a whole lot of individual LED's to Arduino outputs manually.

{% include vimeo-player.html id=235165182 %}

{% include vimeo-player.html id=235098909 %}

The Arduino reads the 'on-off' values from the spinners magnet switch.  When the magnet of the spinner makes contact with the switch it is processed in the Arduino as an 'On state'. This pushes the program forward one step (propelling the LED spinner forward by one step) as long as the previous state read by the program was an 'Off'. This prevents the program from remaining on continuously if the spinner stops while making contact with the magnet switch.

The rainbow effect is created with the use of trigonometry functions. These functions, when applied to the number range used in RGB colours allow for us to rhythmically move through the colour spectrum.

At first, I attempted to implement the 'trails' effect through the standard NeoPixel Arduino Library.  However, the library is poorly documented and made the process of getting the RGB values for a given light complicated. In the NeoPixel library, RGB brightness values are stored as long, single digit integers. Seeing as I was interested in working and blending colours individually, this format was not useful for me.   The C++ code to extract these separate RGB values from the long integer was very ugly and confused me so I decided to switch over to FastLED.

FastLED has a far more simple API that seems to follow more modern programming patterns, and is maintained by an activate, open source community.  The documentation is clear and comprehensive. I would recommend to anyone wanting to do things with Arduino and LEDs.  It looks like they have some [Noise Functions](http://fastled.io/docs/3.1/group___noise.html) which I look forward to experimenting with in the future!

One proposed real-world application for this experiment would be a modular lighting toy for Children. With a magnetized fidget spinner, you could have a series of LEDs that snap together to create basic LED artworks.

Code for this project is hosted [here](https://github.com/samhains/pcomm_labs/blob/master/neo_pixel_spinner/neo_pixel_spinner.ino).