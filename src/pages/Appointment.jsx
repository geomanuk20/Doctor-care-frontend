import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import verified_icon from '../assets/verified_icon.svg';
import info_icon from '../assets/info_icon.svg';
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token ,getDoctorsData } = useContext(AppContext);
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null);
  const [docsSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  useEffect(() => {
    const fetchDocInfo = () => {
      const docInfo = doctors.find(doc => doc._id === docId);
      setDocInfo(docInfo);
    };
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    const getAvailableSlots = () => {
      const today = new Date();
      const slots = [];
    
      const generateSlotsForDay = (dayOffset) => {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + dayOffset);
    
        let endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);
    
        if (today.toDateString() === currentDate.toDateString()) {
          currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10, 0, 0, 0);
        }
    
        const timeSlots = [];
        while (currentDate < endTime) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          });

          
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
    
        return timeSlots;
      };
    
      for (let i = 0; i < 7; i++) { 
        slots.push(generateSlotsForDay(i));
      }
    
      setDocSlots(slots);
    };
    

    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  const handleSlotClick = (index,time) => {
    setSlotIndex(index);
    setSlotTime(time)
  };

  const bookappointment = async () => {
    if (!token) {
      toast.warn("Login to book an appointment");
      return navigate("/login");
    }
  
    try {
      const selectedSlot = docsSlots[slotIndex][0];
      if (!selectedSlot) {
        toast.error("Please select a valid slot");
        return;
      }
  
      const date = selectedSlot.datetime;
      const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;
  
      // Rename 'data' to 'responseData' to avoid redeclaration error
      const { data: responseData } = await axios.post(`${backendUrl}/api/user/book-appointment`, {
        docId,
        slotDate,
        slotTime
      }, {
        headers: { token }
      });
  
      if (responseData.success) {
        toast.success(responseData.message);
        getDoctorsData();
        navigate("/myappointments");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to book the appointment");
    }
  };
  
  return (
    <div>
      {docInfo ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={docInfo.name} />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4"> 
              Appointment fee : <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docsSlots.length > 0 &&
              [...new Map(docsSlots.flat().map(slot => [slot.datetime.toDateString(), slot.datetime]))]
                .map(([, dateObj], index) => (
                  <div
                    className={`text-center py-4 min-w-16 rounded-full cursor-pointer ${
                      slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'
                    }`}
                    key={index}
                    onClick={() => handleSlotClick(index)}
                  >
                    <p>{dayOfWeek[dateObj.getDay()]}</p>
                    <p>{dateObj.getDate()}</p>
                  </div>
                ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docsSlots.length && docsSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': 'text-gray-400 border border-gray-300'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>
          <button onClick={bookappointment} className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
                Book an Appointment
              </button>
        </div>

        {
        docInfo && docInfo.speciality && doctors?.length > 0 && (
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        )
      }

    </div>
  );
};

export default Appointment;
