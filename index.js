'use strict';
let readFileLineByLine = require('./modules/read-file'),
    standardDeviation = require('./modules/sdt');
process.env.YEAR = '2000';


(async function() {
    const list = await readFileLineByLine('DEV-data');
    const std = await standardDeviation(list);
    console.log('Standard Deviation for year ' + process.env.YEAR + ' is ' + std );
})();


