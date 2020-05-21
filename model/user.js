const axios = require("axios");
const qs = require("qs");

const URL = "http://127.0.0.1:3030";

// headers for the HTTP request
const headers = {
  Accept: "application/sparql-results+json,*/*;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

exports.getUsers = async (name) => {
  //SPARQL Query
  const querydata = {
    query: `
        PREFIX user:<http://example.co.id/ns/userdata>
        SELECT ?name ?instagram ?twitter ?facebook ?linkedIn ?nickname
        WHERE {
            ?user user:name ?name.
   	        ?user user:nickname ?nickname.
            ?user user:instagram ?instagram.
            ?user user:twitter ?twitter.
  	        ?user user:facebook ?facebook.
  	        ?user user:linkedIn ?linkedIn;
            FILTER contains(?name,"${name}")
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

exports.defaultUser = async (name) => {
  //SPARQL Query
  const querydata = {
    query: `
    PREFIX user:<http://example.co.id/ns/userdata>
    SELECT ?name ?instagram ?twitter ?facebook ?linkedIn ?nickname
    WHERE {
    ?user user:name ?name.
   	?user user:nickname ?nickname.
    ?user user:instagram ?instagram.
    ?user user:twitter ?twitter.
  	?user user:facebook ?facebook.
  	?user user:linkedIn ?linkedIn;
}
    `
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
