import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const SlideShow = () => {
  const [recipe, setRecipe] = useState({ id: 0, name: "", image: "" });

  let idRef = useRef(1);
  let playRef = useRef(null);

  function LoadData(id) {
    axios.get(`https://dummyjson.com/recipes/${id}`).then((response) => {
      setRecipe(response.data);
    });
  }

  useEffect(() => {
    LoadData(1);
  }, []);

  function handlePrevClick() {
    idRef.current = idRef.current - 1;
    LoadData(idRef.current);
  }

  function handleNextClick() {
    idRef.current = idRef.current + 1;
    LoadData(idRef.current);
  }

  function handleSeekBarChange(e) {
    idRef.current = Number(e.target.value);
    LoadData(idRef.current);
  }

  function handlePlayClick() {
    if (playRef.current != null) return;
    playRef.current = setInterval(handleNextClick, 2000);
  }
  function handlePauseClick() {
    clearInterval(playRef.current);
    playRef.current = null;
  }

  return (
    <div className="container-fluid d-flex justify-content-center p-2">
      <div className="card p-2 w-50 mt-3">
        <div className="card-header text-center fs-4">
          {recipe.name} {recipe.id}
        </div>

        <div className="card-body">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-1">
              <button
                className="btn btn-dark bi bi-chevron-bar-left"
                onClick={handlePrevClick}
              ></button>
            </div>

            <div className="col-10">
              <img
                src={recipe.image}
                alt=""
                style={{ height: "450px" }}
                className="w-100"
              />
              <div>
                <input
                  type="range"
                  className="form-range mt-3"
                  onChange={handleSeekBarChange}
                  value={idRef.current}
                  min={1}
                  max={50}
                />
              </div>
            </div>

            <div className="col-1">
              <button
                className="btn btn-dark bi bi-chevron-bar-right"
                onClick={handleNextClick}
              ></button>
            </div>
          </div>
        </div>

        <div className="card-footer text-center">
          <button
            className="btn btn-success bi bi-play-fill"
            onClick={handlePlayClick}
          ></button>
          <button
            className="btn btn-warning bi bi-pause-fill mx-2"
            onClick={handlePauseClick}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
