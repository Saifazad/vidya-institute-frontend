import axios from "axios";

export const api = axios.create({
  baseURL: "https://vidya-institute-backend.onrender.com/api",
});

// baseURL: "http://localhost:5001/api
