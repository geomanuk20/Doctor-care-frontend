import { useState } from "react";
import profile_pic from '../assets/profile_pic.png'; // Correctly import the image

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Geo Manu",
    image: profile_pic, // Correct usage of the imported image
    email: 'geomanuk20@gmail.com',
    phone: '1234567890',
    address: {
      line1: '312, Calicut',
      line2: 'Kerala, India'
    },
    gender: 'male',
    dob: "2000-09-27"
  });

  function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const [isEdit, setIsEdit] = useState(false); // Default to view mode

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img  className="w-36 rounded" src={userData.image} alt="Profile" />
      {isEdit ? (
        <input 
        className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text" 
          value={userData.name} 
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 nt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input 
            className="bg-gray-100 max-w-52 "
              type="text" 
              value={userData.phone} 
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input 
              className="bg-gray-50"
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                value={userData.address.line1} 
                type="text" 
              />
              <br />
              <input 
              className="bg-gray-50"
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                value={userData.address.line2} 
                type="text" 
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select 
            className="max-w-28 bg-gray-100"
              onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input 
            className="max-w-28 bg-gray-100"
              type="date" 
              onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
              value={userData.dob} 
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
          <p className="font-medium">Age:</p>
          <p>{calculateAge(userData.dob)} <span className="text-gray-400">years old</span></p>
        </div>
      </div>
      <div className="mt-10">
        <button className="border border-primary px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Save" : "Edit"}
        </button>
        {isEdit && (
          <button className="border border-red-500 mx-2 px-8 py-2 rounded-full hover:bg-red-500 hover:text-white" onClick={() => setIsEdit(false)}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default Myprofile;
