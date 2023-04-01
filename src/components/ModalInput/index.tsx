import React, { FC } from 'react';
import { Input, InputContainer, InputIcon } from '~components/ModalInput/style';
import { ModalInputPropsType } from '~components/ModalInput/type';
import { THEME_COLORS } from '~constants/theme';

export const ModalInput: FC<ModalInputPropsType> = ({ icon, placeholder, onChangeText, value, ...rest }) => {
    return (
        <InputContainer>
            <InputIcon source={icon} color={THEME_COLORS.placeholder} />
            <Input
                multiline={false}
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor={THEME_COLORS.placeholder}
                onChangeText={onChangeText}
                value={value}
                {...rest}
            />
        </InputContainer>
    );
};
