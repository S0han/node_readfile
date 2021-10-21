var fs = require('fs');

fs.writeFile('text.txt', 'Node is pretty fun!', function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Write operation complete.');
    }
});