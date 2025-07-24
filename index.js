const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'rushi'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

//Home
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`
  try{
    conection.query(q, (err, result) =>{
    if(err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs", {count});
    })
  } catch(err) {
      console.log(err);
  }
})

//Show users data
app.get("/user", (req, res) =>{
  let q = `SELECT * FROM USER`;
  try{
    conection.query(q, (err, result) =>{
    if(err) throw err;
    res.render("show.ejs", {users: result});
    })
  } catch(err) {
      console.log(err);
  }
})

//Edit users data
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  
  try{
    conection.query(q, (err, result) =>{
    if(err) throw err;
    let user = result[0];
      res.render("edit.ejs", {user});
    })
  } catch(err) {
      console.log(err);
      console.log("Some error in DB");
  }
})

//update users data
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: fromPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    conection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (fromPass != user.password) {
        res.send("WRONG Password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
        conection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    console.log("Some error in DB");
  }
});

//getting add.ejs
app.get("/user/add", (req, res) => {
  res.render("add.ejs");
})

//creating new user
app.post("/user", (req, res) => {
  const { username, email, password } = req.body;
  const id = faker.string.uuid();
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
  try {
    conection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Error adding user");
  }
});

//delete the user and its data
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = `DELETE FROM user WHERE id = '${id}'`;
  try {
    conection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Error deleting user");
  }
});

app.listen("8080", () => {
  console.log("Server is listening to port 8080");
})
