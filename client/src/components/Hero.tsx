import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface HeroProps {
  onScrollToVacancyList: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToVacancyList }) => {
  return (
    <div className="h-screen grid place-items-center z-50 mesh-bg">
      <div className="text-center grid justify-items-center">
        <h1 className="text-[90px] font-bold text-blue">
          Find Your Quick Job ✨
        </h1>
        <p className="text-lg font-medium max-w-4xl mb-2 text-blue">
          Looking for part-time or odd jobs? Our website offers a wide range of
          flexible opportunities to fit your schedule. Discover jobs that match
          your skills and availability. Ready to find your next gig? Click the
          button below to see the list of job openings!
        </p>
        <button onClick={onScrollToVacancyList}>
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="size-10 text-blue"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
