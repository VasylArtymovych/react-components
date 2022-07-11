import { useState } from 'react';

export const useModal = (initState = false) => {
  const [isModalShown, setIsModalShown] = useState(initState);

  const openModal = () => {
    setIsModalShown(true);
  };
  const closeModal = () => {
    setIsModalShown(false);
  };
  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };

  return { isModalShown, openModal, closeModal, toggleModal };
};
