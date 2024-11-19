import about_image from '../assets/about_image.png'

const About = () => {
  return (
    <div>
     <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>About <span className='text-gray-700 font-medium'>US</span></p>
     </div>

     <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p> Doctor Care Hospital is a leading healthcare institution dedicated to providing comprehensive medical care to its patients. The hospital is equipped with advanced medical technology and staffed by a team of highly skilled professionals, including doctors, nurses, and specialists. </p>
        <p>It offers a wide range of services, from emergency care and surgery to specialized treatments in cardiology, neurology, and pediatrics. With a focus on patient-centered care, Doctor Care Hospital ensures that each patient receives personalized attention and the highest quality treatment.</p>
        <p>The hospital is committed to promoting health and well-being through preventive care, early diagnosis, and effective treatment strategies.</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
      </div>
     </div>

     <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
     </div>

     <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-auto py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>EFFICIENCY:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
      <div className='border px-10 md:px-auto py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>CONVENIENCE:</b>
      <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className='border px-10 md:px-auto py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>PERSONALIZATION:</b>
      <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>

     </div>
    </div>
  )
}

export default About