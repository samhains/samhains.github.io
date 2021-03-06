---
title: Sprite Gen - TD to Max
layout: post
categories: lipp

---


This week I built performance controls into my touch designer project that creates generative pixel art scenes.

![](/blog/assets/td_to_max/1.PNG)

These controls allow me connect a midi controller to my touch designer program and 'perform' the visuals. Much could be done to improve the aesthetics of this experience, some of my ideas include:
* A random 'walk' for each sprite
* A library of 'backgrounds'
* A more curated selection of sprites

![](/blog/assets/td_to_max/2.PNG)

I screen captured a 10 minute 'performance' and used ffmpeg to chop up the video into 10 separate videos, which I then brought into max for further treatment.

Based on [Matt's 101 jitter examples](https://github.com/mromein/lipp_itp_2018/tree/master/class_2_jitter_video_101) I experimented with putting together a generative video mixer in Max.

![](/blog/assets/td_to_max/3.PNG)

Here is a video of some test results, I recommend 'clicking through' rather than watching linearly:

{% include vimeo-player.html id=254343399 %}

This is still a purely aesthetic exploration. I am trying to come up with ways to bring this into a more conceptual performance but until I have an epiphany about this I'm going to keep trying to push the aesthetic further.  

I may need to come up with a different project for the purpose of performance.

This is my first time experimenting with using Touch designer and Jitter together. It is interesting and I am open to further experimentation. My initial feelings about the comparison between TD and Jitter:
* You can do the same things in both Jitter in Touch Designer.
* If I am generous I feel Jitter might be a bit more direct for some things if you know how to find the right nodes (which is much harder to do due to obscure naming conventions)
* Touch Designer has much better performance and is more intuitive to use
