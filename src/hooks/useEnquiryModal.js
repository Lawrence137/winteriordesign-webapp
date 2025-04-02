import { create } from 'zustand';

const useEnquiryModal = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useEnquiryModal; 