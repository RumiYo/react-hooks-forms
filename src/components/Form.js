import React, { useState } from "react";

function Form({
  firstName, 
  lastName, 
  handleFirstName, 
  handleLastName}) {
    return (
      <form>
        <input type="text" onChange={handleFirstName} defaultValue={firstName} />
        <input type="text" onChange={handleLastName} defaultValue={lastName} />
        <button type="submit">Submit</button>
      </form>
    )
}

export default Form;
