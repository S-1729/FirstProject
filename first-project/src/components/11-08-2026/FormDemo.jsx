import { useState } from "react";

export function FormDemo() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function handleIdChange(e) {
    setId(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(`Id : ${id} \nName : ${name} \nCategory : ${category}`);
  }

  return (
    <div className="container-fluid">
      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <dl>
          <dt>Id</dt>
          <dd>
            <input type="number" onChange={handleIdChange} />
          </dd>
          <dt>Name</dt>
          <dd>
            <input type="text" onChange={handleNameChange} />
          </dd>
          <dt>Category</dt>
          <dd>
            <select name="" id="" onChange={handleCategoryChange}>
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </dd>
        </dl>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
