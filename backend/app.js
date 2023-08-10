import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import { chatGeneration, imageGeneration } from "./src/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";

const database = "db";

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connection established successfully");

    const db = client.db("your_database");
    const collection = db.collection("user");
    console.log("Collection", collection);
    const dataToInsert = { name: "John Doe", age: 30 };

    collection.insertOne(dataToInsert, (err, result) => {
      if (err) {
        console.error("Error inserting document:", err);
      } else {
      }
      console.log("Document inserted successfully:", result.insertedId);
      client.close();
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB().catch((error) => {
  console.error("Unhandled Promise Rejection:", error);
});

app.get("/chat", async (req, res) => {
  try {
    const { prompt } = req.query;
    const data = await chatGeneration(prompt);
    res.json(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/image", async (req, res) => {
  try {
    const { prompt } = req.query;
    const data = await imageGeneration(prompt);
    res.json(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
