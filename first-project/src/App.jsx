// import React, { useState } from "react";
// import "./App.css";
// import Student from "./components/Student";
// import Card from "./components/Card";
// import Register from "./components/Register";
// import DataBinding from "./components/DataBinding";
// import Weather from "./weather/Weather";
// import MouseOver from "./components/MouseOver";

// const App = () => {
//   const [count, setCount] = useState(0);
//   function timer() {
//     setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//   }

//Passing Variables as Props

// const studentName = "Manikanta";

//passing arrays

// const skills = ["Java", "C++"];

//passing objects

// const studentObj = {
//   name: "Ajay",
//   age: 22,
// };

//passing functions as props
// function greet() {
//   alert("Welcome");
// }

// return (
//   <>
//     <div className="alert alert-success">Saved Successfully</div>
//     <div className="border-success rounded-3 w-25 bg-warning text-white text-start p-2 m-5  text-danger">
//       {count}
//     </div>
//     <button onClick={timer} className="btn btn-primary btn-lg">
//       StartWatch
//     </button>
//     <Student
//       name={studentName}
//       branch="CSE"
//       age={20}
//       isPassed={true}
//       skills={skills}
//       studentObj={studentObj}
//       greet={greet}
//     />
//   </>
//for integer and boolean we have to pass in curly brakcets
// );

//---------------------------------------------------------------------

//Children Prop
// return (
//   <Card>
//     <h1>This is Card Component</h1>
//     <h2>Welcome here</h2>
//   </Card>
// );

// return <Register />;

// return <DataBinding />;

// return <Weather />;

//   return <MouseOver />;
// };

// export default App;

//To add bootstrap to our project
//npm install bootstrap
//npm install bootstrap-icons

/*
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
*/

//Add above three in main.jsx

//Some commonly used Bootstrap Icons
/*
<span className="bi bi-person"></span>      // Person
<span className="bi bi-person-fill"></span> // Filled person
<span className="bi bi-lock"></span>        // Lock
<span className="bi bi-envelope"></span>    // Email
<span className="bi bi-house"></span>       // Home
<span className="bi bi-cart"></span>        // Cart
<span className="bi bi-search"></span>      // Search
<span className="bi bi-heart"></span>       // Heart
<span className="bi bi-trash"></span>       // Delete
<span className="bi bi-pencil"></span>      // Edit
<span className="bi bi-eye"></span>         // View
<span className="bi bi-check-circle"></span>// Success
*/

// import React from "react";
// import EventDemo1 from "./components/EventDemo1";

// const App = () => {
//   return (
//     <div>
//       <EventDemo1 />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import EventDemo2 from "./components/05-08-2026/EventDemo2";

// const App = () => {
//   return (
//     <div>
//       <EventDemo2 />
//     </div>
//   );
// };

// export default App;

//-------------------------------------------------------------

// import React from "react";
// import EventDemo3 from "./components/05-08-2026/EventDemo3";

// const App = () => {
//   return (
//     <div>
//       <EventDemo3 />
//     </div>
//   );
// };

// export default App;

//---------------------------------------------------------------

// import React from "react";
// import MouseDown from "./components/06-08-2026/MouseDown";

// const App = () => {
//   return (
//     <div>
//       <MouseDown />
//     </div>
//   );
// };

// export default App;

//---------------------------------------------------------------------

// import React from "react";
// import MouseMove from "./components/06-08-2026/MouseMove";

// const App = () => {
//   return (
//     <div>
//       <MouseMove />
//     </div>
//   );
// };

// export default App;

//-----------------------------------------------------------------------

// import React from "react";
// import KeyDemo from "./components/06-08-2026/KeyDemo";

// const App = () => {
//   return (
//     <div>
//       <KeyDemo />
//     </div>
//   );
// };

// export default App;

//-----------------------------------------------------------------------

// import React from "react";
// import ContextMenu from "./components/07-08-2026/ContextMenu";

// const App = () => {
//   return (
//     <div>
//       <ContextMenu />
//     </div>
//   );
// };

// export default App;

//--------------------------------------------------------------------------

// import React from "react";
// import EmiCalculator from "./components/07-08-2026/EmiCalculator";

// const App = () => {
//   return (
//     <div>
//       <EmiCalculator />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

// import React from "react";
// import DebounceDemo from "./components/07-08-2026/DebounceDemo";

// const App = () => {
//   return (
//     <div>
//       <DebounceDemo />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

// import React from "react";
// import DebounceDemo2 from "./components/07-08-2026/DebounceDemo2";

// const App = () => {
//   return (
//     <div>
//       <DebounceDemo2 />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

// import React from "react";
// import ThrottleDemo from "./components/10-08-2026/ThrottleDemo";

// const App = () => {
//   return (
//     <div>
//       <ThrottleDemo />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

// import React from "react";
// import SlideShow from "./components/10-08-2026/SlideShow";

// const App = () => {
//   return (
//     <div>
//       <SlideShow />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

// import React from "react";
// import { FormDemo } from "./components/11-08-2026/FormDemo";

// const App = () => {
//   return (
//     <div>
//       <FormDemo />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

// import React from "react";
// import { FormDataDemo } from "./components/11-08-2026/FormDataDemo";

// const App = () => {
//   return (
//     <div>
//       <FormDataDemo />
//     </div>
//   );
// };

// export default App;

//------------------------------------------------------------------

import React from "react";
import { FormRefDemo } from "./components/11-08-2026/FormRefDemo";

const App = () => {
  return (
    <div>
      <FormRefDemo />
    </div>
  );
};

export default App;

//------------------------------------------------------------------

//------------------------------------------------------------------

//------------------------------------------------------------------

//------------------------------------------------------------------
