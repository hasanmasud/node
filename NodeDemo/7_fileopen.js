var fs = require('fs');

fs.open('input.txt', 'r+', function(err,fd){
	if(err){
		console.log(err)
	}
	console.log("File opened successfully!");
	
	   // Close the opened file.
    fs.close(fd, function(error){
       if (error){
          console.log(error);
       } 
       console.log("File closed successfully.");
    });
    
    
});

fs.stat('input.txt', function (err, stats) {
	   if (err) {
	       return console.error(err);
	   }
	   console.log(stats);
	   console.log("Got file info successfully!");
	   
	   // Check file type
	   console.log("isFile ? " + stats.isFile());
	   console.log("isDirectory ? " + stats.isDirectory()); 
	   
	
	});



