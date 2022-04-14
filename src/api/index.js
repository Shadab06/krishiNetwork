import axios from "axios";

const API = axios.create({ baseURL: "https://api.krishi.network/mandi?lat=28.44108136&lon=77.0526054&ver=89&lang=hi&crop_id=10" });

export const fetchData = () => API.get();