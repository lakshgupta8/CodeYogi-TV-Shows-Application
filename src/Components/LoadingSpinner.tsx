import { ImSpinner } from "react-icons/im";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return <div className={`flex justify-center items-center p-2 ${className}`}>
    <ImSpinner className={`animate-spin text-2xl text-amber-500`} />
  </div>;
};

export default LoadingSpinner;
