import axios from "axios";

const API_URL = "http://localhost:9999/api";

const ServiceUrl = {
  create: async (dto, url) => {
    const api = axios.create({
      baseURL: `${API_URL}${url}`, 
    });
    const response = await api.post("/", dto);
    return response.data;
  },

  update: async (dto, url) => {
    const api = axios.create({
      baseURL: `${API_URL}${url}`, 
    });
    const response = await api.put("/", dto);
    return response.data;
  },

  getAll: async (url) => {
    const api = axios.create({
      baseURL: `${API_URL}${url}`, // Your Express.js backend URL
    });
    const response = await api.get("/");
    return response.data;
  },

  updateStatus: async (id, url) => {
    const api = axios.create({
      baseURL: `${API_URL}${url}`, // Your Express.js backend URL
    });
    const response = await api.put(`/changeStatus/${id}`, {});
    return response.data;
  },

  search: async (page, size, searchString, url) => {
    const api = axios.create({
      baseURL: `${API_URL}${url}`, // Your Express.js backend URL
    });
    const response = await api.get(
      `?page=${page}&size=${size}&searchString=${searchString}`
    );
    return response.data;
  },
};

export default ServiceUrl;
