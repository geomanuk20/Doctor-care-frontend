import logodc from '../assets/logodc.png'
const Footer = () => {
  return (
    <div>
<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <img className='w-20' src={logodc} alt="" />
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a href=""><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/50/facebook-new.png" alt="facebook-new"/></a>
          </li>

          <li>
            <a href=""><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="instagram-new"/></a>
          </li>

          <li>
            <a href=""><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png" alt="twitter--v1"/></a>
          </li>

          <li>
            <a href=""><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/></a>
          </li>

          <li>
           <a href=""><img width="30" height="30" src="https://img.icons8.com/material-rounded/100/dribbble.png" alt="dribbble"/></a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">About Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                Company History
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                Meet the Team
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                Employee Handbook
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                Pediatrcians
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Neurologist </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Dermatolagist </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Gynecologist </a>
            </li>
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> General physician </a>
            </li>
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Gastroenterologist </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Support </a>
            </li>

            <li>
              <a
                className="group flex  md:justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end justify-center"
                href="#"
              >
                <span className="text-gray-700 transition group-hover:text-gray-700/75">
                  Live Chat
                </span>

                <span className="relative flex size-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                  ></span>
                  <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <img width="20" height="20" src="https://img.icons8.com/ios/20/new-post--v1.png" alt="new-post--v1"/>

                <span className="flex-1 text-gray-700">test@gmail.com</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <img width="20" height="20" src="https://img.icons8.com/forma-light/20/phone.png" alt="phone"/>
                <span className="flex-1 text-gray-700">0123456789</span>
              </a>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
             <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/20/marker--v1.png" alt="marker--v1"/>

              <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                312 calicut,kerala,india
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>

          <a
            className="inline-block text-blue-400 underline-none transition hover:text-blue-900/75"
            href="#"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            className="inline-block text-blue-400 underline-none transition hover:text-blue-900/75"
            href="#"
          >
            Privacy Policy
          </a>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Doctor Care</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer