const Ads = () => {
  return (
    <div className="my-20 max-w-[90%] mx-auto">
      <div className="border-4 border-[#1E3A5F] rounded-lg p-8 md:p-12 text-center">
        <h1 className="text-[32px] md:text-[48px] font-bold font-outfit text-[#1E3A5F] leading-tight">
          Contact for Advertisement
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium text-[#90CAF9]">
          Want to promote your brand, product, or service? Get in touch with us
          to start advertising and reach a broader audience.
        </p>
        <button className="inline-flex items-center gap-3 rounded-md bg-[#1E3A5F] font-outfit px-6 py-3 text-sm md:text-base font-medium text-white transition hover:bg-[#90CAF9] mt-6 md:mt-8">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQZrkDccQKcdrzhqZlkRTdGKmGbFsxDmJDpllFQVvMHswldmWbkCxLQkqlVLhwqjQDGKlX">
            Contact for ads
          </a>
        </button>
      </div>
    </div>
  );
};

export default Ads;
