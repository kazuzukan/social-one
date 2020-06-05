const axios = require("axios");
const qs = require("qs");

const URL = "https://qrary-fuseki-service.herokuapp.com";

// headers for the HTTP request
const headers = {
  "Accept": "application/sparql-results+json,*/*;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

exports.getUsers = async (name, option) => {
  //SPARQL Query
  const querydata = {
    query: `
        PREFIX user:<http://example.co.id/ns/userdata>
        SELECT ?name ?instagram ?twitter ?facebook ?linkedin ?nickname
        WHERE {
            ?user user:name ?name.
   	        ?user user:nickname ?nickname.
            ?user user:instagram ?instagram.
            ?user user:twitter ?twitter.
  	        ?user user:facebook ?facebook.
  	        ?user user:linkedin ?linkedin;
            FILTER contains(?${option},"${name}")
        }
        `,
  };

  try {
    const { data } = await axios(`${URL}/socialone/query`, {
      method: "POST",
      headers,
      data: qs.stringify(querydata),
    });
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

// get All user
exports.defaultUser = async () => {
  //SPARQL Query
  const querydata = {
    query: `
    PREFIX user:<http://example.co.id/ns/userdata>
    SELECT ?name ?instagram ?twitter ?facebook ?linkedin ?nickname
    WHERE {
    ?user user:name ?name.
   	?user user:nickname ?nickname.
    ?user user:instagram ?instagram.
    ?user user:twitter ?twitter.
  	?user user:facebook ?facebook.
  	?user user:linkedin ?linkedin;
}
    `,
  };

  try {
    const { data } = await axios(`${URL}/socialone/query`, {
      method: "POST",
      headers,
      data: qs.stringify(querydata),
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
