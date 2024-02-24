import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import db from "./src/Firebase.js";
import { app } from "./src/Firebase.js";
import express from "express";
import cors from "cors";
const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

server.post("/post", async (req, res) => {
  try {
    const docRef = await addDoc(collection(db, "jobs"), req.body);
    res.status(201).json("Added successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(500).json(e);
  }
});

server.get("/jobs", async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "jobs"));
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  res.json(result);
});

server.post("/jobs", async (req, res) => {
  const q = query(
    collection(db, "jobs"),
    where("pincode", "==",req.body.pincode)
  );
  const response = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    response.push(doc.data());
  });
  res.status(201).json(response);
});

server.listen(port);
