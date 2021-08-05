var empData=[];
function storeInSession() {
   localStorage.setItem("empInfo",JSON.stringify(empData));
   //sessionStorage.setItem("empInfo",JSON.stringify(empData));
}

function setSession() {
    var obj = JSON.parse(localStorage.getItem("empInfo"));
    //var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}

function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
   
    empData.push(formData);  
    console.log(empData)
}


function readData() {
    var formData={};
    formData.Name=document.getElementById("Name").value;
    formData.Email = document.getElementById("Email").value;
    formData.Message = document.getElementById("Message").value;

    return formData;
}


function insertNewRecords(formData) {

   
    var table = document.getElementById("message Details");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.clientName;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.name;
    var cell3 = newRow.insertCell(2);

    cell3.innerHTML= formData.budget;
   



   
   
 
}
