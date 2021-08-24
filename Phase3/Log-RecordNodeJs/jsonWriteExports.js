const fs = require("fs");
const reader = require('readline-sync');

exports.loggerFunction = function(data){

    let records = reader.question('Enter the number of records you want to store ');
    for (let i = 0; i < records; i++) {

        // This code will convert the code into the JSON String                 
        let FirstName = reader.question("Enter the First Name ");
        let LastName = reader.question("Enter the Last Name ");                
        let Email = reader.question("Enter the EmailAddress ");
        let Gender = reader.question("Enter your Gender ")

        debugger;
        var Time =  new Date().toLocaleString();
                
        debugger;
        data.users.push({FirstName, LastName, Email, Gender, Time});
                    
        }
}
// This will help to write in the JSON Format and Store it .
exports.writeToJsonFunction = function(data, jsonFile){
    debugger;
    var userString = JSON.stringify(data);
                
    fs.writeFile(jsonFile, userString, (err)=>{
        if(!err){
            console.log("Records stored successfully")
        }
    });
}