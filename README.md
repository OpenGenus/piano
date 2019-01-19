# piano

## Requirements 

* node.js
* Video/Audio format converter
* FFmpeg framework
* ytdl-core

## Installation
  * [Video/Audio converter installation](https://www.npmjs.com/package/video-converter/)
  * [FFmpeg Installation](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg)
  * [ytdl-core Installation](https://www.npmjs.com/package/ytdl-core)
  * [play-sound Installation](https://www.npmjs.com/package/play-sound)
## Running
  To run the script four parameters are to be passed as command line arguments.
  * First, "URL" for downloading audio files from youtube ,or, "local" to convert a video file, in local disk, to audio file.
  * Second, the URL(enclosed in quotes), or, local file path(enclosed in quotes) of the video which is to be converted into audio.
  * Third, Starting time of the audio file in seconds.
  * Fourth, Duration of the audio file in seconds.
  * Fifth , "play" .Pass play as fifth argument if you want to play the audio after conversion.
  
    e.g : 
   
   * node converter.js URL "https://www.youtube.com/watch?v=ZwM5zmm-nkM&list=PL9FUXHTBubp-_e0wyNu1jfVVJ2QVAi5NW&index=2&t=0s" 2 3
   
   * node converter.js local "./sample_input/sample.mp4" 2 3
   
   * node converter.js URL "https://www.youtube.com/watch?v=ZwM5zmm-nkM&list=PL9FUXHTBubp-_e0wyNu1jfVVJ2QVAi5NW&index=2&t=0s" 2 3 play          (This plays the audio after conversion...)
