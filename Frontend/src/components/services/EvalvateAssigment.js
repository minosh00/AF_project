import axios from 'axios';



let getByIdURL = "https://afresearchprojectmanagementtoo.herokuapp.com/UploadAssignment/getevaluvtAssigmentById/";
let updateIdURL = "https://afresearchprojectmanagementtoo.herokuapp.com/updateAssigment/";



export async function updateAssigment(id,data) {
    const alldata = {
      
        name:data.name,
        AssignmentType:data.AssignmentType,
        status:data.status,
        img:data.img,
        Assignment:data.Assignment,
     
    };


    return await axios.get(updateIdURL + id,alldata);
}


export async function getevaluvtAssigmentById(id) { 
    return await axios.get(getByIdURL + id);
}
