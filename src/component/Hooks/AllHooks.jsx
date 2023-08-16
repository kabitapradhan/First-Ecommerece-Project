

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// const AllHooks = () => {
//   const [theValue, setTheValue] = useState("test");
//   const [theArray, setTheArray] = useState([1, "stan"]);
//   const [theObject, setTheObject] = useState({
//     food: "gyoza"
//   });
//   const [theArrayOfObjects, setTheArrayOfObjects] = useState([
//     { color: "blue" }
//   ]);

//   const [theObjectOfArrays, setTheObjectOfArrays] = useState({
//     power: ["Lightning", "God strength"]
//   });

//   const handleChangeValue = event => {
//     setTheValue(event.target.value);
//   };

//   const handleChangeArray = event => {
//     event.persist();
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log("handleChangeArray: ", event.target.name, event.target.value);
//     console.log("handleChangeArray name: ", name);
//     setTheArray(prev => [...prev, value]);
//   };

//   const handleChangeUpdateAddObject = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log("handleChangeObject: ", name, value);

//     setTheObject(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleChangeArrayAddObject = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log("handleChangeAddAddObject: ", name, value);

//     setTheArrayOfObjects(prevState => [...prevState, { [name]: value }]);
//   };

//   const handleChangeObjectAddArray = (event, index) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     let specificArrayInObject = theObjectOfArrays.power.slice();
//     specificArrayInObject.push(value);
//     const newObj = { ...theObjectOfArrays, [name]: specificArrayInObject };
//     setTheObjectOfArrays(newObj);
//   };

//   return (
//     <div className="App">
//       <div>
//         <input
//           type="text"
//           placeholder="enter a value"
//           value={theValue.code}
//           onChange={handleChangeValue}
//         />{" "}
//       </div>
//       <div>{theValue}</div>
//       <div>
//         <input
//           type="text"
//           placeholder="enter a value"
//           name={theArray}
//           value={theArray.code}
//           onChange={handleChangeArray}
//         />{" "}
//       </div>
//       <div>{JSON.stringify(theArray)}</div>
//       <div>
//         <input
//           type="text"
//           placeholder="enter a value"
//           name={Object.keys(theObject)}
//           value={theObject.code}
//           onChange={handleChangeUpdateAddObject}
//         />
//       </div>
//       <div>{JSON.stringify(theObject)}</div>

//       <div>
//         <input
//           type="text"
//           placeholder="enter a value"
//           name="newKey"
//           value={theObject.code}
//           onChange={handleChangeUpdateAddObject}
//         />
//       </div>
//       <div>{JSON.stringify(theObject)}</div>

//       <div>
//         <input
//           type="text"
//           placeholder="enter a value"
//           name="newKey"
//           value={theArrayOfObjects.code}
//           onChange={handleChangeArrayAddObject}
//         />
//       </div>
//       <div>{JSON.stringify(theArrayOfObjects)}</div>
//       <div>
//         <input
//           type="text"
//           placeholder="enter a value"
//           name={Object.keys(theObjectOfArrays)}
//           value={theObjectOfArrays.code}
//           onChange={handleChangeObjectAddArray}
//         />
//       </div>
//       <div>{JSON.stringify(theObjectOfArrays)}</div>
//     </div>
//   );
// };



function AllHooks() {
    const [theArrayOfObjects, setTheArrayOfObjects] = useState( [ { color: "blue" } ] );
    const handleChangeArrayAddObject = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("handleChangeAddAddObject: ", name, value);
    
        setTheArrayOfObjects(prevState => [...prevState, { [name]: value }]);
    };
   
    return (
        <>
            <h1>this is array od objes</h1>
            <div>
                <input
                    type="text"
                    placeholder="enter a value"
                    name="newKey"
                    value={theArrayOfObjects.code}
                    onChange={handleChangeArrayAddObject}
                />
            </div>
            <div>{JSON.stringify(theArrayOfObjects)}</div>
        </>
    )
}

export default AllHooks
