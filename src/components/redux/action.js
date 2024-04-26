import axios from "axios";

const BASE_URL = "https://imdb-backend-cbwj.onrender.com";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/register`,
      userData
    );
    if (!response.data) {
      throw new Error("Unable to register");
    }
    dispatch({ type: "REGISTER_USER", payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: error.message });
    console.log(error.message);
  }
};

export const loginUser = (userData) => async (dispatch) => {
    try {
      console.log(userData)
    const response = await axios.post(
      `${BASE_URL}/api/user/login`,
      userData
    );
    if (!response.data) {
      throw new Error("Unable to login");
    }
    dispatch({ type: "LOGIN_USER", payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.response.data.message });
    console.log(error.message);
    throw error;
  }
};
export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user/allUser`);

    if (!response.data) {
      throw new Error("Unable to get data");
    }
    dispatch({ type: "GET_USER", payload: response.data });

    console.log(response.data);
  } catch (error) {
    dispatch({ type: "GET_ERROR", payload: error.response.data.message });
    console.log(error.message);
    throw error;
  }
};
export const getMovie = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/allMovie`);

    if (!response.data) {
      throw new Error("Unable to get data");
    }
    dispatch({ type: "GET_MOVIE", payload: response.data });

    console.log(response.data);
  } catch (error) {
    dispatch({ type: "GET_ERROR", payload: error.response.data.message });
    console.log(error.message);
    throw error;
  }
};

export const addMovie = (movieData) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/movie/addMovie`, movieData);
    if (!response.data) {
      throw new Error("Unable to add movie");
    }
    dispatch({ type: "ADD_MOVIE", payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "ADD_ERROR", payload: error.message });
    console.log(error.message);
    throw error;
  }
};
export const editMovie = (id, movieData) => async (dispatch) => {
  try {

    const movieResponse = await axios.get(`${BASE_URL}/movie/allMovie/${id}`);

    if (!movieResponse.data) {
      throw new Error("Unable to fetch movie details");
    }

    const updatedMovieData = {
      ...movieResponse.data,
      ...movieData,
    };

    const response = await axios.put(
      `${BASE_URL}/movie/editMovie/${id}`,
      updatedMovieData
    );

    if (!response.data) {
      throw new Error("Unable to update movie");
    }

    dispatch({ type: "EDIT_MOVIE", payload: response.data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};