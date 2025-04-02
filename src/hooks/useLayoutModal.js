import { create } from 'zustand';

const useLayoutModal = create((set) => ({
  isOpen: false,
  selectedLayout: null,
  openModal: (layout) => set({ isOpen: true, selectedLayout: layout }),
  closeModal: () => set({ isOpen: false, selectedLayout: null }),
}));

export default useLayoutModal; 