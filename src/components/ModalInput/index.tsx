import React, { FC } from 'react';
import { Input, InputContainer, InputIcon } from '~components/ModalInput/style';
import { ModalInputPropsType } from '~components/ModalInput/type';
import { THEME_COLORS } from '~constants/theme';
import { useColor } from '~hooks/useColor';

export const ModalInput: FC<ModalInputPropsType> = ({ icon, placeholder }) => {
    const { color } = useColor();

    return (
        <InputContainer>
            <InputIcon source={icon} color={color} />
            <Input placeholder={placeholder} placeholderTextColor={THEME_COLORS.placeholder} />
        </InputContainer>
    );
};
