const routes = require("express").Router();
const Upload = require("../models/Upload");
const str = require("random-string");
const path = require("path");

routes.post("/", (req, res) => {
  let body = JSON.parse(req.body.data); 
  let image = req.files;
console.log(image)
  return;
  let random_string = str({length : 100});
  let original_name = image.name;
  let array = original_name.split(".");
  let extension = array[array.length - 1];
  let new_name = random_string + "." + extension;
  body.image = new_name;
  image.mv(path.resolve() + "/assets/screenShots/" + new_name, (error)=> {
    Upload.create(body, (error)=> {
          // let obj =  {name : "http://localhost:3000/screenShots/" + new_name};
          res.send({success : true});
      })
  })
});
routes.get("/", (req, res) => {
Upload.find({}, (error, result)=> {
    let new_result = result.map((x)=> {
        x.image = "http://localhost:3000/screenShots/" + x.image;
        return x;
    })
    res.send(new_result);
})
});

routes.get("/:id", (req, res) => {
  let id = req.params.id;
  Upload.find({_id: id}, (error, result)=> {
    let new_result = result.map((x)=> {
        x.image = "http://localhost:3000/screenShots/" + x.image;
        return x;
    })
    res.send(new_result[0]);
})
});
routes.get("/skip/:id", (req, res) => {
  let id = req.params.id;
  Upload.find({_id: id}, (error, result)=> {
    let new_result = result.map((x)=> {
        x.image = "http://localhost:3000/screenShots/" + x.image;
        return x;
    })
    res.send(new_result[0]);
})
});
module.exports = routes;
