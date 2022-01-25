import { useState, useCallback } from 'react';

export const useModalState = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const openModal = useCallback(() => setIsOpen(true), []);

  return { isOpen, setIsOpen, closeModal, openModal };
};
