import React from "react";


const StudentInfo = ({name,age,grade,school}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
            <p>School: {school}</p>
            
        </div>
    );
};



export default StudentInfo;