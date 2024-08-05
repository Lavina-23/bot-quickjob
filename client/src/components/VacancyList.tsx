import { forwardRef, useEffect, useState } from "react";
import { fetchVacancy } from "../services/api";

interface Vacancy {
  _id: string;
  name: string;
  job_title: string;
  salary: number;
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
    <div ref={ref}>
      <h2 className="bg-slate-600">Lowongan</h2>
      <ul>
        {vacancies.length > 0
          ? vacancies.map((vacancy) => (
              <li key={vacancy._id}>
                <h3>Pekerjaan: {vacancy.job_title}</h3>
                <h3>salary: {vacancy.salary}</h3>
                <p>Dibuat oleh: {vacancy.name}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
});

export default VacancyList;
