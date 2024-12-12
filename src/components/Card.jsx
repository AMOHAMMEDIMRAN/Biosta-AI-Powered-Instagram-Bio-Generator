import cardsContent from "../assets/card";

const Card = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardsContent.map((card, index) => (
          <article key={index} className="overflow-hidden bg-[#fff] rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={card.image}
              className="h-56 w-full object-cover"
            />

            <div className="bg-[#F3F7FB] p-4 sm:p-6">
              <a href="#">
                <h3 className="mt-0.5 text-lg font-outfit font-semibold text-[#1E3A5F]">
                  {card.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 font-outfit text-sm sm:text-base text-[#90CAF9]">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Card;
