import { ImSpinner } from "react-icons/im";

const LoadingSpinner = () => {
  return <div className="flex justify-center items-center p-2">
    <ImSpinner className="text-brand text-2xl animate-spin" />
  </div>;
};

export default LoadingSpinner;
