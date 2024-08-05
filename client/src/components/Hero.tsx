import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ onScrollToVacancyList }) => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Find Your Quick Job ✨</h1>
        <p className="text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button onClick={onScrollToVacancyList}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
