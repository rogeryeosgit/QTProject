var axios = require('axios');

// ESV API
const BRUrl = 'https://api.esv.org/v3/passage/html/';
const header = {
    'Authorization': 'Token ' + process.env.Bible_Key
};

var BRService = {
    getPassage: async function (passage) {
        await axios.get(BRUrl, {
            headers: header,
            params: {
                'q': passage
            }
        }).then(function (returnedData) {
            // Deal with the returned data from returned json
            console.log("This is what is returned from REST Call : " + returnedData.data.passages[0]);
            return returnedData.data.passages[0];
        }).catch(function (error) {
            console.log(error)
        });
    }
};

module.exports = BRService;