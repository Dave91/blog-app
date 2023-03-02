import React, { useState, useEffect } from "react";
import "./bugCard.css";

export default function Card(props) {
  const bugData = props.bugData;
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedData, setBugClickedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const cats = ["books", "games", "movies", "music", "nature", "poetry"];
  const [filts, setFilts] = useState(cats);

  const filterClicked = (cat) => {
    if (filts.includes(cat)) {
      setFilts(filts.filter((f) => f !== cat));
    } else {
      setFilts([...filts, cat]);
    }
  };

  const editClicked = (bug) => {
    props.editClicked(bug);
  };

  const cardActive = (data) => {
    setBugClicked(!bugClicked);
    setBugClickedData(data);
  };

  return (
    <div className="bug-cont">
      <div className="filter-panel">
        <div className="filters">
          {cats.map((cat) => (
            <button
              className={"filt-btn" + (filts.includes(cat) ? " on" : "")}
              onClick={() => filterClicked(cat)}
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {bugData.map((data) => {
        return (
          <div
            className={
              "bug-card " +
              data.bcategory +
              (filts.includes(data.bcategory) ? "" : " hide")
            }
            onClick={() => cardActive(data)}
            onMouseEnter={() => cardActive(data)}
            onMouseLeave={() => setBugClicked(false)}
            key={data.bid}
          >
            {bugClickedData.bid === data.bid && bugClicked && (
              <div className="edit-panel">
                <button
                  className="panel-btn delete"
                  onClick={() => props.deleteClicked(data.bid)}
                >
                  Delete
                </button>
                <button
                  className="panel-btn"
                  onClick={() => editClicked(bugClickedData)}
                >
                  Edit
                </button>
              </div>
            )}
            <h2>{data.btitle}</h2>
            <h5>Image</h5>
            <img src={data.bimage} alt=""></img>
            {data.btext.split("\n").map((para, ind) => (
              <p>{para}</p>
            ))}
            <h4>Category: {data.bcategory}</h4>
            <h4>Likes: {data.blikes}</h4>
          </div>
        );
      })}
    </div>
  );
}
