import { useState } from "react";
import axios from "axios";

const Biosta = () => {
  const [keywords, setKeywords] = useState("");
  const [generatedBio, setGeneratedBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(generatedBio)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const generateBio = async (e) => {
    e.preventDefault();
    if (!keywords) {
      alert("Please enter some keywords.");
      return;
    }
    setLoading(true);

    try {
      // Call to Gemini API for bio generation
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMENI_API_KEY}`, // Gemini API endpoint
        {
          contents: [
            {
              parts: [
                {
                  text: `Generate a short, engaging Instagram bio for someone passionate about creativity, collaboration, and personal growth. The bio should be modern, approachable, and inspiring, with a maximum length of 150 characters. Use multiple lines to format the bio. Incorporate the following keywords provided by the user "${keywords}"`,
                },
              ],
            },
          ],
        },
        
      );

      const bio = response.data.candidates[0].content.parts[0].text; 
      setGeneratedBio(bio);
    } catch (error) {
      console.error("Error generating bio:", error);
      alert(
        error.response?.data?.error?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto mb-20">
      <section className="bg-[#fff]">
        <div className="md:p-12 lg:px-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold font-outfit text-[#1E3A5F] md:text-[28px]">
              Generate Your Perfect Bio
            </h2>
            <p className="hidden font-outfit text-[#343A40] sm:mt-4 sm:block">
              Enter keywords that describe you or your vibe, and let our AI
              create a unique bio for you.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form className="sm:flex sm:gap-4" onSubmit={generateBio}>
              <div className="sm:flex-1">
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Enter keywords (e.g., coder, gamer, traveler)"
                  className="w-full font-outfit rounded-md border-gray-400 bg-white p-3 text-[#1E3A5F] shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#1E3A5F]"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1E3A5F] hover:bg-[#90CAF9] px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-[#1E3A5F] sm:mt-0 sm:w-auto"
              >
                {loading ? "Generating..." : "Generate Bio"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {generatedBio && (
        <div className="mt-10 sm:mt-12 text-center">
          <div className="border-[#1E3A5F] border-4 inline-flex p-[15px] rounded-lg w-full sm:w-auto">
            <div>
              <h1 className="font-outfit font-bold text-[#1E3A5F] text-[20px]">
                Your Generated Bio
              </h1>
              <p className="text-[#64B5F6] font-medium font-outfit mt-4">
                {generatedBio}
              </p>
              <button
                onClick={handleCopy}
                className="mt-4 bg-[#1E3A5F] text-white px-4 py-2 rounded-md hover:bg-[#90CAF9] transition"
              >
                {copied ? "Copied!" : "Copy Bio"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biosta;
