import { ApiResponse } from "@/types/general";
import { create } from "zustand";

interface Store {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
  data: ApiResponse | null;
  setData: (data: ApiResponse) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const useStore = create<Store>((set) => ({
  data: null,
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: false,
  setError: (error) => set({ error }),
  setData: (data) => set({ data }),
  filter: "",
  setFilter: (filter) => set({ filter }),
}));

export { useStore };
