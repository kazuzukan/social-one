const dataset = require("../model/user");

exports.searcUser = async (req, res) => {
  const searchValues = [];
  const value = [];
  const option = req.body.option;
  const name = req.body.search;
  console.log(name);
  if (option == "name") {
    const value = await dataset.getUsers(name);
    searchValues.push(...value.results.bindings);
  } else if (option == "instagram"){
    const value = await dataset.getInstagram(name);
    searchValues.push(...value.results.bindings);
  } else if (option == "facebook"){
    const value = await dataset.getFacebook(name);
    searchValues.push(...value.results.bindings);
  } else if (option == "twitter") {
    const value = await dataset.getTwitter(name);
    searchValues.push(...value.results.bindings);
  } else if (option == "linkedin"){
    const value = await dataset.getLinkedin(name);
    searchValues.push(...value.results.bindings);
  }


  
  if (searchValues.length == 0) {
    res.render("notFound");
  } else {
    res.render("main", { values: searchValues });
  }
};

exports.defaultUser = async (req, res) => {
  const values = [];
  await dataset
    .defaultUser()
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
  res.render("main", { values: values });
};
