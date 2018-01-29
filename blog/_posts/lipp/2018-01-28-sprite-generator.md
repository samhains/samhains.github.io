---
title: Sprite Generator
layout: post
categories: lipp

---

As a side project for this week, I decided to build a sprite generator. The goal was to build a system which could take/scrape sprite sheets (see below) from websites such as [spritedatabase.net](http://spritedatabase.net/) and procedurally animate them.

![](/blog/assets/sprite_gen/1.PNG)

The goal is to create generative pixel art scenes that could be used in a performance context.

Some vague ideas about where this could be used:

* Performance where I am performing endless, absurd labour tending to a virtual farm, fishtank etc. while my life falls apart
* A parody and pastiche of Video-game streaming culture where I walk an audience through a game where the only mechanic is death and complexity
* More abstract video performances that combine aesthetics from virtual worlds and pixel art. Base materials might be built from 'field recordings in virtual space'.
* An twisted, futuristic arcade generator game, where the game is purely about generation of complexity.

I built a python script that uses computer vision technology to locate the sprites in the sheet, then procedurally cut them up and turn them into image sequence animations. The code for this can be seen [here](https://github.com/samhains/sprite-generator):

It works pretty well!

I built a basic environment in Touch Designer to procedurally place and scatter the sprites. Some screenshots and footage from this system are seen here:

{% include vimeo-player.html id=253171702 %}

![](/blog/assets/sprite_gen/3.PNG)

{% include vimeo-player.html id=253171775 %}

![](/blog/assets/sprite_gen/2.PNG)

This is a very 'uncurated', first play with these new tools. I like the chaos, and colours and complexity of the aesthetic - but it is just a start. Some things I want to try next are:

* Add performance controls to enlarge sprite and move sprite and generate new screen.
* Give sprites a random walk to enhance the 'feedback trails effect'
* Playing with different backgrounds
* Working with more curated and conceptual datasets of sprites
* Incorporate footage from other virtual environments
* Add probability of different sprite enclosures - sprites in jail? sprites at work? etc.
