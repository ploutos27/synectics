const fs = require('fs'),
      readline = require('readline');

module.exports =  async function (fileName) {
    let array = [];
    const fstream = fs.createReadStream(`./data/${fileName}.txt`, 'utf8'); // fileName = DEV-data.txt
    const rline = readline.createInterface({ // create interface to read line by line 
        input: fstream,
        crlfDelay: Infinity
    });

    for await (const line of rline) { // loop using async function 
        const splitDateInput = line.split('##'),  // using split to seperate data and number
              date = splitDateInput[0], //get 1st index of array (date)
              input = splitDateInput[1]; //get 2nd index of array (value)

        if (date.split('/')[2] === process.env.YEAR) // checking the date if correspond
            array.push(parseInt(input)) // store in arr and parse str to integer
    }
    return array; // return array
}