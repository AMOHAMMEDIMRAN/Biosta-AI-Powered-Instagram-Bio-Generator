import { footer } from "../assets/footer"


const Footer = () => {
    return (
      <div>
          <footer className="bg-[#E3F2FD] mt-10">
      <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
              
              <p className="mb-5 font-outfit text-[#1E3A5F]">{footer.finalPitch}</p>
              <p className="mb-5 font-outfit text-[#1E3A5F]">{footer.socialMedia}</p>
              <p className="mb-5 font-bold font-outfit text-[#1E3A5F]">{footer.contactUs}</p>
  
          </div>
  
          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
  
          <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
              <p className="text-sm font-outfit text-[#1E3A5F]">© Copyright 2025. All Rights Reserved.</p>
          </div>
      </div>
  </footer>
      </div>
    )
  }
  export default Footer