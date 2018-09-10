var axios = require('axios');

// var passage {
//     bookname: string;
// chapter: number;
// verse: number;
// text: string;
// }

const BRUrl = 'https://api.esv.org/v3/passage/html/';
const header = {
     'Authorization': 'Token ' + process.env.Bible_Key,
     'q': 'John+1'
     };

console.log("-- Starting BR Service -- ");
axios.get(BRUrl, { headers: header }).then(function (returnedData) { console.log(returnedData) }).catch(function (error) { console.log(error) });
console.log("-- Ending BR Service -- ");


// let dat = res.json();

module.exports = 'BR Done';

