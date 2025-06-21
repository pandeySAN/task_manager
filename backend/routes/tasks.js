const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tasks ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  console.log("Incoming title:", title); // 🧪 DEBUG log

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const result = await db.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
      [title]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST error:", err); // 🧪 DEBUG log
    res.status(500).json({ error: "Failed to add task" });
  }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db.query("DELETE FROM tasks WHERE id = $1", [id]);
  
      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      res.json({ message: "Task deleted" });
    } catch (err) {
      console.error("DELETE error:", err); // ✅ log error to terminal
      res.status(500).json({ error: "Failed to delete task" });
    }
  });
  

module.exports = router;
