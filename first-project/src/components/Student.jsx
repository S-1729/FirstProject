import React from "react";

//passing props and accessing props
const Student = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.branch}</div>
      <div>{props.age}</div>
    </>
  );
};

//------------------------------------

//props destructuring
//we have to use the same variable name as parameter passed from the parent
//Props are Read-Only
// const Student = ({
//   name,
//   branch,
//   age,
//   isPassed,
//   skills,
//   studentObj,
//   greet,
//   defaultProp = "Some default value",
// }) => {
//   return (
//     <>
//       <div>{name}</div>
//       <div>{branch}</div>
//       <div>{age}</div>
//       <div>{isPassed ? "Passed" : "Fail"}</div>
//       <ul>
//         {skills.map((skill) => (
//           <li>{skill}</li>
//         ))}
//       </ul>
//       <div>{studentObj.name}</div>
//       <button onClick={greet}>Greet</button>
//       <div>{defaultProp}</div>
//     </>
//   );
// };

export default Student;
