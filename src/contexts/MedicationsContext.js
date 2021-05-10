import { createContext, useReducer } from "react";
import patientsReducer from "../reducers/medicationsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  medications: [],
  error: null,
};

export const MedicationsContext = createContext();

const MedicationsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(patientsReducer, initialState);
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
  async function addMedication() {
    const res = await axios.post(
      "https://dodoo-medicinequantity-api.herokuapp.com/api/DA/medications"
    );
    try {
      dispatch({
        type: "ADD_MEDICATION",
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
        addMedication
      }}
    >
      {children}
    </MedicationsContext.Provider>
  );
};

export default MedicationsContextProvider;
