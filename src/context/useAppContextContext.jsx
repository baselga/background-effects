import { useContext } from "react";
import { AppContextContext } from "./appContext";

const useAppContextContext = () => {
  const context = useContext(AppContextContext);
  return context;
};

export default useAppContextContext;
