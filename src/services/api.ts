import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://5d4f-2804-7f0-aa05-742-1ccf-3d16-fec7-1a34.ngrok-free.app/users/sessions",
});
