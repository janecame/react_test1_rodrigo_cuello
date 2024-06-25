//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 10 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: React Context ********************/

//======================= Problem Description ==========================/
// For this test, you will be making use of React Context.
// We have a variable named person, and we want this variable
// to be available throughout the application without having to
// redefine it in every instance.

//******************* Solution Requirements ********************/
//1.) Use React Context.
//2.) Make the setter variable in your context available to the 'SetValuesHere' component.
//3.) The 'newPerson' variable is already defined.
//4.) When you click the 'set' button, it will set the value of 'newPerson' to the 'person' variable.
//5.) This 'person' variable must now be available throughout the application without redefining it.
//6.) When the 'person' variable changes values, all components subscribed to it should display the changes.

//******************** Tips ********************
//1.) You can use either function declaration or function expression.
//2.) The hooks you need to accomplish this task are already imported in this component.

// ----------------------------------------------------------------------------------//

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useContext, createContext } from "react";

//This is your context variable.
const PersonContext = createContext();

//This is your context provider component
function Context({ children }) {
  const BaseContext = {
    name: "",
    age: "",
    height: "",
    complexion: "",
  };

  const [person, setPerson] = useState(BaseContext);

  return <PersonContext.Provider value={{person, setPerson}}>{children}</PersonContext.Provider>;
}

//set values here.
function SetterComponent() {
  const { setPerson } = useContext(PersonContext);

  const newPerson = {
    name: "Jrue Holiday",
    age: "34",
    height: "1.93m",
    complexion: "dark",
  };

  return (
    <button
      style={{
        backgroundColor: "rgb(254 215 170)",
        width: 200,
        height: 60,
        borderRadius: 2.725,
      }}
      onClick={() => setPerson(newPerson)}
    >
      Set
    </button>
  );
}

//access and display 'person' details here.
function Screen() {
  const { person } = useContext(PersonContext);
  //const person = "Jordan Ripley";

  return (
      <div className="testContainer">
        <div className="test4">
          <h1> {person ? person.name : "No name found."} </h1>
          <SetterComponent />
        </div>
      </div>
  );
}

//default component.
export default function Test4Screen() {
  return (
    <Context>
      <Screen />
    </Context>

  );
}
