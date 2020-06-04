const dataset = require("../model/user");
const connection = require("../model/userconnection");

exports.searcUser = async (req, res) => {
  const searchValues = [];
  const followedValues = [];
  const option = req.body.option;
  const search = req.body.search;
  console.log(option);
  if (option == "name" && search) {
    const value = await dataset.getUsers(search, option);
    if (value){
      searchValues.push(...value.results.bindings);
    }
  } else if (search){
    const value = await dataset.getUsers(search, option);
    const followed = await connection.connectedUser(search, option);
    if(value && followedValues){
      searchValues.push(...value.results.bindings);
      followedValues.push(...followed.results.bindings);
      console.log(followedValues);
    }
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
      if(value){
        values.push(...value.results.bindings);
      }
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
  res.status(200).render("main", { values: values });
  // res.status(200).json(values);
};
