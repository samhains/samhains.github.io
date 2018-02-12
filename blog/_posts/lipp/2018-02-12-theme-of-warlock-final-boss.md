---
title: Theme of Warlock (Final Boss)
layout: post
categories: lipp

---

This week I was inspired by attending the [3LD Unzipped Vol. 4](https://www.3ldnyc.org/about.html). Seeing this show eased some of my anxieties about producing 'conceptual' audio visual performance, and gave me the confidence to continue pursuing what I would consider to be a more purely aesthetic exploration for now. I will write another blog post about the performance this week.

I returned to my touch designer project, and decided to strip it back and imbue it with more intention. As a result it has become a more focused 'sprite data curation tool'. I removed all effects, and added a few features including the ability to record the output of the program directly to a video file. Touch Designer can output textures directly to HAPQ format with alpha values, but I was unable to figure out how to get these to work in max.

Here is a demonstration of the TD tool. Any of these generated 'scenes' or 'textures' can be saved to a video file, which are then imported into my max project for mixing and effects.

{% include vimeo-player.html id=255403735 %}

I quickly created about 30 different textures in TD, then brought that into a video FX mixer that I am building in Max.

An initial experiment using jit.chromakey to overlay the sprite textures and some feedback produced some interesting results:

{% include vimeo-player.html id=255403568 %}

This is what the patch looks like:
![](/blog/assets/warlock_theme/2.PNG)

However, things became more interesting when I introduced some (lame and hacky) performance controls. I couldn't figure out a simple way to use my Midi controller.
![](/blog/assets/warlock_theme/1.PNG)

This was my first attempt performing with them:

{% include vimeo-player.html id=255403138 %}

_Theme of Warlock [Final Boss] (Monster in my Pocket), Hiroshi Takeyasu, Kozo Nakamura_




Here is my Max patch uploaded to a [gist](https://gist.github.com/samhains/a943963bd8f37a5b99b99024d095c755).
