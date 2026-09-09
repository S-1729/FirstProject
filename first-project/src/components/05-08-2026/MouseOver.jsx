//05-08-2026

import React, { useEffect, useState } from "react";
import axios from "axios";

const MouseOver = () => {
  const [products, setProducts] = useState([{ id: 0, image: "" }]);
  const [preview, setPreview] = useState("");

  function LoadProducts() {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProducts(response.data);
        setPreview(response.data[0].image);
      });
  }

  function handleMouseOver(e) {
    setPreview(e.target.src);
  }

  useEffect(() => {
    LoadProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          {products.map((prod) => (
            <div key={prod.id} className="mt-4">
              <img
                src={prod.image}
                alt={prod.title}
                width="100"
                onMouseOver={handleMouseOver}
              />
            </div>
          ))}
        </div>

        <div className="col-10">
          <div className="mt-5">
            <img src={preview} alt="" height={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseOver;

/*




import React, { useEffect, useState } from "react";
import axios from "axios";

const MouseOver = () => {
  const [products, setProducts] = useState([{ id: 0, image: "" }]);
  const [preview, setPreview] = useState({});

  function LoadProducts() {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProducts(response.data);
        setPreview(response.data[0].image);
      });
  }

  function handleMouseOver(prod) {
    setPreview(prod);
  }

  useEffect(() => {
    LoadProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          {products.map((prod) => (
            <div key={prod.id} className="mt-4">
              <img
                src={prod.image}
                alt={prod.title}
                width="100"
                onMouseOver={() => handleMouseOver(prod)}
              />
            </div>
          ))}
        </div>

        <div className="col-10">
          <div className="mt-5 w-50">
            <img src={preview.image} alt="" height={450} />
            <h3>{preview.title}</h3>
            <p>{preview.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseOver;








*/
