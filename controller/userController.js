const dataset = require("../model/user");
const connection = require("../model/userconnection");

exports.searcUser = async (req, res) => {
  const searchValues = [];
  const followedValues = [];
  const value = [];
  const followed = [];
  const option = req.body.option;
  console.log(option)
  const name = req.body.search;
  console.log(name);
  if (option == "Name" && name) {
    const value = await dataset.getUsers(name);
    searchValues.push(...value.results.bindings);
  } else if (option == "Instagram" && name) {
    const value = await dataset.getInstagram(name);
    const followed = await connection.instagramFollow(name);
    searchValues.push(...value.results.bindings);
    followedValues.push(...followed.results.bindings);
  } else if (option == "Facebook" && name) {
    const value = await dataset.getFacebook(name);
    const followed = await connection.facebookFollow(name);
    searchValues.push(...value.results.bindings);
    followedValues.push(...followed.results.bindings);
  } else if (option == "Twitter" && name) {
    const value = await dataset.getTwitter(name);
    const followed = await connection.twitterFollow(name);
    searchValues.push(...value.results.bindings);
    followedValues.push(...followed.results.bindings);
  } else if (option == "LinkedIn" && name) {
    const value = await dataset.getLinkedin(name);
    const followed = await connection.linkedInFollow(name);
    searchValues.push(...value.results.bindings);
    followedValues.push(...followed.results.bindings);
  }

  if (searchValues.length == 0) {
    res.render("notFound");
  } else {
    return res.status(200).render("search", {
      values: searchValues,
      option: option,
      followed: followedValues,
    });
  }
};

exports.defaultUser = async (req, res) => {
  const values = [];
  await dataset.defaultUser()
    .then((value) => {
      values.push(...value.results.bindings);
      console.log(values);
      console.log(values.length);
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
  res.status(200).render("main", { values: values });
  // res.status(200).json(values);
};
