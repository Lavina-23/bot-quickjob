import { useEffect, useState } from "react";
import { useStoreVacancyDetails } from "../hooks/hooks";
import { fetchVacancy } from "../services/api";
import { Vacancy } from "../types/types";

const DetailVacancy = () => {
  const { vacancyContent } = useStoreVacancyDetails();
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    const getVacancies = async () => {
      const vacancies = await fetchVacancy();
      setVacancies(vacancies);
    };
    getVacancies();
  }, [vacancyContent?._id]);

  return (
    <>
      <section className="py-10 px-40">
        <div className="grid gap-5">
          <div>
            <h1 className="text-3xl font-bold">Detail Vacancy</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              {vacancyContent?.job_title}
            </h1>
            <h6 className="text-md">{vacancyContent?.name}</h6>
          </div>
          <button className="border-1">Apply</button>
        </div>
      </section>
    </>
  );
};

export default DetailVacancy;
