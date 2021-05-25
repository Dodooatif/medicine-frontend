import { useState, useEffect } from "react";
import axios from "axios";

const useMedications = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchMedications = async () => {
      const config = {
        headers: {
          authorization: JSON.parse(localStorage.getItem("userInfo")).token,
        },
      };
      console.log(config)
      setLoading(true);
      const {data} = await axios
        .get(url, config)
        // .then((res) => res.json())
        .catch((err) => setError(err));
      console.log(data);
      setMedications(data);
      setLoading(false);
    }

    fetchMedications();
  }, [url]);

  return {
    loading,
    error,
    medications,
  };
};

export default useMedications;
