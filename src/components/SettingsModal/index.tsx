import React, { FC, useContext, useState } from 'react';
import { Modal, Switch } from 'react-native';
import {
    AdditionalText,
    CentredView,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
    SwitchContainer,
    Text,
} from '~components/SettingsModal/style';
import { SettingsModalPropsType } from '~components/SettingsModal/type';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';

export const SettingsModal: FC<SettingsModalPropsType> = ({ settingsModalOpen, setSettingsModalOpen }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.themeButton : THEME_COLORS.dark.themeButton;
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <Modal animationType="slide" transparent={true} visible={settingsModalOpen}>
            <CentredView>
                <ModalView bgColor={bgColor}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Settings</ModalTitle>
                        <ModalTitle textColor={textColor} onPress={() => setSettingsModalOpen()}>
                            x
                        </ModalTitle>
                    </ModalTitleContainer>
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
                </ModalView>
            </CentredView>
        </Modal>
    );
};
