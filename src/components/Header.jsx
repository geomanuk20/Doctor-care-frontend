import group_profiles from "../assets/group_profiles.png";
import arrow_icon from "../assets/arrow_icon.svg";
import header_img from "../assets/header_img.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 items-center">
      {/* ---- Left Side ---- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={group_profiles} alt="Group Profiles" className="mb-4" />
          <p className="text-white text-sm md:text-base leading-relaxed">
            Lorem ipsum molestias quidem voluptates quod ad totam veritatis <br />
            velit, dolorum cumque quas fugiat, dolores perferendis!
          </p>
          <a
            href="#speciality"
            className="mt-4 inline-flex items-center text-white hover:bg-sky-400 bg-sky-500 px-4 py-2 rounded-lg shadow-lg hover:bg-secondary-dark transition"
          >
            Book Appointment
            <img src={arrow_icon} alt="Arrow" className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ---- Right Side ---- */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        <img
          className="w-full h-auto md:absolute right-0 md:rounded-lg"
          src={header_img}
          alt="Header Illustration"
        />
      </div>
    </div>
  );
};

export default Header;
