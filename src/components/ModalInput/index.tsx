import React, { FC } from 'react';
import { Input, InputContainer, InputIcon } from '~components/ModalInput/style';
import { ModalInputPropsType } from '~components/ModalInput/type';

export const ModalInput: FC<ModalInputPropsType> = ({ icon, placeholder }) => {
    return (
        <InputContainer>
            <InputIcon source={icon} />
            <Input placeholder={placeholder} placeholderTextColor="#fff" />
        </InputContainer>
    );
};
