import React, { FC } from 'react';
import { Container, Img, Title } from '~components/Button/style';
import { ButtonPropsType } from '~components/Button/type';

export const Button: FC<ButtonPropsType> = ({ title, icon, onPress, bgColor, textColor }) => {
    return (
        <Container onPress={onPress} bgColor={bgColor}>
            <Img source={icon} />
            <Title textColor={textColor}>{title}</Title>
        </Container>
    );
};
