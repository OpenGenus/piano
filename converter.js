var ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const ytdl = require('ytdl-core');
var player = require('play-sound')(opts = {player : 'C:/Program Files/mplayer/mplayer'})
// var player = require('play-sound')(opts = {})
 /**
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)        
 **/
var control = process.argv[2];

if(control === "URL"){
    var URL = process.argv[3];
    
    var ytVideo = ytdl(URL,{ filter: 'audioonly'})
                  .pipe(fs.createWriteStream('./ytAudio/music.mp3'))
                  .on('finish', function(){
                    player.play('./ytAudio/music.mp3', function(err){
                      if (err) throw err
                    })
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
       // $ mplayer foo.mp3 
     player.play('./sample_output/output.mp3', function(err){
      if (err) throw err
    })
       
    }
  })

}





 
