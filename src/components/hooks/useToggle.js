import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(isOpen => !isOpen);

  return { isOpen, openModal, closeModal, toggleModal };
};
