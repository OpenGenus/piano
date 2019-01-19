var ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const ytdl = require('ytdl-core');
var player = require('play-sound')(opts = {player : 'C:/Program Files/mplayer/mplayer'})

var control = process.argv[2];
var sound=process.argv[6];

if(control === "URL"){
    var URL = process.argv[3];
    
    var ytVideo = ytdl(URL,{ filter: 'audioonly'})
                  .pipe(fs.createWriteStream('./ytAudio/music.mp3'))
                  .on('finish', function(){
                    if(sound=='play')
                      play('./ytAudio/music.mp3');
                   })
}
else if(control === "local"){
  var videoPath = process.argv[3];
  //this converts seconds into miliseconds...
  var start = process.argv[4] * 1000; 
  //this converts seconds into miliseconds...      
  var duration = process.argv[5] * 1000;    

  function convert(input,output,start,duration,callback) {
    ffmpeg(input)
        .setStartTime(start)                   // this sets the starting time for the audio file....
        .duration(duration)                    // this is the duration for the audio file....
        .output(output)
        .on('end', function() {                    
            console.log('conversion ended');
            callback(null);
        }).on('error', function(err){
            console.log('error: ', e.code, e.msg);
            callback(err);
        }).run();
  }
  
  convert(videoPath, './sample_output/output.mp3',start, duration, function(err){
    if(!err) {
       console.log('conversion complete');
       if(sound=='play')
       play('./sample_output/output.mp3');
    }
  })

}

else if(control =='play'){
  var path = process.argv[3];
  play(path);
}

function play(path){
   player.play(path, function(err){
      if (err) throw err
   })
}





 
