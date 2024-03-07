import { useEffect } from "react";
import { OPTIONS, ICCRANKING } from "../utility/config";
import { setIccRanking } from "../utility/cricketDataSlice";
import { useDispatch } from "react-redux";
export const useIccRanking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ICCRANKING, OPTIONS);
    const json = await data.json();
    dispatch(setIccRanking(json.rank));
  };
};
