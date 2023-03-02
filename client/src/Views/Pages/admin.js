import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../../Controllers/authController";
import Card from "../Components/bugCard";
import BugForm from "../Components/bugForm";
import "./admin.css";

export default function Admin() {
  const [bugData, setBugData] = useState([]);
  //const [currUser, setCurrUser] = useState(useAuth.currentUser);
  //const { logoutAuth } = useAuth();
  const navigate = useNavigate();
  const [showBugForm, setShowBugForm] = useState(false);
  const [editBug, setEditBug] = useState([]);
  const [formTitle, setFormTitle] = useState("");

  const editClicked = (bug) => {
    setFormTitle("Edit Bug");
    setShowBugForm(true);
    setEditBug(bug);
  };

  //DELETE BUG
  const deleteClicked = async (bugId) => {
    try {
      await axios.post("http://localhost:5000/bugs/del", { bugId });
      updPage();
    } catch (error) {
      console.log(error);
    }
  };

  //GET ALL BUGS
  const updPage = () => {
    axios
      .get("http://localhost:5000/bugs/all")
      .then((res) => {
        setBugData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function logoutClicked(e) {
    try {
      //setCurrUser("");
      //await logoutAuth();
      console.log("Logged out.");
      navigate("/");
    } catch {
      console.log("Error: logout has failed.");
    }
  }

  function viewClicked() {
    setShowBugForm(false);
    updPage();
  }

  function createClicked() {
    setFormTitle("Create Bug");
    setShowBugForm(true);
  }

  useEffect(() => {
    updPage();
  }, []);

  return (
    <div className="page-cont">
      <div className="menubar">
        <div className="menubar-btn" onClick={viewClicked}>
          Home
        </div>
        <div className="menubar-btn" onClick={createClicked}>
          Create
        </div>
        <div className="menubar-btn" onClick={logoutClicked}>
          Logout
        </div>
      </div>
      <div className="content">
        {showBugForm ? (
          <BugForm
            editBug={editBug}
            updPage={updPage}
            currUser={"currUser"}
            formTitle={formTitle}
          />
        ) : (
          <Card
            bugData={bugData}
            editClicked={editClicked}
            deleteClicked={deleteClicked}
          />
        )}
      </div>
    </div>
  );
}
