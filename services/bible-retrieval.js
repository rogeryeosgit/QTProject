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
const header =  'Authorization: Token 4c2862b12a9a30a9abe905d718f1362a05ebb418';
const params = {
    q: 'John+1'
}

console.log("-- Starting BR Service -- ");
axios.get(BRUrl, { headers: header }, params).then(data => console.log(data)).catch(error => console.log(error));
console.log("-- Ending BR Service -- ");


// let dat = res.json();

module.exports = 'BR Done';

