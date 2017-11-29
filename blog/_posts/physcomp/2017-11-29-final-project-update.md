---
title: Pcomm Final Project Update
layout: post
categories: physcomp
published: true
---

I spent a lot of time over the last couple of weeks trying to refine some implementations of my ideas for this project.

I started to modify an old fashioned telephone, that will operate as the main source of interaction for the participant. The fabrication component of this is documented [here](http://samhains.com/blog/intro-fab/2017/11/29/telephone-enclosure.html).

After some trial and error, I managed to get the telephone speaking with my audio interface by cracking open a microphone and appropriating the dynamic microphone inside.

![](/blog/assets/pcomm_final_update/1.jpg)

Instead of spending a (vague) estimate of 1/2 to a day  wiring the telephone 'bells' to the Arduino, I have stashed a couple of speakers inside the Telephone.

I am in the process of wiring up the Telephone receiver switch to the Arduino's digital input. This switch will keep track of where the phone receiver is. I will need to figure out a way to wire up the pull-down resistor without the space for a full breadboard.

![](/blog/assets/pcomm_final_update/4.jpg)

I am also working on setting up a [force sensor](http://tinkersphere.com/sensors/1256-fsr-force-sensor-pressure-sensor-arduino-compatible.html) to communicate via the XBee microcontroller.  

![](/blog/assets/pcomm_final_update/2.jpg)

This was assisted with the help of Tom Igoes' 'Making Things Talk' book  (both PHP and Node.js versions).

![](/blog/assets/pcomm_final_update/3.jpg)

However, as I am using Touch Designer as the brains of my operation, I have needed to re-write the parsing code in python.

I have posted the code [here](https://gist.github.com/samhains/a149b8011280cb4f4e6b6451cd070d97).

It seems to be only partially-working at this stage -  every 2nd or 3rd value responds to force. The values are not expressing 'range' properly either, it seems they are almost 'on and off' at this stage.

I also spent time developing the audio-reactive visuals for the installation.  When the participant talks into the headset, they will hear a looping soundscape of their own voice in  the receiver. A combination of the raw voice sound, and the soundscape are analysed to influence the visuals.

This is a preview of where the visuals are at. I'm not quite happy with them yet. The first part, before it gets too trippy is a representation of the user approaching the installation. The second part is demonstrating what happens visually when they sit down, and answer the telephone.

{% include vimeo-player.html id=244959856 %}

Here is an earlier video of some testing done projecting onto the screens. (No modifications)
{% include vimeo-player.html id=243369842 %}

Hard to see from the video  (Couldn't figure out how to screencap with audio) but it has been really challenging to get some 'satisfying' audio-visual effects.  I'm still feeling like my method of audio analysis is a little clumsy and could use refinement.


**CONCLUSION**

There is more to do. I feel confident I can finish the basic physical components before user testing. However, I'd love to introduce some 'kinetic sculpture' to the 'pile of junk' that would respond to the voice. I feel this might bring it to life.

I still need to keep pushing the interaction and the aesthetic to create something more entertaining and interesting.
