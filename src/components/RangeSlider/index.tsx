import React, { FC, useCallback, useState } from 'react';
import RangeSliderRN from 'rn-range-slider';

import { RailSelected } from '~components/RangeSlider/AdditionalComponents/RailSelected';
import { Thumb } from '~components/RangeSlider/AdditionalComponents/Thumb';
import { Rail } from '~components/RangeSlider/AdditionalComponents/Rail';
import { LabelsContainer, RangeText, RootContainer } from '~components/RangeSlider/style';
import { RangeSliderProps } from '~components/RangeSlider/type';
import { useColor } from '~hooks/useColor';
import { width } from '~constants/dimensions';

export const sliderWidth = width * 0.5;

export const RangeSlider: FC<RangeSliderProps> = ({ from, to, step }) => {
    const [low, setLow] = useState(from);
    const [high, setHigh] = useState(to);

    const { textColor } = useColor();

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
                <RangeText textColor={textColor}>{low}</RangeText>
                <RangeText textColor={textColor}>{high}</RangeText>
            </LabelsContainer>
            <RangeSliderRN
                step={step}
                style={{ width: sliderWidth }}
                min={from}
                max={to}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                onValueChanged={handleValueChange}
            />
        </RootContainer>
    );
};
