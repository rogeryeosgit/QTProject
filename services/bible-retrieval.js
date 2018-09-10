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

getBiblePassage();

async function getBiblePassage() {
    await axios.get(BRUrl, {
        headers: header,
        params: param
    }).then(function (returnedData) {
        // Deal with the returned data from returned json
        console.log("this is returned Data:" + returnedData.passages[1]);
        returnPassage = returnedData.passages[1];
    }).catch(function (error) {
        console.log(error)
    });

    console.log("this is returned Passage" + returnPassage);
    module.exports = returnPassage;
}