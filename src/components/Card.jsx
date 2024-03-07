const Card = ({ Name, Rank, country, rating }) => {
  return (
    <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-red-800 text-white">
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
      <div className="absolute flex text-xl  items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-300 transition-all duration-500">
        <div className="flex flex-col gap-4">
          <span>
            {Name} <span>{Rank}</span>
          </span>
          <h2>{country}</h2>
          <h2>{rating} </h2>
        </div>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase">
        hover me
      </div>
    </div>
  );
};

export default Card;
