import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";
import NumberForm from "./NumberForm"

function ParentComponent(){
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Henry');

    function handleFirstNameChange(event){
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event){
        setLastName(event.target.value);
    }

    return (
        <div>
            <Form 
                firstName = {firstName}
                lastName = {lastName}
                handleFirstName = {handleFirstNameChange}
                handleLastName = {handleLastNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
            <NumberForm />
        </div>
    );
}

export default ParentComponent; 