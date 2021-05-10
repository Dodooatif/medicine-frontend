import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import axios from "axios";

const initialState = {
  loading: true,
  userInfo: {},
  error: null,
};

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(userReducer, initialState);

  //signin user
  async function signinUser(userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://dodoo-medicinequantity-api.herokuapp.com/api/DA/users/signin",
      userInfo,
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(res.data));
    const userSignin = (await localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};

    dispatch({
      type: "SIGNIN",
      payload: userSignin,
    });
    console.log(res.data);
  }
  //logout
  async function logout() {
    await localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  }

  //signup user
  async function signupUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://dodoo-medicinequantity-api.herokuapp.com/api/DA/users/signup",
        newuser,
        config
      );

      dispatch({
        type: "SIGNUP_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userInfo: state.userInfo,
        loading: state.loading,
        signinUser,
        signupUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
