import { useState } from "react";

export function FormDataDemo() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    let data = new FormData(e.target);
    console.log({
      Id: parseInt(data.get("Id")),
      Name: data.get("Name"),
      Category: data.get("Category"),
      PaymentMode: data.get("Pay"),
    });
  }

  return (
    <div className="container-fluid">
      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <dl>
          <dt>Id</dt>
          <dd>
            <input type="number" name="Id" />
          </dd>
          <dt>Name</dt>
          <dd>
            <input type="text" name="Name" />
          </dd>
          <dt>Category</dt>
          <dd>
            <select name="Category" id="">
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </dd>
          <dt>Payment</dt>
          <dd>
            <input type="radio" name="Pay" value="Cash" />
            <label>Cash</label>

            <input type="radio" name="Pay" value={"UPI"} />
            <label>Upi</label>

            <input type="radio" name="Pay" value="Credit Card" />
            <label>Credit Card</label>
          </dd>
        </dl>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
