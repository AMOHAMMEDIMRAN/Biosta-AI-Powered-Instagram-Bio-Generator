import heroContent from "../assets/heroContent";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center py-16 md:py-24">
          {/* Title */}
          <h1 className="text-[32px] md:text-[48px] font-bold font-outfit text-[#1E3A5F] leading-tight">
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 md:mt-8 leading-7 md:leading-9 font-outfit font-semibold text-[#90CAF9] px-4 text-[18px] md:text-[24px]">
            {heroContent.subtitle}
          </p>

          {/* Call-to-Action Button */}
          <button className="inline-flex items-center gap-3 rounded-md bg-[#1E3A5F] font-outfit px-6 py-3 text-sm md:text-base font-medium text-white transition hover:bg-[#90CAF9] mt-6 md:mt-8">
            Generate My Bio Now <FaArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
