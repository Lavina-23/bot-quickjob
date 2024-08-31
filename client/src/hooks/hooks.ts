import { create } from "zustand";
import { Vacancy } from "../types/types";

interface ShowVacancyDetails {
  isShowVacancyDetails: boolean;
  vacancyContent: Vacancy | null;
  setShowVacancyDetails: (Vacancy: Vacancy) => void;
}

export const useStoreVacancyDetails = create<ShowVacancyDetails>((set) => ({
  isShowVacancyDetails: false,
  vacancyContent: null,
  setShowVacancyDetails: (content) =>
    set({ isShowVacancyDetails: true, vacancyContent: content }),
}));
