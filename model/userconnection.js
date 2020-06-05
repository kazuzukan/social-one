const axios = require("axios");
const qs = require("qs");

const URL = "https://qrary-fuseki-service.herokuapp.com";

// headers for the HTTP request
const headers = {
  Accept: "application/sparql-results+json,*/*;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

// get connected user
exports.connectedUser = async (name, option) => {
  //SPARQL Query
  const querydata = {
    query: `
      PREFIX user:<http://example.co.id/ns/userdata>
      SELECT DISTINCT ?name ?instagram ?userfollow ?followeduser ?follownick ?followinstagram ?followtwitter ?followfacebook ?followlinkedin
      WHERE {
          ?user user:name ?name.
          ?user user:${option} ?${option}.
          ?user user:${option}follow ?userfollow.
          ?userfollow user:name ?followeduser.
          ?userfollow user:nickname ?follownick.
          ?userfollow user:instagram ?followinstagram.
          ?userfollow user:twitter ?followtwitter.
          ?userfollow user:facebook ?followfacebook.
          ?userfollow user:linkedin ?followlinkedin.
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
  }
};
