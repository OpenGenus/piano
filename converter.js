var ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const ytdl = require('ytdl-core');
/**
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)        
 */
var videoPath = process.argv[2];
var URL = process.argv[3];
var start = process.argv[4];
var duration = process.argv[5];

var ytVideo=ytdl(URL,{ filter: 'audioonly'})
            .pipe(fs.createWriteStream('./ytAudio/music.mp3'));



function convert(input,output,start,duration,callback) {
    ffmpeg(input)
        .setStartTime(start)                      // this sets the starting time for the audio file....
        .duration(duration)                          // this is the duration for the audio file....
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
       //...

   }
});

console.log(process.argv);
