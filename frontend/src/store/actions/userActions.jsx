import axios from "../../api/apiconfig";
import { loadUser,logoutUser } from "../reducers/userSlice";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/auth/signup", userData);
    dispatch(loadUser(data));
  } catch (error) {
    console.log(error.message);
  }
};



export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/auth/login", userData);
    dispatch(loadUser(data));
  } catch (error) {
    console.log(error.message);
  }
};


export const currentUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/user/me");
    dispatch(loadUser(data));
  } catch (error) {
    console.log(error.message);
  }
};



export const logout = () => async (dispatch) => {
  try {
    await axios.get("/api/user/logout");
    dispatch(logoutUser());
  } catch (error) {
    console.log(error.message);
  }
};
