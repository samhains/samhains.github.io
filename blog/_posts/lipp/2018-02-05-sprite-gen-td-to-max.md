---
title: Sprite Gen - TD to Max
layout: post
categories: lipp

---


This week I built performance controls into my touch designer project that creates generative pixel art scenes. I am also able to scrape and animate new random sprites in real-time - although I was unable to come up with a way to get meta-tag specific sprites.

![](/blog/assets/td_to_max/1.PNG)

These controls allow me connect a midi controller to my touch designer program and 'perform' the visuals. Much could be done to improve the aesthetics of this experience, some of my ideas include:
* A random 'walk' for each sprite
* A library of 'backgrounds'
* A more curated selection of sprites


![](/blog/assets/td_to_max/2.PNG)

I screen captured a 10 minute 'performance' and used ffmpeg to chop it up into 10 separate videos, which I then brought into max for further treatment.

Based on [Matt's 101 jitter examples](https://github.com/mromein/lipp_itp_2018/tree/master/class_2_jitter_video_101) I experimented with putting together a generative video mixer in Max.

![](/blog/assets/td_to_max/3.PNG)

Here is a video of some test results, I recommend 'clicking through' as it is a rough, generative demo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/M5vmhpvATfU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

This is my first time experimenting with using a Touch designer to Jitter work flow. It is interesting and I am open to further experimentation. My initial feelings about the comparison between TD and Jitter:
* You can do the same things in both Jitter in Touch Designer.
* If I am generous I feel Jitter might be a bit more direct for some things if you know how to find the right nodes (which is much harder to do due to obscure naming conventions)
* Touch Designer has much better performance and is more intuitive to use
