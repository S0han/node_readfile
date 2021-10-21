var fs = require('fs');

fs.appendFile('text.txt', 'My cousin is invited ot the party!', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Append operation complete.');
    }
});