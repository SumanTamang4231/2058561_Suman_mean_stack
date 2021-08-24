// import functions
const userFunction = require("./jsonWriteExports"); 

const fs = require("fs");

let usersObj = {
    users: []
}
//This will check for the userJson file .
fs.exists('userJson.json', function(exists){
    if (exists) {
       
        fs.readFile('userJson.json', function (err, data){
            if(err){
                console.log(err);
            }else{
                usersObj = JSON.parse(data)
                // function to take user input
                userFunction.loggerFunction(usersObj) 
                 // function to store json file
                userFunction.writeToJsonFunction(usersObj, "userJson.json")
            }
        });
    }  else {

        console.log("file not exists");
        // function to take the user function
        userFunction.loggerFunction(usersObj) 
        // function to store json file                
        userFunction.writeToJsonFunction(usersObj, "userJson.json") 
    } 
});