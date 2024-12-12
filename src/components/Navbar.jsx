import { FaUserCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#E3F2FD]">
        <div className="mx-auto flex h-16 max-w-[90%] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-[#1E3A5F] font-outfit font-semibold text-[28px] " href="#">
            Biosta.AI
          </a>

          <div className="flex flex-1 items-center justify-end ">
            

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="inline-flex items-center gap-3 rounded-md bg-[#1E3A5F] font-outfit px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#90CAF9]"
                  href=""
                >
                  Developer { <FaUserCog size={15} /> }
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
