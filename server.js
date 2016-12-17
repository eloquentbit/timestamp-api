const express = require('express');
const moment = require('moment');

const app = express();

app.get('/:date', function(req, res) {
    
    var parseDate = moment(req.params.date, 'MMMM D YYYY');
    
    if (parseDate.isValid()) {
        res.json({
            unix: parseDate.format('X'),
            natural: parseDate.format('MMMM D, YYYY')
        });
    } else {
        res.json({unix: 'null', natural: 'null'});
    }
});

app.listen('8080', function() {
    console.log('Timestamp app listening on port 8080');
});