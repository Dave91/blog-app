import express from "express";
import mysql2 from "mysql2";
import db from "../config/dbConfig.js";

const router = express.Router();
const conn = mysql2.createConnection(db);

router.get("/all", async (req, res) => {
  try {
    const [results] = await conn.promise().query("SELECT * FROM blogs");
    console.log(results.length + " bugs loaded.");
    res.status(200).send(results);
  } catch (error) {
    console.error("get error: " + error);
    res.status(500).send("Error while accessing data!");
  }
});

router.post("/add", async (req, res) => {
  try {
    let data = req.body;
    await conn
      .promise()
      .query(
        "INSERT INTO blogs (btitle, btext, bimage, bcategory) VALUES (?, ?, ?)",
        [data.blog_title, data.blog_text, data.blog_category]
      );
    console.log("Bug created.");
    res.status(200).send("Bug created.");
  } catch (error) {
    console.log("add error: " + error);
    res.status(500).send("Error while writing data!");
  }
});

router.post("/del", async (req, res) => {
  try {
    let data = req.body.bugId;
    await conn.promise().query("DELETE FROM bt_bugs WHERE bug_id = ?", [data]);
    console.log("Bug removed: id" + data);
    res.status(200).send("Bug removed.");
  } catch (error) {
    console.log("del error: " + error);
    res.status(500).send("Error while removing data!");
  }
});

router.post("/edit", async (req, res) => {
  try {
    let data = req.body;
    await conn
      .promise()
      .query(
        "UPDATE bt_bugs SET bug_name = ?, bug_details = ?, bug_steps = ?, bug_version = ?, bug_priority = ?, bug_assigned = ?, bug_created = ?, bug_status = ? WHERE bug_id = ?",
        [
          data.bug_name,
          data.bug_details,
          data.bug_steps,
          data.bug_version,
          data.bug_priority,
          data.bug_assigned,
          data.bug_created,
          data.bug_status,
          data.bug_id,
        ]
      );
    console.log("Bug updated: id" + data.bug_id);
    res.status(200).send("Bug updated.");
  } catch (error) {
    console.log("edit error: " + error);
    res.status(500).send("Error while updating data!");
  }
});

export default router;
