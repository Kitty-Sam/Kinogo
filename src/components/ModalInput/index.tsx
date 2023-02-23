import React, { FC, useContext } from 'react';
import { Input, InputContainer, InputIcon } from '~components/ModalInput/style';
import { ModalInputPropsType } from '~components/ModalInput/type';
import { THEME_COLORS } from '~constants/theme';
import { ThemeContext } from '~context/ThemeContext';

export const ModalInput: FC<ModalInputPropsType> = ({ icon, placeholder }) => {
    const { theme } = useContext(ThemeContext);
    const color = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    return (
        <InputContainer>
            <InputIcon source={icon} color={color} />
            <Input placeholder={placeholder} placeholderTextColor={THEME_COLORS.placeholder} />
        </InputContainer>
    );
};
