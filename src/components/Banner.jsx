import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Import your AppContext
import appointment_img from "../assets/appointment_img.png";

const Banner = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext); // Access the token from context

  const handleNavigation = () => {
    if (token) {
      // User is logged in, redirect to home or dashboard
      navigate("/my-profile"); // Replace with the appropriate route
    } else {
      // User is not logged in, show the login page
      navigate("/login");
      scrollTo(0, 0);
    }
  };

  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* ---left side--- */}
      <div className="flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={handleNavigation}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          {token ? "Go to My Profile" : "Create Account"}
        </button>
      </div>

      {/* ---right side--- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
