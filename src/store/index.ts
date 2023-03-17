import { IMovie } from "@/interfaces/app.interface";
import { create } from "zustand";

interface InfoStore {
  modal: boolean;
  currentMovie: IMovie;
  setModal: (bool: boolean) => void;
  setCurrentMovie: (movie: IMovie) => void;
}

export const useInfoStore = create<InfoStore>()((set) => ({
  modal: false,
  currentMovie: {} as IMovie,
  setModal: (bool: boolean) => set((state) => ({ ...state, modal: bool })),
  setCurrentMovie: (movie: IMovie) =>
    set((state) => ({ ...state, currentMovie: movie })),
}));
