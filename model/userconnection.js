const axios = require("axios");
const qs = require("qs");

const URL = "http://127.0.0.1:3030";

// headers for the HTTP request
const headers = {
  Accept: "application/sparql-results+json,*/*;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

// get connected user
exports.instagramFollow = async (name) => {
    //SPARQL Query
    const querydata = {
      query: `
      PREFIX user:<http://example.co.id/ns/userdata>
      SELECT DISTINCT ?name ?instagram ?userfollow ?followeduser ?follownick ?followinstagram ?followtwitter ?followfacebook ?followlinkedin
      WHERE {
          ?user user:name ?name.
          ?user user:instagram ?instagram.
          ?user user:instagramfollow ?userfollow.
          ?userfollow user:name ?followeduser.
          ?userfollow user:nickname ?follownick.
          ?userfollow user:instagram ?followinstagram.
          ?userfollow user:twitter ?followtwitter.
          ?userfollow user:facebook ?followfacebook.
          ?userfollow user:linkedIn ?followlinkedin.
          FILTER contains(?instagram,"${name}")
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
  
  exports.twitterFollow = async (name) => {
    //SPARQL Query
    const querydata = {
      query: `
      PREFIX user:<http://example.co.id/ns/userdata>
      SELECT DISTINCT ?name ?twitter ?userfollow ?followeduser ?follownick ?followinstagram ?followtwitter ?followfacebook ?followlinkedin
      WHERE {
          ?user user:name ?name.
          ?user user:twitter ?twitter.
          ?user user:twitterfollow ?userfollow.
          ?userfollow user:name ?followeduser.
          ?userfollow user:nickname ?follownick.
          ?userfollow user:instagram ?followinstagram.
          ?userfollow user:twitter ?followtwitter.
          ?userfollow user:facebook ?followfacebook.
          ?userfollow user:linkedIn ?followlinkedin.
          FILTER contains(?twitter,"${name}")
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

  exports.facebookFollow = async (name) => {
    //SPARQL Query
    const querydata = {
      query: `
      PREFIX user:<http://example.co.id/ns/userdata>
      SELECT DISTINCT ?name ?facebook ?userfollow ?followeduser ?follownick ?followinstagram ?followtwitter ?followfacebook ?followlinkedin
      WHERE {
          ?user user:name ?name.
          ?user user:facebook ?facebook.
          ?user user:facebookfollow ?userfollow.
          ?userfollow user:name ?followeduser.
          ?userfollow user:nickname ?follownick.
          ?userfollow user:instagram ?followinstagram.
          ?userfollow user:twitter ?followtwitter.
          ?userfollow user:facebook ?followfacebook.
          ?userfollow user:linkedIn ?followlinkedin.
          FILTER contains(?facebook,"${name}")
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

  exports.linkedInFollow = async (name) => {
    //SPARQL Query
    const querydata = {
      query: `
      PREFIX user:<http://example.co.id/ns/userdata>
      SELECT DISTINCT ?name ?linkedIn ?userfollow ?followeduser ?follownick ?followinstagram ?followtwitter ?followfacebook ?followlinkedin
      WHERE {
          ?user user:name ?name.
          ?user user:linkedIn ?linkedIn.
          ?user user:linkedinfollow ?userfollow.
          ?userfollow user:name ?followeduser.
          ?userfollow user:nickname ?follownick.
          ?userfollow user:instagram ?followinstagram.
          ?userfollow user:twitter ?followtwitter.
          ?userfollow user:facebook ?followfacebook.
          ?userfollow user:linkedIn ?followlinkedin.
          FILTER contains(?linkedIn,"${name}")
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