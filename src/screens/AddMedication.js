import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import Spill from "../images/Spill.jpg";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

const AddMedication = () => {
  const { userInfo } = useContext(UserContext);

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dose, setDose] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: userInfo.token,
      },
    };
    await axios.post(
      "https://dodoo-medicinequantity-api.herokuapp.com/api/DA/medications",
      {
        date,
        name,
        quantity,
        dose,
        duration,
      },
      config
    );
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Spill})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          width: "350px",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 15,
          padding: "20px",
          marginLeft: "12%",
          border: "2px solid black",
          borderRadius: "9px",
          backgroundImage: `url(${Spill})`,
        }}
      >
        <h3 className="text-center"> Medication Form</h3>
        <Form.Control
          placeholder="Enter Date"
          value={date}
          onChange={(text) => setDate(text.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="Enter Medication Name"
          value={name}
          onChange={(text) => setName(text.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="Enter Quantity"
          value={quantity}
          onChange={(text) => setQuantity(text.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="Enter Dose "
          value={dose}
          onChange={(text) => setDose(text.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="Enter Duration "
          value={duration}
          onChange={(text) => setDuration(text.target.value)}
        ></Form.Control>
        <Button type="submit">SAVE</Button>
      </Form>
    </div>
  );
};

export default AddMedication;
