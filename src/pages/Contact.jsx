import contact_image from '../assets/contact_image.png'

const Contact = () => {

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className='py-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={contact_image} alt="" />

      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-500'>00000 Willms Station <br />312 Calicut,Kerala,India</p>
        <p className='text-gray-500'>Tel: 0123456789 <br />Email: test@gmail.com</p>
        <p className='font-semibold text-lg text-gray-600'>CAREERS AT DOCTOR CARE</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>
    </div>
  )
}

export default Contact