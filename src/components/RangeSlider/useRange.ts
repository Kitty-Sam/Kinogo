import { useCallback, useState } from 'react';

export const useRange = (from: number, to: number) => {
    const [low, setLow] = useState(from);
    const [high, setHigh] = useState(to);

    const handleValueChange = useCallback(
        (newLow: number, newHigh: number) => {
            setLow(newLow);
            setHigh(newHigh);
        },
        [setLow, setHigh],
    );

    return { low, high, handleValueChange, from, to };
};
