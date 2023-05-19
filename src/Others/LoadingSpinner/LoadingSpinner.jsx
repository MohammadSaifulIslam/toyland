import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="h-[calc(100vh-88px)] w-full flex justify-center items-center z-30">
            <HashLoader
                color="#12aee0"
                size={80}
                speedMultiplier={1.2}
            />
        </div>
    );
};

export default LoadingSpinner;