import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"
import {useNavigate} from "react-router-dom"

const Myappointments = () => {
  const {backendUrl,token} = useContext(AppContext)
  const [appointments,setApointment] = useState([])
  const navigate = useNavigate()
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","Oct","Nov","Dec"]

  const slotDateFormat = (slotDate) => { const dateArray = slotDate.split('_'); const monthIndex = parseInt(dateArray[1], 10) - 1; 
     return dateArray[0] + " " + months[monthIndex] + " " + dateArray[2];
     };

  const getUserAppointment = async () =>{
    try {
      const {data} = await axios.get(`${backendUrl}/api/user/appointment`,{headers:{token}})
      if(data.success){
        setApointment(data.appointment.reverse())
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  const cancelAppointment = async(appointmentId) =>{
    try {
      const {data} =await axios.post(`${backendUrl}/api/user/cancel-appointment`,{appointmentId},{headers:{token}})
      if(data.success){
        toast.success(data.message)
        getUserAppointment()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const initPay = (order) =>{
    const option = {
      key:import.meta.env.VITE_RAZPORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:"Appointment Payment",
      description:"Appointment Payment",
      order_id:order.id,
      receipt:order.receipt,
      handler:async (response)=>{
        console.log(response);
        
        try {
          const {data} = await axios.post(`${backendUrl}/api/user/verify-Razorpay`,response,{headers:{token}})
          if(data.success){
            getUserAppointment()
            navigate('/myappointments')
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(option)
    rzp.open()
  }

  const appointmentRazorpay = async(appointmentId) =>{
    try {
      const {data} = await axios.post(`${backendUrl}/api/user/payment-razorpay`,{appointmentId},{headers:{token}})
      if(data.success){
        initPay(data.order)
        
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      getUserAppointment()
    }
  },[token])
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My appointment</p>
      <div>
        {appointments.map((item,index)=>(
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.docData.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.docData.address.line1}</p>
              <p className="text-xs">{item.docData.address.line2}</p>
              <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              {!item.cancelled && item.payment && <button className="sm:min-w-48 py-2 border rouunded text-stone-500 bg-indigo-50">paid</button>}
              {!item.cancelled && !item.payment &&<button onClick={()=>appointmentRazorpay(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>}
              {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-500 hover:text-white transition-all duration-300">Cancel Appointment</button>}
              {item.cancelled && <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">appointment cancelled</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myappointments