/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'; // Correct toast import
import 'react-toastify/dist/ReactToastify.css'; // Ensure toast CSS is imported
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token'):false)

  const [userData,setUserData] = useState(false)


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () =>{
    try {
      const {data} = await axios.get(`${backendUrl}/api/user/get-profile`,{headers:{token}})
      if(data.success){
        setUserData(data.userData)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  // Context value to be provided
  const value = {
    doctors,getDoctorsData,
    currencySymbol: '₹',
    token,setToken,
    backendUrl,
    userData,setUserData,
    loadUserProfileData
  };
  // Use effect to fetch data on component mount
  useEffect(() => {
    getDoctorsData();
  }, [getDoctorsData]);

  useEffect(()=>{
    if(token){
      loadUserProfileData()
    }else{
      setUserData(false)
    }
  },[token])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
