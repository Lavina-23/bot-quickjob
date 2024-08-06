import {
  faCircleArrowRight,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useState } from "react";
import { fetchVacancy } from "../services/api";

interface Vacancy {
  _id: string;
  name: string;
  job_title: string;
  sallary: number;
}

const VacancyList = forwardRef<HTMLDivElement>((_props, ref) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    const getVacancies = async () => {
      const vacancies = await fetchVacancy();
      setVacancies(vacancies);
    };
    getVacancies();
  }, []);

  return (
    <section ref={ref} className="mb-5 px-[10rem]">
      <ul className="grid grid-cols-3 gap-10">
        {vacancies.length > 0
          ? vacancies.map((vacancy) => (
              <li
                key={vacancy._id}
                className="w-full p-5 rounded-lg border border-blue bg-white"
              >
                <h3 className="font-bold text-xl text-blue">
                  {vacancy.job_title}
                </h3>
                <h3 className="font-semibold text-base">
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    className="text-green-700 mr-2"
                  />
                  Rp {vacancy.sallary.toLocaleString("id-ID")}
                </h3>
                <div className="flex justify-end items-center mt-5">
                  {/* <h6 className="text-sm text-gray-700">
                    Klien: {vacancy.name}
                  </h6> */}
                  <button>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      className="text-blue size-10"
                    />
                  </button>
                </div>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
});

export default VacancyList;
