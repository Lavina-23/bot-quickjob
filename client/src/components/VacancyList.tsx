import {
  faCircleArrowRight,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreVacancyDetails } from "../hooks/hooks";
import { fetchVacancy } from "../services/api";
import { Vacancy } from "../types/types";

const VacancyList = forwardRef<HTMLDivElement>((_props, ref) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const { setShowVacancyDetails } = useStoreVacancyDetails();
  const navigate = useNavigate();

  useEffect(() => {
    const getVacancies = async () => {
      const vacancies = await fetchVacancy();
      setVacancies(vacancies);
    };
    getVacancies();
  }, []);

  return (
    <section
      ref={ref}
      className="py-10 px-[10rem] mesh-bg-right cursor-default"
    >
      <ul className="grid grid-cols-4 gap-5">
        {vacancies && vacancies.length > 0 ? (
          vacancies.map((vacancy) => (
            <div className="back-card-hover rounded-lg hover:border hover:bg-yellow hover:border-blue">
              <li
                key={vacancy._id}
                onClick={() => {
                  setShowVacancyDetails(vacancy);
                  navigate("/detail-vacancy/" + vacancy._id);
                }}
                className="w-full p-5 z-50 rounded-lg border border-blue bg-white card-hover hover:mb-[-2px]"
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
                  <p className="line-clamp-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus non repellat consequatur nulla, a quidem quo
                    veritatis voluptatem earum vel? Maiores voluptatibus
                    voluptas sit, quis omnis impedit beatae! Officia, aut!
                  </p>
                  <button>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      className="text-blue size-10"
                    />
                  </button>
                </div>
              </li>
            </div>
          ))
        ) : (
          <p>No vacancies available.</p>
        )}
      </ul>
    </section>
  );
});

export default VacancyList;
