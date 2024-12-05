import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captainlogin");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch captain profile", error);
        localStorage.removeItem("token");
        navigate("/captainlogin");
      });
  }, [token]);

  if (isLoading) return <h1>Loading...</h1>;
  return <>{children}</>;
};
export default CaptainProtectedWrapper;
