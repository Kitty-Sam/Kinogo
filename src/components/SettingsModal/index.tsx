import React, { FC, useState } from 'react';
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

export const SettingsModal: FC<SettingsModalPropsType> = ({ settingsModalOpen, setSettingsModalOpen }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={settingsModalOpen}
            onRequestClose={() => {
                setSettingsModalOpen(!settingsModalOpen);
            }}
        >
            <CentredView>
                <ModalView bgColor={'#2E2E2E'}>
                    <ModalTitleContainer>
                        <ModalTitle>Settings</ModalTitle>
                        <ModalTitle onPress={() => setSettingsModalOpen(false)}>x</ModalTitle>
                    </ModalTitleContainer>
                    <AdditionalText textColor={'#fff'}>Notifications</AdditionalText>
                    <SwitchContainer>
                        <Text textColor={'#fff'}>off</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#fff' }}
                            thumbColor={isEnabled ? '#81b0ff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text textColor={'#fff'}>on</Text>
                    </SwitchContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
