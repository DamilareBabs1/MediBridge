import { useState } from "react";

export function useDeptModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (item: any) => {
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return {
    isModalOpen,
    selectedCard,
    openModal,
    closeModal,
  };
}