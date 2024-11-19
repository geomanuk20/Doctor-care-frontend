import { useContext, useEffect, useState,useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => { 
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const[showFilter,setShowFilter] = useState(false)
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
 const applyFilter = useCallback(() => { 
  if (speciality) {
     setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
     } else { 
      setFilterDoc(doctors); 
    }
   }, [speciality, doctors]);

     useEffect(() => {
       applyFilter();
       }, [applyFilter]); 

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
      <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)} > Filter </button>
        <div className={` flex-col gap-2 text-sm text-gray-600 ${showFilter ? 'flex': 'hidden sm:flex'}`}>
          <p onClick={()=>speciality ==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-slate-500 hover:text-white ${speciality === 'Pediatricians' ? 'bg-slate-500 text-white ' : ''} `}>Pediatricians</p>
          <p onClick={()=>speciality ==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-slate-500 hover:text-white ${speciality === 'Neurologist' ? 'bg-slate-500 text-white' : ''}`}>Neurologist</p>
          <p onClick={()=>speciality ==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-slate-500 hover:text-white ${speciality === 'Dermatologist' ? 'bg-slate-500 text-white' : ''}`}>Dermatologist</p>
          <p onClick={()=>speciality ==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-slate-500 hover:text-white ${speciality === 'Gynecologist' ? 'bg-slate-500 text-white' : ''}`}>Gynecologist</p>
          <p onClick={()=>speciality ==='General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-slate-500 hover:text-white ${speciality === 'General physician' ? 'bg-slate-500 text-white' : ''}`}>General physician</p>
          <p onClick={()=>speciality ==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-slate-500 hover:text-white ${speciality === 'Gastroenterologist' ? 'bg-slate-500 text-white' : ''}`}>Gastroenterologist</p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p >Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
