import { useEffect, useState } from "react";
import { fetchVacancy } from "../services/api";

interface Vacancy {
  id: number,
  name: string,
  job_title: string,
  sallary: number,
}

const VacancyList = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    const getVacancies = async () => {
      const vacancies = await fetchVacancy();
      setVacancies(vacancies);
    };
    getVacancies();
  }, []);

  return <div>
    <h2>Lowongan Tersedia</h2>
    <ul>
      {vacancies && vacancies.length ? vacancies.map((vacancy) => (
        <div>
          <h3>${vacancy.job_title}</h3>
          <h3>${vacancy.sallary}</h3>
          <p>Dibuat oleh: ${ vacancy.name }</p>
        </div>
      )) : null}
    </ul>
  </div>;
}

export default VacancyList;
