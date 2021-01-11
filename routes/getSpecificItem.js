var express = require('express');
var router = express.Router();

const axios = require('axios');

const EBAY_APP_ID = 'ArturoBr-FindPoke-PRD-5d4a2fe66-b9ba0a17';
// eBay base API request URL

let getSingleItemUri = "https://open.api.ebay.com/shopping?callname=GetSingleItem" + 
"&responseencoding=JSON" + 
"&appid=" + EBAY_APP_ID + 
"&siteid=0" + 
"&version=967" + 
"&ItemID="; //353323119335

const defaultItemId = "353323119335";

/* GET ebay query. */
//WORKS PERFECT !!!!!!!!
router.get('/', function(req, res, next) {
    //get params in url. ex. http://localhost:3000/getSpecificItem?test=2222
    //console.log(req.query.test); //2222
    //console.log(req.query.test); //2222

    let itemID = req.query.itemID;

    if (itemID === null || itemID === undefined || itemID === ""){
        itemID = defaultItemId;
    }

    try {
      axios.get(getSingleItemUri + itemID).then(resp => {
        res.send(resp.data);
          
      });
    } catch (error) {
      res.send('ERROR');
    }
  });


module.exports = router;
