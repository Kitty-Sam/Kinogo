import { useState } from 'react';

export const useOpen = (initValue: boolean) => {
    const [isOpen, setIsOpen] = useState(initValue);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const onToggle = () => setIsOpen(!isOpen);

    return { onClose, onOpen, onToggle, isOpen };
};
