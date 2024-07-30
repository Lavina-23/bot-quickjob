import { useEffect, useState } from "react";
import { fetchVacancy } from "../services/api";

interface Vacancy {
  _id: string;
  name: string;
  job_title: string;
  sallary: number;
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

  return (
    <div>
      <h2>Lowongan yang Tersedia</h2>
      <ul>
        {vacancies && vacancies.length
          ? vacancies.map((vacancy) => (
              <div key={vacancy._id}>
                <h3>Pekerjaan: {vacancy.job_title}</h3>
                <h3>Sallary: {vacancy.sallary}</h3>
                <p>Dibuat oleh: {vacancy.name}</p>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default VacancyList;
