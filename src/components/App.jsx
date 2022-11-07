import React, { useState } from "react";

function App() {
  //useState object that contains contact info
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  //function is called when any input triggers onChange
  function handleChange(event) {
    //event contains info that can be called to identify where the change occured
    //destructure object by obtaining event value entered by user and name of input that was changed
    const { value, name } = event.target;

    //call set function from useState to update the value accordingly
    //prevValue is an object that contains the previous values before the change
    setContact((prevValue) => {
      //check what input was changed and set the values accordingly using the current value and previous values
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
