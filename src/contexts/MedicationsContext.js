import { createContext, useReducer } from "react";
import medicationsReducer from "../reducers/medicationsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  medications: [],
  error: null,
};

export const MedicationsContext = createContext();

const MedicationsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(medicationsReducer, initialState);
  //get all medications
  async function getMedications() {
    const res = await axios.get(
      "https://dodoo-medicinequantity-api.herokuapp.com/api/DA/medications"
    );
    try {
      dispatch({
        type: "GET_MEDICATIONS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <MedicationsContext.Provider
      value={{
        medications: state.medications,
        loading: state.loading,
        getMedications,
      }}
    >
      {children}
    </MedicationsContext.Provider>
  );
};

export default MedicationsContextProvider;
