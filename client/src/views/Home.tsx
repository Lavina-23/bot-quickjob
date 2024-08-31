import { useRef } from "react";
import Hero from "../components/Hero";
import VacancyList from "../components/VacancyList";

const Home = () => {
  const vacancyListRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = () => {
    vacancyListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <Hero onScrollToVacancyList={handleScrollTo} />
        <VacancyList ref={vacancyListRef} />
      </div>
    </>
  );
};

export default Home;
