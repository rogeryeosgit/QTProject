var axios = require('axios');

// var passage {
//     bookname: string;
// chapter: number;
// verse: number;
// text: string;
// }

// var BRUrl = 'https://crossorigin.me/http://labs.bible.org/api/?passage=John+3:16-20&type=json';
// var BRUrl = 'https://crossorigin.me/http://www.esvapi.org/v2/rest/passageQuery?key=IP&passage=John+1';
const BRUrl = 'https://api.esv.org/v3/passage/html/';
const header = {
     'Authorization': 'Token ' + process.env.Bible_Key
     };
const params = {
    q: 'John+1'
};

console.log("-- Starting BR Service -- ");
axios.get(BRUrl, { headers: header }, { data: params }).then(function (returnedData) { console.log(returnedData) }).catch(function (error) { console.log(error) });
console.log("-- Ending BR Service -- ");


// let dat = res.json();

module.exports = 'BR Done';

