var axios = require('axios');

// ESV API
const BRUrl = 'https://api.esv.org/v3/passage/html/';
const header = {
    'Authorization': 'Token ' + process.env.Bible_Key
};

var BRService = {

    passage: 'John+1',
    param:{
        'q': passage
    },
    getPassage: async function () {
        await axios.get(BRUrl, {
            headers: header,
            params: param
        }).then(function (returnedData) {
            // Deal with the returned data from returned json
            return returnedData.data.passages[0];
        }).catch(function (error) {
            console.log(error)
        });
    }
};

module.exports = BRService;