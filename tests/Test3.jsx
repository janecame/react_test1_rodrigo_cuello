//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 15 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Mapping Objects ********************/

//======================= Problem Description ==========================/
//For this test, we want to display an object's keys and properties on a list.

//******************* Solution Requirements ********************/
//1.) Map out the person object so it can be displayed in a list.
//2.) The object keys should precede the object properties.
//2a.) ex: name: Angelo Dato
//3.) Explicitly typing out the object keys is not allowed.

//******************** Tips ********************
//1.) You can add/remove any react hook you might need to accomplish this test.
//2.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Test3Screen() {
  const people = {
    name: "Angelo Dato",
    age: 24,
    height: "5'9",
    complexion: "Brown",
  };


  return (
    <div className="testContainer">
      <div className="test4">
        <h1>
          Name: <br /> {people.name}
        </h1>
        <ul>
          <li> Features: </li>
          {/* {Object.entries(people).map(([key, value]) => 
              <li key={key}> {value} </li>
            )
          } */}
          <li>{people.age}</li>
          <li>{people.height}</li>
          <li>{people.complexion}</li>

        </ul>
      </div>
    </div>
  );
}
