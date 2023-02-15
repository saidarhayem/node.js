var fs = require('fs');

// fs.writeFile('welcome.txt', "Hello Node", function (err, data) {
//     err ? console.log(err) : console.log(data);
    
// });
fs.readFile('welcome.txt', function (err, data) {
        err ? console.log(err) : console.log(data.toString());
        
    });

