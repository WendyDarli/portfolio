import { useState } from "react";

function useModal() {
    const [activeId, setActiveId] = useState(null);
    const isOpen = activeId !== null;

    const openModal = (id) => setActiveId(id);
    const closeModal = () => setActiveId(null);

    return { activeId, isOpen, openModal, closeModal };
}

export default useModal;