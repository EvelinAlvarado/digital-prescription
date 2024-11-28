import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4000",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export const API_ENDPOINTS = {
  GET_PRESCRIPTIONS: "/prescriptions",
  ADD_PRESCRIPTION: "/prescriptions",
  UPDATE_PRESCRIPTION: "/prescriptions",
};
