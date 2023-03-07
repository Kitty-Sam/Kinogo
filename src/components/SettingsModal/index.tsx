import React, { FC, useState } from 'react';
import { Modal, Switch } from 'react-native';
import {
    AdditionalText,
    BackDrop,
    CentredView,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
    SwitchContainer,
    Text,
} from '~components/SettingsModal/style';
import { SettingsModalPropsType } from '~components/SettingsModal/type';
import { THEME_COLORS } from '~constants/theme';
import { LanguagePicker } from '~components/LanguagePicker';
import { languages } from '~constants/languages';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';

export const SettingsModal: FC<SettingsModalPropsType> = ({ settingsModalOpen, setSettingsModalOpen }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const { textColor, bgColorModal } = useColor();

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const closeModal = () => setSettingsModalOpen();

    return (
        <Modal animationType="slide" transparent={true} visible={settingsModalOpen}>
            <BackDrop onPress={closeModal}>
                <CentredView>
                    <ModalView bgColor={bgColorModal}>
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
                    </ModalView>
                </CentredView>
            </BackDrop>
        </Modal>
    );
};
