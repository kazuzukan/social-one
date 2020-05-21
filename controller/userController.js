const dataset = require('../model/user');

exports.searcUser = async (req, res) => {
    const searchValues = [];
    const name = req.body.search;
    console.log(name)
    await dataset.getUsers(name)
    .then((value) => {
        searchValues.push(...value.results.bindings);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message || "Some error occurred while retrieving Users.",
        });
      });
    
      console.log(searchValues)
      console.log(searchValues.length)
    if(searchValues.length == 0){
        res.render('notFound')
    }else{
        res.render('main', {values: searchValues})
    }
}

exports.defaultUser = async(req, res) => {
    const values = [];
    await dataset.defaultUser()
    .then((value) => {
        values.push(...value.results.bindings);
        console.log(values)
        console.log(values.length)
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message || "Some error occurred while retrieving Users.",
        });
      });
    res.render('main', {values: values})
}