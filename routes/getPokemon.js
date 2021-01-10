var express = require('express');
var router = express.Router();

const axios = require('axios');

const EBAY_APP_ID = 'ArturoBr-FindPoke-PRD-5d4a2fe66-b9ba0a17'; // <- replace with your own developer ID
// eBay base API request URL

let baseUri = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords" +
    "&X-EBAY-SOA-SECURITY-APPNAME=" + EBAY_APP_ID +
    "&X-EBAY-SOA-RESPONSE-DATA-FORMAT=JSON" +
    "&X-EBAY-SOA-GLOBAL-ID=EBAY-US" +
    "&X-EBAY-SOA-Access-Control-Allow-Origin=*" +
    "&REST-PAYLOAD" +
    //"&keywords=charizard" +
    "&keywords=pokemon%20lot" +
    "&itemFilter(0).name=Currency" +
    "&itemFilter(0).value=USD" +
    "&itemFilter(1).value=";

/* GET ebay query. */
//WORKS PERFECT !!!!!!!!
router.get('/', function(req, res, next) {
    try {
      axios.get(baseUri).then(resp => { //this example works great :) 'http://webcode.me'     returns: Today is a beautiful day. We go swimming and fishing.
        console.log(resp.data);
        res.send(resp.data);
          
      });
    } catch (error) {
      res.send('ERROR');
    }
  });


module.exports = router;
