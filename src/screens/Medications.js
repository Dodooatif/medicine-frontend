import { Spinner, Table } from "react-bootstrap";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
import small from "../images/small.jpg";
import useMedications from "../hooks/useMedications";

const Medications = () => {
  const { loading, error, medications } = useMedications(
    "https://dodoo-medicinequantity-api.herokuapp.com/api/DA/medications"
  );
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        backgroundImage: `url(${small})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {loading && <Spinner className="text-center" animation="grow" />}
      {error && <h1>OOPS !!! Something went wrong</h1>}
      { medications.length > 0 ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>DATE</th>
              <th>MEDICATION NAME</th>
              <th>QUANTITY</th>
              <th>DOSE</th>
              <th>DURATION</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((medication) => (
              <tr key={medication._id}>
                <td>{medication.date}</td>
                <td>{medication.name}</td>
                <td>{medication.quantity}</td>
                <td>{medication.dose}</td>
                <td>{medication.duration}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
};

export default Medications;
