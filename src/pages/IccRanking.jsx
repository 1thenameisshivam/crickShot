import { useIccRanking } from "../hooks/useIccRanking";

const IccRanking = () => {
  useIccRanking();

  return (
    <div
      className="bg-black text-white
   h-[100vh] p-5"
    >
      <h1 className="m-auto text-center text-3xl font-mono p-2">Icc-Ranking</h1>
    </div>
  );
};

export default IccRanking;
