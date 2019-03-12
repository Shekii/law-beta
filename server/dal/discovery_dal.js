//DATABASE ACCESS LAYER

// database connection configuration
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'database';
const client = new MongoClient(url); 

//Import Watson Developer Cloud SDK
const watson = require("watson-developer-cloud");

// Import service credentials
const serviceCredentials = require('./service-credentials.json');

// Create the Discovery object
var discovery = new watson.DiscoveryV1({
  url:serviceCredentials.discovery.url,
  iam_apikey:serviceCredentials.discovery.apikey,
  version:'2018-12-03'
  
});

var fs = require('fs');

var environmentId = serviceCredentials.discovery.environmentID;
var collectionId = serviceCredentials.discovery.collectionID;
var configurationId = serviceCredentials.discovery.configurationID;

module.exports = {

    getAllCasesFromCollection: function (req, res, next) {

        let queryString ="";

        // queryDiscovery(queryString, function(err, queryResults) {

        //     if (err) {
        //         console.log(err);
        //         next(false, err, []);
        //     }

        //     queryResults = queryResults.results;

        //     next(true, [], queryResults);
        // });

        var params = {
            'query': queryString,
            'environment_id':environmentId,
            'collection_id': collectionId,
            'count':10000,
            //maximum amount to return in one query using Watson Discovery
            'configuration_id': configurationId,
        //'passages': true, //if you want to enable passages
            return: 'caseName, caseDate, text, enriched_text'
        //'highlight': true //if you want to enable highlight

        }
        discovery.query(params, (error, results) => {
            if (error) {
                next(false, err, []);
            } else {
                if (!results.results[0].caseName !== '')
                    next(true, [], results.results);
                else 
                    next(false, "Case empty.", []);
            }
        });

    },

    getCaseFromCollection: function (req, res, next) {

        let caseID = req.params.id;
        let queryString = "id::"+caseID; 

        //https://stackoverflow.com/questions/44624500/watson-discovery-example-using-query-options-in-node-js
        let params = {
            'query': queryString,
            'environment_id':environmentId,
            'collection_id': collectionId,
            'configuration_id': configurationId,
        //'passages': true, //if you want to enable passages
            return: 'caseName, caseDate, text, enriched_text'
        //'highlight': true //if you want to enable highlight

        }
        discovery.query(params, (error, results) => {
            if (error) {
                next(false, error, []);
            } else {
                if (!results.results[0].caseName == '' &&
                    !results.results[0].text == '' &&
                    !results.results[0].caseDate == '') {
                    next(true, [], results.results);
                } else {
                    next(false, "Case retrieved failed.", []);
                }
            }
        });
    },

    getSimilarCasesFromID: function(req, res, next) {
        let queryString = "id::"+req.params.id; 
        let params = {
            'query': queryString,
            'environment_id':environmentId,
            'collection_id': collectionId,
            'configuration_id': configurationId,
            return: 'enriched_text, caseName, caseDate, text'
        }

        let filterStrArrConcepts = [];
        let filterStrArrCategories = [];
        const FILTER_CONCEPT = "enriched_text.concepts.text:";
        const FILTER_CATEGORY = "enriched_text.categories.label:";
        let concepts = {};
        let categories = {};

        discovery.query(params, (error, results) => {
            if (error) {
                console.log(error);
                next(false, error, []);
            } else {

                    console.log (results.results[0]);
                if (results.results[0].caseName != '' &&
                    results.results[0].caseDate != '' &&
                    results.results[0].text != '') {

                    let conceptSize = 
                        results.results[0].enriched_text.concepts.length;
                    let categorySize = 
                        results.results[0].enriched_text.categories.length;

                    for (let i = 0; i < conceptSize; i++) {
                        concepts[i] = { 
                            text: results.results[0].enriched_text.concepts[i].text,
                            relevance: results.results[0].enriched_text.concepts[i].relevance
                        };

                        filterStrArrConcepts[i] = FILTER_CONCEPT + concepts[i].text;
                    }

                    for (let j = 0;  j < categorySize; j++) {
                        categories[j] = { 
                            label: results.results[0].enriched_text.categories[j].label,
                            score: results.results[0].enriched_text.categories[j].score
                        };

                        filterStrArrCategories[j] =
                                        FILTER_CATEGORY + categories[j].label;
                    }

                    let filterStrArr =
                    filterStrArrConcepts.concat(filterStrArrCategories);
                
                    filterStr = filterStrArr.join("|");
                    let paramsConceptFilter = {
                        'query': filterStr,
                        'environment_id':environmentId,
                        'collection_id': collectionId,
                        'configuration_id': configurationId,
                        return: 'id, caseName'
                    }
                    discovery.query(paramsConceptFilter, (error, results) => {
                        if (error) {
                            next(false, error, []);
                        } else {
                            next(true, [], results.results);
                        }
                    });
                } else {
                        next(false, "Case has missing fields.", []);
                }
            }
        });

    },



    editCaseInCollection: function (nu, req, res, next) {

        let editFile = JSON.stringify(nu);
        discovery.updateJsonDocument({ 
            environment_id: environmentId,
            collection_id: collectionId, 
            document_id: req.params.id,
            file: nu
        }), 
        function(error, data) {
            if (error == null) {
                next(true, []);
            } else {
                next(false, error, []);
            }
        };
    },

    insertCaseIntoCollection: function (nu, req, res, next) {

        let document_obj = {
            environment_id: environmentId,
            collection_id: collectionId,
            file: nu
        }

        if (nu.caseName === '' || nu.caseDate === '' ||
            nu.text === '') {
                next(false, "Missing fields.", []);   
        } else {
            discovery.addJsonDocument(document_obj, function (err, response) {
                if (err) {
                    next(false, err, []);
                } else {
                    next("Success, case inserted into collection.");
                }
            });
        }
        
    },

    deleteCaseFromCollection: function (req, res,next) {
        
        discovery.deleteDocument({ 
            environment_id: environmentId,
            collection_id: collectionId, 
            document_id: req.params.id
        }), 
        function(error, data) {
            if (error == null) {
                next(true, []);
            } else {
                next(false, error, []);
            }
        };

    }
}

/*****************************
    Function Definitions
******************************/
function queryDiscovery(query, callback) {
  // Function to query Discovery

  discovery.query({
    environment_id: environmentId,
    collection_id: collectionId,
    aggregation: query
    }, function(err, response) {
       if (err) {
         console.error(err);
         callback(err, null);
       } else {
         //var results = JSON.stringify(response, null, 2);
        // console.log(results);
         callback(null, response);
       }
    });
}

function getConcepts(caseID, callback) {

}