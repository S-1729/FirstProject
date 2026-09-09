import { useRef, useState } from "react";

export function FormRefDemo() {
  const idRef = useRef(null);
  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const payRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    console.log({
      Id: idRef.current.value,
      Name: nameRef.current.value,
      Category: categoryRef.current.value,
      PaymentMode: payRef.current.value,
    });
  }

  return (
    <div className="container-fluid">
      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <dl>
          <dt>Id</dt>
          <dd>
            <input type="number" name="Id" ref={idRef} />
          </dd>
          <dt>Name</dt>
          <dd>
            <input type="text" name="Name" ref={nameRef} />
          </dd>
          <dt>Category</dt>
          <dd>
            <select name="Category" id="" ref={categoryRef}>
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </dd>
          <dt>Payment</dt>
          <dd>
            <input type="radio" name="Pay" value="Cash" ref={payRef} />
            <label>Cash</label>

            <input type="radio" name="Pay" value={"UPI"} ref={payRef} />
            <label>Upi</label>

            <input type="radio" name="Pay" value="Credit Card" ref={payRef} />
            <label>Credit Card</label>
          </dd>
        </dl>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

/*

const cashRef = useRef(null);
const upiRef = useRef(null);
const cardRef = useRef(null);

    let paymentMode = "";

    if (cashRef.current.checked) {
      paymentMode = cashRef.current.value;
    } else if (upiRef.current.checked) {
      paymentMode = upiRef.current.value;
    } else if (cardRef.current.checked) {
      paymentMode = cardRef.current.value;
    }

*/
