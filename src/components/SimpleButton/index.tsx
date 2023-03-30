import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/SimpleButton/style';
import { SimpleButtonPropsType } from '~components/SimpleButton/type';

export const SimpleButton: FC<SimpleButtonPropsType> = ({ title, onPress, backgroundColor, textColor }) => {
    return (
        <ButtonContainer onPress={onPress} bgColor={backgroundColor}>
            <ButtonText textColor={textColor}>{title}</ButtonText>
        </ButtonContainer>
    );
};
