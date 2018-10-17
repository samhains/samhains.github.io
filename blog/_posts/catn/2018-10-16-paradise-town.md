---
title: Paradise Town
layout: post
categories: catn

---

Simulation seems to me like the 'holy grail' of computational narrative.  A system with well designed rules could conceivably provide an infinite, highly-flexible basis for a narrative world.  Once a simulation has been designed it could become the basis for any number of real-time content driven systems. My interest, in particular, is to use simulation as a basis for 'generative video' systems through visualization of the simulation in video or game engines.

Paradise Town is a reality television show that follows the lives of simulated people as they attempt to pursue a particular activity, but are constantly interrupted by their exhausting social life. I wanted to materialize the weirdness of 'simulated peoples' and build this uncanny aesthetic into the experience.

My goal was to learn the basics of how narrative simulations work and what they can do. [Seaduck](https://github.com/aparrish/seaduck) provided me with the conceptual foundation and lead me to working with an already fairly mature simulation framework - [James Ryan's 'Talk of the Town'](https://github.com/james-owen-ryan/talktown). This simulation framework provides the relationships, histories and interactions between characters in the form of a python object in memory.

I initially tried to use the simulation events to write a story for different kind of world ("entertainment machines in a paradise hotel") by writing a python/tracery script that acted as a 'world filter'. Once I understood more about how it worked, I realized this didn't make sense. The simulation would need a considerable rewriting or reskinning to give me the kind of 'lore' that I was interested in- a **considerable** project, in and of itself.

SO I decided to work _with_ the simulation, and create a
narrative from interpretation and parsing of its generated events. Talk Of The Town gives you a lot of things for free that would be useful to many simulations: Romance system, company histories, family trees etc. There is _a lot_ of potential in working with this framework, however it is still very labour intensive.  My approach of using [tracery grammars to articulate the events](https://github.com/samhains/talktown/blob/master/paradise_town.py#L98) is also slow and manual. I would spend more time organizing a more spacy/word-to-vec/corpus driven approach to flesh out grammars in the future.


This is a 'visualization' of an output from the Paradise Town script using Touch Designer. A rough draft to give myself a picture of a more complete video pipeline.

[PARADISE TOWN - JUDY EGGERTON - S02E02](https://vimeo.com/295661184/318ede9228)<br>
[The script](https://gist.github.com/samhains/d905e25fb14f99949a14e14eb837860b)

Here is my [ugly code](https://github.com/samhains/talktown/blob/master/paradise_town.py).

Overall, I found this to be an  educational task. I've somewhat demystified the narrative simulation ('bucket list' item crossed off?!?). Simulations require a tremendous amount _more_ planning, research and coding than I expected. But, I am not deterred.  

I plan to continue working with this medium.  I believe in its potential to offer a novel approach to creating video worlds. But I must return to books and research papers in this brief reprieve from homework overload to build a better idea of the kind of world and experience that I am wanting to simulate.
