import React, { useState } from 'react';
import { Switch } from 'react-native';

import { THEME_COLORS } from '~constants/theme';
import { LanguagePicker } from '~components/LanguagePicker';
import { languages } from '~constants/languages';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { removeModalType } from '~store/reducers/modalSlice';
import { useAppDispatch } from '~store/hooks';
import { AdditionalText, ModalTitle, ModalTitleContainer, SwitchContainer, Text } from '~components/style';

export const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const { textColor } = useColor();
    const dispatch = useAppDispatch();

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const closeModal = () => dispatch(removeModalType());

    return (
        <>
            <ModalTitleContainer>
                <ModalTitle textColor={textColor}>Settings</ModalTitle>
                <Icon name={'close-circle-sharp'} onPress={closeModal} color={textColor} size={24} />
            </ModalTitleContainer>
            <LanguagePicker label={'Select language'} data={languages} />
            <AdditionalText textColor={textColor}>Notifications</AdditionalText>
            <SwitchContainer>
                <Text textColor={textColor}>off</Text>
                <Switch
                    trackColor={{ false: THEME_COLORS.switch.false, true: THEME_COLORS.switch.true }}
                    thumbColor={isEnabled ? THEME_COLORS.switch.enable : THEME_COLORS.switch.notEnable}
                    ios_backgroundColor={THEME_COLORS.switch.ios}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text textColor={textColor}>on</Text>
            </SwitchContainer>
        </>
    );
};
