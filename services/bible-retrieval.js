var axios = require('axios');

// var passage {
//     bookname: string;
// chapter: number;
// verse: number;
// text: string;
// }

const BRUrl = 'https://api.esv.org/v3/passage/html/';
const header = {
    'Authorization': 'Token ' + process.env.Bible_Key
};
const param = {
    'q': 'John+1'
};

var returnPassage;

axios.get(BRUrl, {
    headers: header,
    params: param
}).then(function (returnedData) {
    // Deal with the returned data from returned json
    console.log("this is returned Data:" + returnedData);
    returnPassage = returnedData;
}).catch(function (error) {
    console.log(error)
});

console.log("this is returned Passage" + returnedPassage);
module.exports = returnPassage;