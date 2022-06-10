import axios from "axios";
// API: https://api.themoviedb.org/3/movie/now_playing?api_key=be55ea42c1a743f1744bea2000611bde&language=pt-br&include_image_language=pt-br,null

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
