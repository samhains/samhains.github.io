---
title: Telephone Enclosure
layout: post
categories: intro-fab
published: true
---

For my [Physical Computing final](http://samhains.com/blog/physcomp/2017/11/15/concept-development-talking-to-machines.html), I needed to hack an old telephone that will be used to interact with a pile of electronic junk.

This telephone needs to plug into my audio interface, as well as house an Arduino to broadcast information about where the receiver.

**PARTS AND TOOLS**

* Dremmel
* Microphone
* Speakers
* Old Telephone
* Helping hands
* Drill Press
* Clamp


**PROCESS**

First, I opened up the telephone to find that I would need to create some space.

![](/blog/assets/fab_enclosure/1.jpg)


I decided to take the bottom of the telephone with a drill press to remove the old metal 'plug/screws'.

![](/blog/assets/fab_enclosure/3.jpg)

After a bit of trial and error with the drill bit, I found one that worked. I used a clamp to secure the telephone, and prepared the drill press.

![](/blog/assets/fab_enclosure/4.jpg)

It was obvious when the drill released the 'plug/screw' - It works great!

![](/blog/assets/fab_enclosure/5.jpg)

I removed the heart of the phone, which created the perfect amount of space for my Arduino and speakers.

![](/blog/assets/fab_enclosure/6.jpg)

![](/blog/assets/fab_enclosure/7.jpg)

The next step was to modify the receiver so that it could communicate with my audio interface. I removed the existing microphone.

I cracked open a dynamic microphone, and removed the microphone part. This piece was too large to fit inside my telephone receiver, so I needed to use the Dremmel to cut it down to size.

(Apologies for the lack of photos, I forgot to document this process)

I soldered the new Microphone to the telephone receiver, and connected this to the Arduino enclosure.

![](/blog/assets/fab_enclosure/8.jpg)

It works!

![](/blog/assets/fab_enclosure/9.jpg)


**CONCLUSION**

I am considering wiring up the Arduino directly to the 'bells' instead of faking the 'ring' with speakers, however I'm not sure this is the best use of a half-day/days work. The case seems to create a nice amount of resonance, even without 'speaker holes'.
