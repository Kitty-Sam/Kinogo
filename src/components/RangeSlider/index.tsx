import React, { FC, useCallback, useState } from 'react';
import RangeSliderRN from 'rn-range-slider';

import { RailSelected } from '~components/RangeSlider/AdditionalComponents/RailSelected';
import { Thumb } from '~components/RangeSlider/AdditionalComponents/Thumb';
import { Rail } from '~components/RangeSlider/AdditionalComponents/Rail';
import { LabelsContainer, RangeText, RootContainer } from '~components/RangeSlider/style';
import { RangeSliderProps } from '~components/RangeSlider/type';

export const RangeSlider: FC<RangeSliderProps> = ({ from, to }) => {
    const [low, setLow] = useState(from);
    const [high, setHigh] = useState(to);

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);

    const handleValueChange = useCallback(
        (newLow: number, newHigh: number) => {
            setLow(newLow);
            setHigh(newHigh);
        },
        [setLow, setHigh],
    );

    return (
        <RootContainer>
            <LabelsContainer>
                <RangeText>{low}</RangeText>
                <RangeText>{high}</RangeText>
            </LabelsContainer>
            <RangeSliderRN
                style={{ width: '80%' }}
                min={from}
                max={to}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                onValueChanged={handleValueChange}
            />
        </RootContainer>
    );
};
