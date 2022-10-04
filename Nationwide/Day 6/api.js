"use strict"

const URL = "day6.json";
const URL2 = "https://reqres.in/";


axios.get("https://reqres.in/api/users?page=2")
.then(res => console.log(res))
   .catch(err => console.error(err));

axios.get("https://reqres.in/api/users/2")
.then(res => console.log(res))
    .catch(err => console.error(err));

  function appendData(data){
      let datalist = document.get("myData")
      for(let i = 0; i<data.length; i++){
          let trainer = document.createElement("div");
          let id = document.createElement("card");
          id.innerText = "ID: " + data[i].name;
          trainer.appendChild(name);
          datalist.appendChild(trainr);
        
      }
  }

  const reqBody = {
      name: "Jordan",
      job: "Leader"
  }

  axios.post("https://reqres.in/api/users?page=2", reqBody)
  .then(res => console.log(res))
  .catch(err => console.error(err));

  axios.get("https://reqres.in/api/register")
  .then(res=> console.log(res))
  .catch(err=> console.err(err));


  function registerSuccessful() {
      const emailAdd = document.getElementById("emailaddress").Value;
      console.log("EMAIL", email);
      axios.post("https://reqres.in/api/users", {
          "emailAdd" : "eve.holt@reqres.inheus", 
          "password": "pistol"
      }).then(res => console.log(res))
      .catch(err => console.error(err));
  }