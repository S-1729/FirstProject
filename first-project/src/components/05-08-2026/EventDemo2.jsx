//Custom Arguments

// import React from "react";

// const EventDemo2 = () => {
//   function handleClick(id, item, e) {
//     console.log(`Id = ${id} Item = ${item} name = ${e.target.name}`);
//   }

//   return (
//     <div>
//       <button name="click" onClick={(e) => handleClick(1, "TV",e)}>
//         Click
//       </button>
//     </div>
//   );
// };

// export default EventDemo2;

//------------------------------------
//Custom arguments with event reference

// import React from "react";

// const EventDemo2 = () => {
//   function handleClick(id, item, e) {
//     console.log(`Id = ${id} Item = ${item} name = ${e.target.name}`);
//   }

//   return (
//     <div>
//       <button name="click" onClick={(e) => handleClick(1, "TV", e)}>
//         Click
//       </button>
//     </div>
//   );
// };

// export default EventDemo2;

//----------------------------------------------------------------
//Custom arguments through rest parameter and event reference

// import React from "react";

// const EventDemo2 = () => {
//   function handleClick(e, ...param) {
//     const [id, item] = param;
//     console.log(`Id = ${id} Item = ${item} name = ${e.target.name}`);
//   }

//   return (
//     <div>
//       <button name="click" onClick={(e) => handleClick(e, 1, "TV")}>
//         Click
//       </button>
//     </div>
//   );
// };

// export default EventDemo2;

//--------------------------------------------------------

import React from "react";

const EventDemo2 = () => {
  function handleClick(e, ...param) {
    console.log(`Id = ${param[0]} Item = ${param[1]} name = ${e.target.name}`);
  }

  return (
    <div>
      <button name="click" onClick={(e) => handleClick(e, 1, "TV")}>
        Click
      </button>
    </div>
  );
};

export default EventDemo2;
