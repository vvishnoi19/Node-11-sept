const users = require("../users.json");
function getAllUsers(req, res) {
  try {
    res.json(users);
  } catch (err) {}
}
function getuser(req, res) {
  try {
    let id = req.params.id;
    let user = users.find((user) => user.id === parseInt(id));
    res.json(user);
  } catch (err) {
    console.log(err);
  }
}


// function addUser(req,res){
//   try{
//       req.body.id=users.length+1
//       users.push(req.body)
//       fs.writeFile('users.json',JSON.stringify(users),(err)=>{
//           if(err)
//           {
//               console.log(err)
//           }
//           else{
//               res.end("user added ....")
//           }

//       })

//   }
//   catch(err){

//   }
// }
module.exports = {
  getAllUsers,
  getuser
};
